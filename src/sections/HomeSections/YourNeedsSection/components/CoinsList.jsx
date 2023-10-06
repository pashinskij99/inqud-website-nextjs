import { Fragment } from 'react'
import { StyledCoinsListWrapper } from '../YourNeedsSection.styled'

function CoinsList({ coinsList }) {
  return (
    <StyledCoinsListWrapper>
      {/* eslint-disable-next-line no-unused-vars */},
      {coinsList.map(({ id, icon }) => (
        <Fragment key={id}>{icon}</Fragment>
      ))}
    </StyledCoinsListWrapper>
  )
}

export default CoinsList
