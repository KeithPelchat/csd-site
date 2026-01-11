import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { Container } from '@/components/ui/Container'
import { getPost, getRecentPosts, urlFor } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: any
  publishedAt: string
  excerpt?: string
  body?: any
  author?: {
    _id: string
    name: string
    image?: any
    bio?: any
  }
  categories?: {
    _id: string
    title: string
  }[]
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Clean Site Dumpsters Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl mt-8 mb-4 text-black">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl mt-6 mb-3 text-black">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-heading font-semibold uppercase text-lg md:text-xl mt-4 mb-2 text-black">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-base md:text-lg leading-relaxed mb-6 text-gray-700">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#D32F2F] pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          className="text-[#D32F2F] hover:underline"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="font-body text-base md:text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="font-body text-base md:text-lg leading-relaxed">{children}</li>
    ),
  },
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const [post, recentPosts] = await Promise.all([
    getPost(slug),
    getRecentPosts(5),
  ])

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero/Header Section */}
      <section className="bg-black py-16 md:py-20">
        <Container>
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 font-body text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/about/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="font-heading font-bold uppercase tracking-wide text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {post.title}
          </h1>

          {/* Post Meta */}
          <div className="font-body text-sm text-gray-300">
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {post.author?.name && (
              <>
                <span className="mx-2">|</span>
                <span>By {post.author.name}</span>
              </>
            )}
            {post.categories && post.categories.length > 0 && (
              <>
                <span className="mx-2">|</span>
                <span>{post.categories.map((cat: { _id: string; title: string }) => cat.title).join(', ')}</span>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Post Content - Main Column */}
            <main className="lg:col-span-2">
              {/* Featured Image */}
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg mb-8"
                  priority
                />
              )}

              {/* Post Body */}
              <article className="prose prose-lg max-w-none">
                {post.body && (
                  <PortableText value={post.body} components={portableTextComponents} />
                )}
              </article>

              {/* Back to Blog Link */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/about/blog"
                  className="inline-flex items-center font-heading font-semibold uppercase tracking-wide text-sm text-[#D32F2F] hover:underline"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to All Posts
                </Link>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="font-heading font-semibold uppercase tracking-wide text-xl mb-4">
                  Recent Posts
                </h3>
                {recentPosts && recentPosts.length > 0 ? (
                  <ul className="space-y-4">
                    {recentPosts
                      .filter((p: Post) => p.slug.current !== slug)
                      .slice(0, 5)
                      .map((recentPost: Post) => (
                        <li key={recentPost._id}>
                          <Link
                            href={`/about/blog/${recentPost.slug.current}`}
                            className="font-body text-sm text-gray-700 hover:text-[#D32F2F] transition-colors"
                          >
                            {recentPost.title}
                          </Link>
                          <p className="font-body text-xs text-gray-500 mt-1">
                            {new Date(recentPost.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="font-body text-sm text-gray-500">No other posts yet.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Recommended Posts Section */}
      {recentPosts && recentPosts.length > 1 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <Container>
            <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl text-black mb-8 text-center">
              Recommended Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts
                .filter((p: Post) => p.slug.current !== slug)
                .slice(0, 3)
                .map((recommendedPost: Post) => (
                  <article
                    key={recommendedPost._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {recommendedPost.mainImage && (
                      <Link href={`/about/blog/${recommendedPost.slug.current}`}>
                        <Image
                          src={urlFor(recommendedPost.mainImage).width(400).height(250).url()}
                          alt={recommendedPost.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                        />
                      </Link>
                    )}
                    <div className="p-4">
                      <h3 className="font-heading font-semibold uppercase text-lg text-[#D32F2F] mb-2">
                        <Link
                          href={`/about/blog/${recommendedPost.slug.current}`}
                          className="hover:underline"
                        >
                          {recommendedPost.title}
                        </Link>
                      </h3>
                      <p className="font-body text-xs text-gray-500">
                        {new Date(recommendedPost.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
