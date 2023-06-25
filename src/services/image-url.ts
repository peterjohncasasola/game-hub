import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  return url.slice(0, index).concat('crop/600/400/').concat(url.slice(index))
}

export default getCroppedImageUrl