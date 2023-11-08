export async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    // eslint-disable-next-line no-return-await
    return await navigator.clipboard.writeText(text)
  }
  return document.execCommand('copy', true, text)
}
