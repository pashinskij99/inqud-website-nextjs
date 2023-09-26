export const addGlobalScrollBar = () => {
  document.body.style.overflow = 'unset'
}

export const removeGlobalScrollBar = () => {
  if (typeof window !== 'undefined' && window.document) {
    document.body.style.overflow = 'hidden'
  }
}
