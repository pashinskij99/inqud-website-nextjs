'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
import {
  StyledFormWrapper,
  StyledSendRequestSectionWrapper,
} from './SendRequestSection.styled'
import Message from '@/assets/icons/message.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import background from '@/assets/images/api/contact/background.webp'
// import background from '@/assets/images/api/contact/background.webp'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { userSchema2 } from '@/utils/userSchema'

export default function SendRequestSection() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(userSchema2),
  })

  const onSubmit = async (data) => {
    const newData = {
      email: data.email,
      fieldValues: [
        {
          field: '1',
          value: data.message,
        },
      ],
    }

    const submitForFormActiveCampaign = await import(
      '@/lib/activeCampaign'
    ).then((res) => res.submitForFormActiveCampaign)
    await submitForFormActiveCampaign(newData, '/api/create-contact', 6)

    const toast = await import('react-toastify').then((res) => res.toast)
    const createBlog = await import('@/lib/datocms').then(
      (res) => res.createBlog
    )
    await toast.promise(createBlog({ data, modelId: '2540255' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })
    reset()
  }

  return (
    <StyledSendRequestSectionWrapper>
      <Image
        className='background'
        src={background.src}
        alt='Get a personalized proposal'
        fill
      />
      <div className='container'>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      </div>
    </StyledSendRequestSectionWrapper>
  )
}

function Form({ register, handleSubmit, errors, onSubmit }) {
  const {
    dataPage: { cryptoWidgetPage: data },
  } = useContext(PageContext)

  const inputs = [
    {
      id: 0,
      label: data.leadForm3EmailLabel,
      placeholder: 'example@mail.com',
      name: 'email',
      type: 'email',
    },
    {
      id: 1,
      label: data.leadForm3MessageLabel,
      placeholder: data.leadForm3MessagePlaceholder,
      name: 'message',
      type: 'textarea',
    },
  ]

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className='formContainer'>
        <div className='header'>
          <Image src={Message} alt='Message' />
          <StyledTypographyUrbanistH3>
            {data.lead3Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {data.leadForm3Description}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='body'>
          {inputs.map(({ id, name, label, placeholder, type }) =>
            type === 'textarea' ? (
              <TextAreaSendRequest
                key={id}
                helperTextBottom={errors[name]?.message}
                register={register}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <InputSendRequest
                key={id}
                helperTextBottom={errors[name]?.message}
                register={register}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )
          )}
        </div>
        <div className='footer'>
          <StyledButtonSecondary className='submit-btn'>
            {data.leadForm3SubmitButton}
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            {data.leadForm3FooterText}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </form>
      {/* </div> */}
    </StyledFormWrapper>
  )
}
