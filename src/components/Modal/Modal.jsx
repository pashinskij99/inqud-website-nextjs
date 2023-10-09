'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
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
import { GetPersonalizedForm } from '@/sections/ApiSections/Contact/Contact'
import { getPageData } from '@/lib/datocms'
import { MODAL_1, MODAL_2 } from '@/lib/datocmsQuery'

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
        <button type='reset' className='closeButton' onClick={handleClose}>
          <Image src={Close} alt='Close' />
        </button>
        <div className='header'>
          <Image src={Message} alt='Message' />
          {/* <Message /> */}
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
  params,
}) {
  const [data, setData] = useState({})
  // const {
  //   dataPage: { homePage: data },
  // } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: MODAL_2,
      })

      setData(pageData.homePage)
    }

    getData()
  }, [])

  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} className='modalContainer'>
        <button type='reset' className='closeButton' onClick={handleClose}>
          <Image src={Close} alt='close' />
        </button>
        <div className='header'>
          <Image src={Message} alt='Message' />

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

const industryList = [
  'iGaming',
  'Betting',
  'Adult',
  'Crypto',
  'NFT',
  'Farmacy',
  'Fintech',
  'Medicine',
  'E-commerce',
  'Gaming',
  'Travel',
  'Horeca',
  'Education',
  'Blogging',
]

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
          listItems={industryList.sort((a, b) => {
            if (a.toUpperCase() < b.toUpperCase()) {
              return -1
            }
            if (a.toUpperCase() > b.toUpperCase()) {
              return 1
            }
            return 0
          })}
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
  params,
}) {
  const [leadData, setLeadData] = useState({})

  // const {
  //   dataPage: { cryptoLeadForm: leadData },
  // } = useContext(PageContext)

  // const { params } = useContext(PageContext)

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: MODAL_1,
      })

      setLeadData(pageData.cryptoLeadForm)
    }

    getData()
  }, [])

  const [industry, setIndustry] = useState('')
  const tabs = useMemo(
    () =>
      Object.keys(leadData).length !== 0
        ? [leadData?.tabs[0], leadData?.tabs[1], leadData?.tabs[2]]
        : [],
    [leadData]
  )

  const [activeTab, setActiveTab] = useState(tabs[0])

  useEffect(() => {
    setActiveTab(tabs[0])
  }, [tabs])

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
      placeholder: leadData.title?.placeholderMessage,
      errors,
      register,
    },
  ]

  return (
    <StyledFeeModalWrapper scroll='body' open={open} onClose={handleClose}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className='modalContainer'>
          <button type='reset' className='closeButton' onClick={handleClose}>
            <Image src={Close} alt='close' />
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
                placeholder='whatsapp number'
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
