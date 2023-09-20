import { Fragment, useContext, useState } from 'react'
import clsx from 'clsx'
import { DialogContent } from '@mui/material'
import { useTranslations } from 'next-intl'
import { StructuredText } from 'react-datocms/structured-text'
import Image from 'next/image'
import {
  StyledFeeModalWrapper,
  StyledModalGetPersonalizedFormWrapper,
  StyledModalSendRequestWrapper,
} from '@/components/Modal/Modal.styled'
import Message from '@/assets/icons/message.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import Close from '@/assets/icons/close.svg'
import { SelectPrimary } from '../UI/Select'
import { PageContext } from '@/contexts/PageContext/PageContext'
import { GetPersonalizedForm } from '@/sections/ApiSections/Contact/Contact'

export function ModalSendRequest({
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  errors,
  register,
}) {
  const t = useTranslations('home_page_your_needs_section_modal')

  const inputs = [
    {
      id: 0,
      label: t('label_email'),
      placeholder: 'example@mail.com',
      name: 'email',
      type: 'email',
    },
    {
      id: 1,
      label: t('label_message'),
      placeholder: t('placeholder_message'),
      name: 'message',
      type: 'textarea',
    },
  ]

  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} className='modalContainer'>
        <button className='closeButton' onClick={handleClose}>
          <Close />
        </button>
        <div className='header'>
          <Message />
          <StyledTypographyUrbanistH3>{t('title')}</StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {t('description')}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='body'>
          {inputs.map(({ id, name, label, placeholder, type }) =>
            type === 'textarea' ? (
              <TextAreaSendRequest
                register={register}
                key={id}
                helperTextBottom={errors.message?.message}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <InputSendRequest
                register={register}
                key={id}
                helperTextBottom={errors.email?.message}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )
          )}
        </div>
        <div className='footer'>
          <StyledButtonSecondary type='submit'>
            {t('button_text')}
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            {t('footer_description')}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </form>
    </StyledModalSendRequestWrapper>
  )
}

export function ModalSubmitEmail({
  open,
  handleClose,
  errors,
  handleSubmit,
  onSubmit,
  register,
}) {
  const {
    dataPage: { homePage: data },
  } = useContext(PageContext)

  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} className='modalContainer'>
        <button className='closeButton' onClick={handleClose}>
          <Close />
        </button>
        <div className='header'>
          <Message />
          <StyledTypographyUrbanistH3>
            {data.lead5Title}
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {data.lead5Description}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='body'>
          <InputSendRequest
            register={register}
            name='email'
            helperTextBottom={errors.email?.message}
            label=''
            placeholder='example@mail.com'
          />
        </div>
        <div className='footer'>
          <StyledButtonSecondary type='submit'>
            {data.lead5ButtonText}
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            <StructuredText data={data.lead5FooterDescription} />
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </form>
    </StyledModalSendRequestWrapper>
  )
}

const industryList = ['Fintech1', 'Fintech2', 'Fintech3']

const getInput = ({
  name,
  type,
  label,
  placeholder,
  handleChange,
  industry,
  errors,
  register,
  control,
}) => {
  switch (type) {
    case 'text':
      return (
        <InputSendRequest
          helperTextBottom={errors[name]?.message}
          register={register}
          label={label}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )
    case 'textarea':
      return (
        <TextAreaSendRequest
          helperTextBottom={errors[name]?.message}
          register={register}
          name={name}
          label={label}
          placeholder={placeholder}
        />
      )
    case 'select':
      return (
        <SelectPrimary
          helperTextBottom={errors[name]?.message}
          register={register}
          name={name}
          label={label}
          control={control}
          placeholder={placeholder}
          handleChange={handleChange}
          activeItem={industry}
          listItems={industryList}
        />
      )
    default:
      return null
  }
}

export function GetPersonalizedModal({
  open,
  handleClose,
  data,
  errors,
  handleSubmit,
  onSubmit,
  register,
}) {
  return (
    <StyledModalGetPersonalizedFormWrapper open={open} onClose={handleClose}>
      <GetPersonalizedForm
        isModal
        handleClose={handleClose}
        errors={errors}
        onClose={handleClose}
        className='modalContainer'
        data={data}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
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
    </StyledModalGetPersonalizedFormWrapper>
  )
}

export function FeeModal({
  open,
  lastError,
  clearLastError,
  handleClose,
  errors,
  register,
  handleSubmit,
  onSubmit,
  control,
  setValue,
}) {
  const {
    dataPage: { cryptoLeadForm: leadData },
  } = useContext(PageContext)

  const [industry, setIndustry] = useState('')
  const tabs = [leadData.tabs[0], leadData.tabs[1], leadData.tabs[2]]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleChange = (event) => {
    setIndustry(event.target.value)
  }

  const handleTab = (nameTab) => {
    setActiveTab(nameTab)
    setValue(nameTab.toLowerCase(), '')
    clearLastError()
  }

  const feeInputs = [
    {
      id: 0,
      name: 'company_name',
      type: 'text',
      label: leadData.labelCompany,
      placeholder: 'inqud',
      errors,
      register,
    },
    {
      id: 1,
      name: 'website',
      type: 'text',
      label: leadData.labelWebsite,
      placeholder: 'www.inqud.com',
      errors,
      register,
    },
    {
      id: 2,
      name: 'industry',
      type: 'select',
      label: leadData.labelIndustry,
      placeholder: 'Fintech',
      handleChange,
      industry,
      errors,
      register,
      control,
    },
    {
      id: 3,
      name: 'message',
      type: 'textarea',
      label: leadData.labelMessage,
      placeholder: leadData.title.placeholderMessage,
      errors,
      register,
    },
  ]

  // const getTabContent = (tab) => {
  //   switch (tab) {
  //     case 'Email':
  //       return (
  //         <InputSendRequest
  //           errors={errors}
  //           register={register}
  //           classNameWrapper='tabInput'
  //           name='email'
  //           placeholder='example@mail.com'
  //           type='email'
  //           label='Email'
  //         />
  //       )
  //     case 'Phone':
  //       return (
  //         <InputSendRequest
  //           errors={errors}
  //           register={register}
  //           classNameWrapper='tabInput'
  //           name='phone'
  //           placeholder='+38067XXXXXXX'
  //           type='text'
  //           label='Phone'
  //         />
  //       )
  //     case 'Whatsapp':
  //       return (
  //         <InputSendRequest
  //           helperTextBottom={errors.whatsapp?.message}
  //           register={register}
  //           classNameWrapper='tabInput'
  //           name='whatsapp'
  //           placeholder='whatsapp username'
  //           type='text'
  //           label='Whatsapp'
  //         />
  //       )
  //     default:
  //       return null
  //   }
  // }

  return (
    <StyledFeeModalWrapper scroll='body' open={open} onClose={handleClose}>
      <DialogContent>
        {/* <DialogContentText tabIndex={-1}> */}
        <form onSubmit={handleSubmit(onSubmit)} className='modalContainer'>
          <button className='closeButton' onClick={handleClose}>
            <Close />
          </button>
          <div className='header'>
            <StyledTypographyUrbanistH4>
              {leadData.title}
            </StyledTypographyUrbanistH4>
          </div>
          <div className='body'>
            <div className='input-wrapper'>
              {feeInputs.map(({ ...args }) => (
                <Fragment key={args.id}>{getInput({ ...args })}</Fragment>
              ))}
            </div>

            <StyledTypographyUrbanistBody className='description'>
              {leadData.description}
            </StyledTypographyUrbanistBody>

            <div className='tabs'>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type='button'
                  onClick={() => handleTab(tab)}
                  className={clsx({
                    ['active']: activeTab === tab,
                  })}
                >
                  <StyledTypographyUrbanistBody>
                    {tab}
                  </StyledTypographyUrbanistBody>
                </button>
              ))}
            </div>
            <div className='tab-content'>
              {/* {getTabContent(activeTab)} */}
              <InputSendRequest
                helperTextBottom={lastError}
                register={register}
                classNameWrapper={clsx('tabInput', {
                  ['hide']: activeTab !== 'Email',
                })}
                onChange={() => clearLastError()}
                name='email'
                placeholder='example@mail.com'
                type='email'
                label='Email'
              />
              <InputSendRequest
                helperTextBottom={lastError}
                register={register}
                classNameWrapper={clsx('tabInput', {
                  ['hide']: activeTab !== 'Phone',
                })}
                onChange={() => clearLastError()}
                name='phone'
                placeholder='+38067XXXXXXX'
                type='text'
                label='Phone'
              />
              <InputSendRequest
                helperTextBottom={lastError}
                register={register}
                classNameWrapper={clsx('tabInput', {
                  ['hide']: activeTab !== 'Whatsapp',
                })}
                onChange={() => clearLastError()}
                name='whatsapp'
                placeholder='whatsapp username'
                type='text'
                label='Whatsapp'
              />
            </div>
          </div>
          <div className='footer'>
            <button className='submit-btn'>
              <StyledTypographyUrbanistBody>
                {leadData.buttonText}
              </StyledTypographyUrbanistBody>
            </button>

            <StyledTypographyUrbanistSmallSpaces className='description'>
              <StructuredText data={leadData.footerDescription} />
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </form>
      </DialogContent>
    </StyledFeeModalWrapper>
  )
}
