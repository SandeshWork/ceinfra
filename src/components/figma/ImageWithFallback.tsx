'use client'

import React, { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImgSrc = string | StaticImageData | { src: string }

interface ImageWithFallbackProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading' | 'width' | 'height'> {
  src: ImgSrc
  priority?: boolean
  sizes?: string
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, priority, ...rest } = props
  const resolvedSrc = typeof src === 'string' ? src : src.src

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={resolvedSrc} />
        </div>
      </div>
    )
  }

  const imageSrc = typeof src === 'string' || 'width' in src ? src : src.src

  return (
    <Image
      src={imageSrc}
      alt={alt ?? ''}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      style={style}
      priority={priority}
      onError={handleError}
      {...rest}
    />
  )
}
