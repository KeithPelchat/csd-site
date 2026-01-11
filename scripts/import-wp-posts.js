const { createClient } = require('@sanity/client');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const sanityClient = createClient({
  projectId: 'ytbb6mv6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skanuyguH3TlbKUv8wxbdgEWDYRkm5359CymVXlf3uyOK6bRkbX35ewQJFCpZOVJV7RXEM7QLQFOlNHjkEhVdolEnVY5qtM9t5FswfbC4Akbwvg7xYOjxipv99ZbQl6ue6Q1OuyTxERRI8uAD9bIDoercA9JOVHRumyFkFjDex671kml3Y9N', // Replace with your token
  useCdn: false,
});

const WP_API = 'https://cleansitedumpsters.com/wp-json/wp/v2/posts';

async function importPosts() {
  console.log('Fetching WordPress posts...');
  
  // Fetch all posts (WordPress paginates at 10 per page)
  let allPosts = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    try {
      const response = await axios.get(`${WP_API}?_embed&per_page=10&page=${page}`);
      const posts = response.data;
      
      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts = allPosts.concat(posts);
        console.log(`  - Fetched page ${page}: ${posts.length} posts`);
        page++;
      }
    } catch (error) {
      if (error.response?.status === 400) {
        // No more pages
        hasMore = false;
      } else {
        throw error;
      }
    }
  }
  
  console.log(`\nFound ${allPosts.length} posts total\n`);
  
  // Import each post
  for (const wpPost of allPosts) {
    console.log(`Importing: ${wpPost.title.rendered}`);
    
    try {
      // Download featured image if exists
      let imageAsset = null;
      if (wpPost._embedded?.['wp:featuredmedia']?.[0]) {
        const imageUrl = wpPost._embedded['wp:featuredmedia'][0].source_url;
        console.log(`  - Downloading image: ${imageUrl}`);
        
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imageResponse.data);
        
        // Upload to Sanity
        imageAsset = await sanityClient.assets.upload('image', imageBuffer, {
          filename: path.basename(imageUrl),
        });
        console.log(`  - Image uploaded: ${imageAsset._id}`);
      }
      
      // Create Sanity post
      const sanityPost = {
        _type: 'post',
        title: wpPost.title.rendered,
        slug: {
          _type: 'slug',
          current: wpPost.slug,
        },
        author: {
          _type: 'reference',
          _ref: 'a3ea71a9-5ca7-47fa-a6cf-2a3aa39772dd', // We'll need to create an author first or make this a string
        },
        publishedAt: wpPost.date,
        excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
        mainImage: imageAsset ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        } : undefined,
        body: convertHtmlToPortableText(wpPost.content.rendered),
      };
      
      const result = await sanityClient.create(sanityPost);
      console.log(`  ✓ Created: ${result._id}\n`);
      
    } catch (error) {
      console.error(`  ✗ Error importing "${wpPost.title.rendered}":`, error.message);
      console.error(`     ${error.stack}\n`);
    }
  }
  
  console.log('\n✓ Import complete!');
}

// Convert HTML to Portable Text (simplified)
function convertHtmlToPortableText(html) {
  // Strip HTML tags and create simple portable text blocks
  const text = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<h2[^>]*>/gi, '\n\n## ')
    .replace(/<\/h2>/gi, '\n\n')
    .replace(/<h3[^>]*>/gi, '\n\n### ')
    .replace(/<\/h3>/gi, '\n\n')
    .replace(/<li[^>]*>/gi, '\n• ')
    .replace(/<\/li>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
  
  // Split into paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  
  return paragraphs.map(para => {
    const trimmed = para.trim();
    
    // Detect heading level
    let style = 'normal';
    let content = trimmed;
    
    if (trimmed.startsWith('## ')) {
      style = 'h2';
      content = trimmed.substring(3);
    } else if (trimmed.startsWith('### ')) {
      style = 'h3';
      content = trimmed.substring(4);
    }
    
    return {
      _type: 'block',
      _key: Math.random().toString(36).substr(2, 9),
      style: style,
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).substr(2, 9),
          text: content,
          marks: [],
        },
      ],
    };
  });
}

// Run import
importPosts().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});