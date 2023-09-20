export const helpCentreLinkTransform = (text) =>
  text.split(' ').join('_').toLowerCase()

export const helpCentreLinkTransformToNormal = (transformText) =>
  transformText.split('_').join(' ').toLowerCase()
