import { Fragment, useContext, useState } from 'react';
import clsx from 'clsx';
import { DialogContent } from '@mui/material';
import { useTranslations } from 'next-intl';
import { StructuredText } from 'react-datocms/structured-text';
import {
  StyledFeeModalWrapper,
  StyledModalSendRequestWrapper,
} from '@/components/Modal/Modal.styled';
import Message from '@/assets/icons/message.svg';
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled';
import { InputSendRequest, TextAreaSendRequest } from '@/components/UI/Input';
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled';
import Close from '@/assets/icons/close.svg';
import { SelectPrimary } from '../UI/Select';
import { PageContext } from '@/contexts/PageContext/PageContext';

export function ModalSendRequest({ open, handleClose, handleSubmit }) {
  const t = useTranslations('home_page_your_needs_section_modal');

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
  ];

  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit} className="modalContainer">
        <button className="closeButton" onClick={handleClose}>
          <Close />
        </button>
        <div className="header">
          <Message />
          <StyledTypographyUrbanistH3>{t('title')}</StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {t('description')}
          </StyledTypographyUrbanistBody>
        </div>
        <div className="body">
          {inputs.map(({ id, name, label, placeholder, type }) =>
            type === 'textarea' ? (
              <TextAreaSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <InputSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )
          )}
        </div>
        <div className="footer">
          <StyledButtonSecondary>{t('button_text')}</StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            {t('footer_description')}
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </form>
    </StyledModalSendRequestWrapper>
  );
}

export function ModalSubmitEmail({ open, handleClose, handleSubmit }) {
  const {
    dataPage: { homePage: data },
  } = useContext(PageContext);

  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit} className='modalContainer'>
        <button className='closeButton' onClick={handleClose}>
          <Close />
        </button>
        <div className='header'>
          <Message />
          <StyledTypographyUrbanistH3>{data.lead5Title}</StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            {data.lead5Description}
          </StyledTypographyUrbanistBody>
        </div>
        <div className='body'>
          <InputSendRequest
            name='email'
            label=''
            placeholder='example@mail.com'
          />
        </div>
        <div className='footer'>
          <StyledButtonSecondary>{data.lead5ButtonText}</StyledButtonSecondary>
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
}) => {
  switch (type) {
    case 'text':
      return (
        <InputSendRequest
          label={label}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )
    case 'textarea':
      return (
        <TextAreaSendRequest
          name={name}
          label={label}
          placeholder={placeholder}
        />
      )
    case 'select':
      return (
        <SelectPrimary
          name={name}
          label={label}
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

const getTabContent = (tab) => {
  switch (tab) {
    case 'Email':
      return (
        <InputSendRequest
          classNameWrapper='tabInput'
          name='email'
          placeholder='example@mail.com'
          type='email'
          label='Email'
        />
      )
    case 'Phone':
      return (
        <InputSendRequest
          classNameWrapper='tabInput'
          name='phone'
          placeholder='+38067XXXXXXX'
          type='text'
          label='Phone'
        />
      )
    case 'Whatsapp':
      return (
        <InputSendRequest
          classNameWrapper='tabInput'
          name='whatsapp'
          placeholder='whatsapp username'
          type='text'
          label='Whatsapp'
        />
      )
    default:
      return null
  }
}

export function FeeModal({ open, handleClose }) {
  const {
    dataPage: { cryptoLeadForm: leadData },
  } = useContext(PageContext);

  const [industry, setIndustry] = useState('')
  const tabs = [leadData.tabs[0], leadData.tabs[1], leadData.tabs[2]]
  const [activeTab, setActiveTab] = useState(tabs[0])


  const handleChange = (event) => {
    setIndustry(event.target.value)
  }

  const handleTab = (nameTab) => {
    setActiveTab(nameTab)
  }

  const feeInputs = [
    {
      id: 0,
      name: 'company',
      type: 'text',
      label: leadData.labelCompany,
      placeholder: 'inqud',
    },
    {
      id: 1,
      name: 'website',
      type: 'text',
      label: leadData.labelWebsite,
      placeholder: 'www.inqud.com',
    },
    {
      id: 2,
      name: 'industry',
      type: 'select',
      label: leadData.labelIndustry,
      placeholder: 'Fintech',
      handleChange,
      industry,
    },
    {
      id: 3,
      name: 'message',
      type: 'textarea',
      label: leadData.labelMessage,
      placeholder:
        leadData.title.placeholderMessage,
    },
  ]

  return (
    <StyledFeeModalWrapper scroll='body' open={open} onClose={handleClose}>
      <DialogContent>
        {/* <DialogContentText tabIndex={-1}> */}
        <div className='modalContainer'>
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
            <div className='tab-content'>{getTabContent(activeTab)}</div>
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
        </div>
      </DialogContent>
    </StyledFeeModalWrapper>
  )
}
