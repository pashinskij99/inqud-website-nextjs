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
import { StyledButtonLearnMore } from '@/components/UI/Button/Button.styled'
import { HelpCentreContext } from '@/contexts/HelpCentreContext/HelpCentreContext'

function MainSection() {
  const { browseByProductData, exploreByCategoryData, pageData } =
    useContext(HelpCentreContext)

  return (
    <StyledBusinessSectionWrapper>
      <div className='container'>
        <SubSection
          title={pageData.titleByProduct}
          grid={browseByProductData}
        />
        <SubSection
          title={pageData.titleByCategory}
          grid={exploreByCategoryData}
        />
        <StyledOtherDocumentationSectionWrapper
          title={pageData.documentationTitle}
          titleCart={pageData.documentationTitleCart}
          btnText={pageData.documentationButtonText}
          descriptionCart={pageData.documentationDescriptionCart}
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
        {grid.map(
          ({
            id,
            icon,
            title: titleCart,
            answers,
            listQuestions,
            slugPage,
          }) => (
            <Cart
              key={id}
              id={id}
              icon={icon}
              titleCart={titleCart}
              answers={answers}
              listQuestions={listQuestions}
              slugPage={slugPage}
            />
          )
        )}
      </div>
    </StyledSubSectionWrapper>
  )
}

// eslint-disable-next-line no-unused-vars
function Cart({ id, icon, titleCart, listQuestions, answers, slugPage }) {
  return (
    <li className='cart'>
      <div>
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
                  // href={`/help-center/${helpCentreLinkTransform(titleCart)}`}
                  href={`/help-center/${slugPage}?anchor=${title}`}
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
      </div>

      <div className='cart-footer'>
        <Link href={`/help-center/${slugPage}`}>
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

export default MainSection
