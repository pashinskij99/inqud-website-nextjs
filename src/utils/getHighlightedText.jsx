export function getHighlightedText(text, highlight) {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {' '}
      {parts.map((part, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: 'bold' }
              : {}
          }
        >
          {part}
        </span>
      ))}{' '}
    </span>
  )
}
