import {
  StyledTypographyIBMH4,
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import {
  StyledCoreSectionWrapper,
  StyledGridCartWrapper,
} from './CoreSection.styled'

export default function CoreSection({ data }) {
  // const {
  //   dataPage: { aboutUsPage: data },
  // } = useContext(PageContext)

  return (
    <StyledCoreSectionWrapper>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='title'>
          {data.screen2MainTitle}
        </StyledTypographyUrbanistH2>

        <ul className='grid'>
          {data.screen2Features.map(
            ({
              cartId: id,
              cartTitle: title,
              cartDescription: description,
            }) => (
              <li key={id}>
                <GridCart id={id} title={title} description={description} />
              </li>
            )
          )}
        </ul>
      </div>
    </StyledCoreSectionWrapper>
  )
}

function GridCart({ id, title, description }) {
  return (
    <StyledGridCartWrapper>
      <div className='cart-id-wrapper'>
        <StyledTypographyIBMH4 className='cart-id'>{id}</StyledTypographyIBMH4>
      </div>
      <div className='cart-text-wrapper'>
        <StyledTypographyUrbanistH3 className='cart-title'>
          {title}
        </StyledTypographyUrbanistH3>
        <StyledTypographyUrbanistBody className='cart-description'>
          {description}
        </StyledTypographyUrbanistBody>
      </div>
    </StyledGridCartWrapper>
  )
}
