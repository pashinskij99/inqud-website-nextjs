import { Fragment } from 'react'
import { StyledCoinsListWrapper } from '../YourNeedsSection.styled'

function CoinsList({ coinsList }) {
  return (
    <StyledCoinsListWrapper>
      {coinsList.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </StyledCoinsListWrapper>
  )
}

export default CoinsList
