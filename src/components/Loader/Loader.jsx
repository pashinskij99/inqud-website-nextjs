import { StyledFullScreenLoader, StyledLoader } from './Loader.styled'

function Loader({ className }) {
  return <StyledLoader className={className} />
}

function FullScreenLoader({ className }) {
  return (
    <StyledFullScreenLoader className={className}>
      <Loader />
    </StyledFullScreenLoader>
  )
}

export { Loader, FullScreenLoader }
