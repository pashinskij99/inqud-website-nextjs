import Image from 'next/image'
import Link from 'next-intl/link'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
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
  const { pageData } = useContext(HelpCentreContext)

  const { helpCentreExploreProducts, helpCentreExploreCategories } =
    useSelector((state) => state.helpCentre)

  return (
    <StyledBusinessSectionWrapper>
      <div className='container'>
        <SubSection
          title={pageData.titleByProduct}
          grid={helpCentreExploreProducts}
        />
        <SubSection
          title={pageData.titleByCategory}
          grid={helpCentreExploreCategories}
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
        {grid.map(({ id, icon, mainTitle: titleCart, content, slugPage }) => (
          <Cart
            key={id}
            icon={icon.url}
            titleCart={titleCart}
            answers={content.length}
            listQuestions={content}
            slugPage={slugPage}
          />
        ))}
      </div>
    </StyledSubSectionWrapper>
  )
}

function Cart({ icon, titleCart, listQuestions, answers, slugPage }) {
  const { pageData } = useContext(HelpCentreContext)

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
                <Link href={`/help-center/${slugPage}?anchor=${title}`}>
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
            {pageData.cartButtonView}
          </StyledButtonLearnMore>
        </Link>

        <StyledTypographyUrbanistBody className='cart-answers-text'>
          {pageData.cartAnswers}: {answers}
        </StyledTypographyUrbanistBody>
      </div>
    </li>
  )
}

export default MainSection
