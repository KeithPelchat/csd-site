import Link from 'next/link'
import { ReactNode, MouseEventHandler } from 'react'

interface AngledButtonProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function AngledButton({
  children,
  href,
  onClick,
  className = '',
  type = 'button'
}: AngledButtonProps) {
  const baseStyles = `
    inline-block
    px-8 py-4
    bg-[#D32F2F]
    hover:bg-[#B71C1C]
    text-white
    font-heading
    font-semibold
    text-base md:text-lg
    uppercase
    tracking-wide
    transition-colors
    duration-200
    clip-path-parallelogram
    cursor-pointer
  `

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  )
}
