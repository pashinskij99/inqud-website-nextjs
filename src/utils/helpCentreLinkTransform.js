export const helpCentreLinkTransform = (text) =>
  text.split(' ').join('-').toLowerCase()

export const helpCentreLinkTransformToNormal = (transformText) =>
  transformText.split('-').join(' ').toLowerCase()
