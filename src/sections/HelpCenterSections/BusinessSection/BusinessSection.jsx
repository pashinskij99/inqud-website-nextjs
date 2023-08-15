import Image from 'next/image'
import Link from 'next/link'
import {
  StyledBusinessSectionWrapper,
  StyledOtherDocumentationSectionWrapper,
  StyledSubSectionWrapper,
} from '@/sections/HelpCenterSections/BusinessSection/BusinessSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import Icon1 from '@/assets/images/help-center/icon1.svg'
import Icon2 from '@/assets/images/help-center/icon2.svg'
import Icon3 from '@/assets/images/help-center/icon3.svg'
import Icon4 from '@/assets/images/help-center/icon4.svg'
import Icon5 from '@/assets/images/help-center/icon5.svg'
import Icon6 from '@/assets/images/help-center/icon6.svg'
import Icon7 from '@/assets/images/help-center/icon7.svg'
import image from '@/assets/images/help-center/folder.png'
import {
  StyledButtonGetStarted,
  StyledButtonLearnMore,
} from '@/components/UI/Button/Button.styled'

const grid1 = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Wallet',
    answers: '7',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'How to start using INQUD?',
      },
      {
        idQuestion: 1,
        text: 'What is INQUD?',
      },
      {
        idQuestion: 2,
        text: 'Can anyone use INQUD?',
      },
    ],
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'Exchange',
    answers: '16',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'How to start using INQUD?',
      },
      {
        idQuestion: 1,
        text: 'What is INQUD?',
      },
      {
        idQuestion: 2,
        text: 'Can anyone use INQUD?',
      },
    ],
  },
  {
    id: 2,
    icon: <Icon3 />,
    title: 'Transfer',
    answers: '9',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'How to start using INQUD?',
      },
      {
        idQuestion: 1,
        text: 'What is INQUD?',
      },
      {
        idQuestion: 2,
        text: 'Can anyone use INQUD?',
      },
    ],
  },
]

const grid2 = [
  {
    id: 0,
    icon: <Icon4 />,
    title: 'General',
    answers: '12',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'How to start using INQUD?',
      },
      {
        idQuestion: 1,
        text: 'What is INQUD?',
      },
      {
        idQuestion: 2,
        text: 'Can anyone use INQUD?',
      },
    ],
  },
  {
    id: 1,
    icon: <Icon5 />,
    title: 'Getting started',
    answers: '4',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'How to register an account on INQUD?',
      },
      {
        idQuestion: 1,
        text: 'How to delete an account on INQUD?',
      },
      {
        idQuestion: 2,
        text: 'How can I change my email address?',
      },
    ],
  },
  {
    id: 3,
    icon: <Icon6 />,
    title: 'Account verification & security',
    answers: '8',
    listQuestions: [
      {
        idQuestion: 1,
        text: 'What is a fiat on-ramp?',
      },
      {
        idQuestion: 2,
        text: 'How to delete an account on INQUD?',
      },
      {
        idQuestion: 3,
        text: 'How can I change my email address?',
      },
    ],
  },
  {
    id: 4,
    icon: <Icon7 />,
    title: 'Payment methods & currencies',
    answers: '6',
    listQuestions: [
      {
        idQuestion: 0,
        text: 'Where to find a privacy policy?',
      },
      {
        idQuestion: 1,
        text: 'How are my funds secured?',
      },
      {
        idQuestion: 2,
        text: 'Can my crypto wallet be hacked?',
      },
    ],
  },
]

function BusinessSection() {
  return (
    <StyledBusinessSectionWrapper>
      <div className='container'>
        <SubSection title='Browse by product' grid={grid1} />
        <SubSection title='Explore by category' grid={grid2} />
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

function Cart({ icon, titleCart, listQuestions, answers }) {
  return (
    <li className='cart'>
      <div className='cart-header'>
        {icon}
        <StyledTypographyUrbanistH5 className='cart-title'>
          {titleCart}
        </StyledTypographyUrbanistH5>
      </div>
      <div className='cart-body'>
        {listQuestions.map(({ idQuestion, text }) => (
          <Link href='/help-centre/general'>
            <StyledTypographyUrbanistBody
              key={idQuestion}
              className='cart-question'
            >
              {text}
            </StyledTypographyUrbanistBody>
          </Link>
        ))}
      </div>
      <div className='cart-footer'>
        <Link href='/help-centre/general'>
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
            icon={icon}
            titleCart={titleCart}
            answers={answers}
            listQuestions={listQuestions}
          />
        ))}
      </div>
    </StyledSubSectionWrapper>
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

export default BusinessSection
