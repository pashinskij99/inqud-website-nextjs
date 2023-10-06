import Image from 'next/image'
import { useContext } from 'react'
import { StructuredText } from 'react-datocms/structured-text'
import clsx from 'clsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
import Close from '@/assets/icons/close.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { StyledContactWrapper } from './Contact.styled'
import background from '@/assets/images/api/contact/background.webp'
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { userSchema2 } from '@/utils/userSchema'
import { createBlog } from '@/lib/datocms'

export function GetPersonalizedForm({
  data,
  handleSubmit,
  onSubmit,
  errors,
  register,
  prop1,
  className,
  isModal = false,
  handleClose,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx('form', className)}>
      {isModal ? (
        <button type='button' className='closeButton' onClick={handleClose}>
          <Close />
        </button>
      ) : null}
      <StyledTypographyUrbanistH4 className='title'>
        <StructuredText data={data.leadForm3Title} />
      </StyledTypographyUrbanistH4>

      <ul className='grid'>{data.leadForm3Features.map(prop1)}</ul>

      <InputSendRequest
        name='email'
        helperTextBottom={errors.email?.message}
        register={register}
        classNameWrapper='input-wrapper'
        // className='input'
        label={data.leadForm3EmailLable}
        placeholder='example@mail.com'
      />
      <TextAreaSendRequest
        name='message'
        helperTextBottom={errors.message?.message}
        register={register}
        classNameWrapper='textarea'
        label={data.leadForm3MessageLable}
        placeholder={data.leadForm3MessagePlaceholder}
      />

      <StyledButtonSecondary className='submit-btn submit-btn-1'>
        {data.leadForm3Button}
      </StyledButtonSecondary>
      <StyledButtonSecondary className='submit-btn submit-btn-2'>
        {data.leadForm3Button}
      </StyledButtonSecondary>

      <StyledTypographyUrbanistSmallSpaces className='description'>
        {data.leadForm3FooterText}
      </StyledTypographyUrbanistSmallSpaces>
    </form>
  )
}

export default function Contact() {
  const {
    dataPage: { apiPage: data },
  } = useContext(PageContext)

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

    // await toast.promise(
    const submitForFormActiveCampaign = await import(
      '@/lib/activeCampaign'
    ).then((res) => res.submitForFormActiveCampaign)
    await submitForFormActiveCampaign(newData, '/api/create-contact', 9)
    //   ,
    //   {
    //     pending: 'Sending data',
    //     success: 'Data sent',
    //   }
    // )
    const toast = await import('react-toastify').then((res) => res.toast)

    await toast.promise(createBlog({ data, modelId: '2540348' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    reset()
  }

  return (
    <StyledContactWrapper>
      <Image
        className='background'
        src={background.src}
        alt='Get a personalized proposal'
        fill
      />
      <div className='container'>
        <GetPersonalizedForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          register={register}
          data={data}
          /* eslint-disable-next-line react/no-unstable-nested-components */
          prop1={({ id, image, title }) => (
            <li key={id}>
              <Image src={image.url} alt='' width={48} height={48} />
              <StyledTypographyUrbanistBody className='grid-title'>
                {title}
              </StyledTypographyUrbanistBody>
            </li>
          )}
        />
      </div>
    </StyledContactWrapper>
  )
}
