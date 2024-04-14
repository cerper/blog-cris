import config from '@/sanity.config'
import imageUrlBuilder from '@sanity/image-url'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import React from 'react'

const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
