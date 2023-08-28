import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import {
  StyledBusinessSectionWrapper,
  StyledOtherDocumentationSectionWrapper,
  StyledSubSectionWrapper,
} from '@/sections/HelpCenterSections/MainSection/MainSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import image from '@/assets/images/help-center/folder.png'
import {
  StyledButtonGetStarted,
  StyledButtonLearnMore,
} from '@/components/UI/Button/Button.styled'
import { HelpCentreContext } from '@/contexts/HelpCentreContext/HelpCentreContext'

function MainSection() {
  const { browseByProductData, exploreByCategoryData } =
    useContext(HelpCentreContext)

  return (
    <StyledBusinessSectionWrapper>
      <div className='container'>
        <SubSection title='Browse by product' grid={browseByProductData} />
        <SubSection title='Explore by category' grid={exploreByCategoryData} />
        <OtherDocumentationSection
          title='Other documentation'
          titleCart='Knowlage base'
          btnText='Go to knowlage base'
          descriptionCart='A knowledge base is a self-serve online library of information about a product, service, department, or topic. The data in your knowledge base can come from anywhere.'
        />
      </div>
    </StyledBusinessSectionWrapper>
  )
}

function SubSection({ title, grid }) {
  return (
    <StyledSubSectionWrapper className='sub-section'>
      <StyledTypographyUrbanistH3 className='title'>
        {title}
      </StyledTypographyUrbanistH3>
      <div className='grid'>
        {grid.map(({ id, icon, title: titleCart, answers, listQuestions }) => (
          <Cart
            key={id}
            id={id}
            icon={icon}
            mainTitle={title}
            titleCart={titleCart}
            answers={answers}
            listQuestions={listQuestions}
          />
        ))}
      </div>
    </StyledSubSectionWrapper>
  )
}

function Cart({ id, icon, mainTitle, titleCart, listQuestions, answers }) {
  return (
    <li className='cart'>
      <div className='cart-header'>
        <Image src={icon} alt={titleCart} width={64} height={64} />
        <StyledTypographyUrbanistH5 className='cart-title'>
          {titleCart}
        </StyledTypographyUrbanistH5>
      </div>
      <div className='cart-body'>
        {listQuestions.map(
          ({ id: key, title }, i) =>
            i <= 2 && (
              <Link
                href={{
                  pathname: `/help-centre/${id}`,
                  query: {
                    type:
                      mainTitle === 'Browse by product'
                        ? 'product'
                        : 'category',
                  },
                }}
              >
                <StyledTypographyUrbanistBody
                  key={key}
                  className='cart-question'
                >
                  {title}
                </StyledTypographyUrbanistBody>
              </Link>
            )
        )}
      </div>
      <div className='cart-footer'>
        <Link
          href={{
            pathname: `/help-centre/${id}`,
            query: {
              type: mainTitle === 'Browse by product' ? 'product' : 'category',
            },
          }}
        >
          <StyledButtonLearnMore className='cart-btn-view'>
            View all
          </StyledButtonLearnMore>
        </Link>

        <StyledTypographyUrbanistBody className='cart-answers-text'>
          {answers} answers
        </StyledTypographyUrbanistBody>
      </div>
    </li>
  )
}

function OtherDocumentationSection({
  title,
  titleCart,
  descriptionCart,
  btnText,
}) {
  return (
    <StyledOtherDocumentationSectionWrapper>
      <StyledTypographyUrbanistH3 className='title'>
        {title}
      </StyledTypographyUrbanistH3>

      <div className='cart'>
        <div className='left-side'>
          <StyledTypographyUrbanistH5 className='cart-title'>
            {titleCart}
          </StyledTypographyUrbanistH5>
          <StyledTypographyUrbanistBody className='cart-description'>
            {descriptionCart}
          </StyledTypographyUrbanistBody>
          <StyledButtonGetStarted className='cart-btn'>
            <StyledTypographyUrbanistBody className='cart-btn-text'>
              {btnText}
            </StyledTypographyUrbanistBody>
          </StyledButtonGetStarted>
        </div>
        <div className='right-side'>
          <Image
            src={image.src}
            alt={titleCart}
            width={128.59}
            height={146.13}
          />
        </div>
      </div>
    </StyledOtherDocumentationSectionWrapper>
  )
}

export default MainSection
