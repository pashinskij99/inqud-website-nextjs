import { forwardRef } from 'react'
import { StyledFullScreenLoader, StyledLoader } from './Loader.styled'

function Loader({ className }) {
  return <StyledLoader className={className} />
}

const FullScreenLoader = forwardRef(({ className, ...otherProps }, ref) => (
  <StyledFullScreenLoader {...otherProps} ref={ref} className={className}>
    <Loader />
  </StyledFullScreenLoader>
))

export { Loader, FullScreenLoader }
