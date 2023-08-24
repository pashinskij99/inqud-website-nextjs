import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledContactWrapper } from './Contact.styled'
import Icon1 from '@/assets/images/api/contact/icon1.svg'
import Icon2 from '@/assets/images/api/contact/icon2.svg'
import background from '@/assets/images/api/contact/background.webp'
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function Contact() {
  const t = useTranslations('api_page.contact')
  const t2 = useTranslations('home_page.your_needs_section.modal')
  const tList = useTranslations('api_page.contact.items')

  const grid = [
    {
      id: 0,
      icon: <Icon1 />,
      title: tList(keysForLocale.keys2[0]),
    },
    {
      id: 1,
      icon: <Icon2 />,
      title: tList(keysForLocale.keys2[1]),
    },
  ]

  return (
    <StyledContactWrapper>
      <Image
        className='background'
        src={background.src}
        alt='Get a personalized proposal'
        fill
      />
      <div className='container'>
        <form className='form'>
          <StyledTypographyUrbanistH4 className='title'>
            <span>{t('title_wrapper_selected')}</span>{' '}
            {t('title_wrapper_not_selected')}
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
            label={t('email_wrapper_label')}
            placeholder='example@mail.com'
          />
          <TextAreaSendRequest
            classNameWrapper='textarea'
            label='Message'
            placeholder='Enter your request or question...'
          />

          <StyledButtonSecondary className='submit-btn submit-btn-1'>
            {t('button_text')}
          </StyledButtonSecondary>
          <StyledButtonSecondary className='submit-btn submit-btn-2'>
            {t2('button_text')}
          </StyledButtonSecondary>

          <StyledTypographyUrbanistSmallSpaces className='description'>
            {t('footer_text')}
          </StyledTypographyUrbanistSmallSpaces>
        </form>
      </div>
    </StyledContactWrapper>
  )
}
