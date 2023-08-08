import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledContactWrapper } from './Contact.styled'
import Icon1 from '@/assets/images/api/contact/icon1.svg'
import Icon2 from '@/assets/images/api/contact/icon2.svg'
import background from '@/assets/images/api/contact/background.png'
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'

export const grid = [
  {
    id: 0,
    icon: <Icon1 />,
    title: 'Tailored fee structure based on your niche',
  },
  {
    id: 1,
    icon: <Icon2 />,
    title: 'Catering to your every unique requirement',
  },
]

export default function Contact() {
  return (
    <StyledContactWrapper>
      <Image src={background.src} alt='Get a personalized proposal' fill />
      <div className='container'>
        <form className='form'>
          <StyledTypographyUrbanistH4 className='title'>
            <span>Get a personalized proposal</span> within 24 hours
          </StyledTypographyUrbanistH4>

          <ul className='grid'>
            {grid.map(({ id, icon, title }) => (
              <li key={id}>
                {icon}
                <StyledTypographyUrbanistBody className='grid-title'>
                  {title}
                </StyledTypographyUrbanistBody>
              </li>
            ))}
          </ul>

          <InputSendRequest
            className='input'
            label='Email'
            placeholder='example@mail.com'
          />
          <TextAreaSendRequest
            classNameWrapper='textarea'
            label='Message'
            placeholder='Enter your request or question...'
          />

          <StyledButtonSecondary className='submit-btn submit-btn-1'>
            Get proposal
          </StyledButtonSecondary>
          <StyledButtonSecondary className='submit-btn submit-btn-2'>
            Submit
          </StyledButtonSecondary>

          <StyledTypographyUrbanistSmallSpaces className='description'>
            by submitting this form, you contirm that you agree to the storing
            and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </form>
      </div>
    </StyledContactWrapper>
  )
}
