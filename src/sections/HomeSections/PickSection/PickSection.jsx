import clsx from 'clsx'
import { useContext, useState } from 'react'
import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledPickSectionSection } from './PickSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Pick from '@/assets/icons/pick.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { PageContext } from '@/contexts/PageContext/PageContext'
import {
  addGlobalScrollBar,
  removeGlobalScrollBar,
} from '@/utils/addOrRemoveGlobalScrollBar'

const DynamicModalCalendaly = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
)

export default function PickSection({ variant, className }) {
  const {
    dataPage: { homePage: data, pickLeadForm: leadFormData },
  } = useContext(PageContext)
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <div className='container'>
        <StyledTypographyUrbanistH2 className='pickTitle'>
          {variant === 'dontLose' ? (
            <div className='pickTitleDontLose'>{data.leadForm1Title}</div>
          ) : (
            <div className='pickTitle10Minutes'>{data.leadForm2Title}</div>
          )}
        </StyledTypographyUrbanistH2>

        <div className='pickListWrapper'>
          {variant === 'dontLose' ? (
            <>
              <div className='pickListMobile'>
                <PickListDontLose
                  data={{
                    list: data.leadForm1List,
                    title: data.leadForm1ListTitle,
                  }}
                />
              </div>
              <div className='pickListDontLose'>
                <PickListDontLose
                  data={{
                    list: data.leadForm1List,
                    title: data.leadForm1ListTitle,
                  }}
                />
              </div>
            </>
          ) : (
            <PickList10Minutes
              data={{
                list: data.leadForm2List,
              }}
            />
          )}
        </div>

        <div className='pickPick'>
          <Pick />

          <StyledTypographyUrbanistBody className='pickPickDescription'>
            {leadFormData.pickDescription}
          </StyledTypographyUrbanistBody>

          <StyledButtonSecondaryLight
            onClick={handleOpenCalendlyModal}
            className='pickPickButton'
          >
            {leadFormData.buttonText}
          </StyledButtonSecondaryLight>
          <DynamicModalCalendaly
            onModalClose={handleCloseCalendlyModal}
            open={calendlyModal}
            rootElement={document.getElementById('calendly-model-wrapper')}
            url='https://calendly.com/inqud_team/call-with-inqud'
          />
        </div>
      </div>
    </StyledPickSectionSection>
  )
}

export function PickListDontLose({ data }) {
  return (
    <div className='pickList pickList_dontLose'>
      <StyledTypographyUrbanistH5 className='pickListTitle'>
        {data.title}
      </StyledTypographyUrbanistH5>
      <ul>
        {data.list.map((text) => (
          <li key={text}>
            <Check />
            <StyledTypographyUrbanistBody className='pickListItemText'>
              {text}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PickList10Minutes({ data }) {
  return (
    <div className='pickList pickList10Minutes'>
      <ul>
        {data.list.map(({ id, title, image: { url } }) => (
          <li key={id}>
            <Image src={url} alt={title} width={48} height={48} />
            <StyledTypographyUrbanistBody className='pickListItemText'>
              {title}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PickApiSection({ className }) {
  const {
    dataPage: { apiPage: data, pickLeadForm: leadFormData },
  } = useContext(PageContext)

  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <div className='container'>
        <StyledTypographyUrbanistH3 className='pickTitle pickTitleApi'>
          <StructuredText data={data.lead1TitleStructured} />
          {/* {data.lead1Title} */}
        </StyledTypographyUrbanistH3>

        <div className='pickListWrapper'>
          <PickListApi list={data.leadForm1List} />
        </div>

        <div className='pickPick'>
          <Pick />

          <StyledTypographyUrbanistBody className='pickPickDescription'>
            {leadFormData.pickDescription}
          </StyledTypographyUrbanistBody>

          <StyledButtonSecondaryLight
            onClick={handleOpenCalendlyModal}
            className='pickPickButton pickPickButtonApi-1'
          >
            {leadFormData.buttonText}
          </StyledButtonSecondaryLight>

          <StyledButtonSecondaryLight
            onClick={handleOpenCalendlyModal}
            className='pickPickButton pickPickButtonApi-2'
          >
            {leadFormData.buttonText}
          </StyledButtonSecondaryLight>
          <DynamicModalCalendaly
            onModalClose={handleCloseCalendlyModal}
            open={calendlyModal}
            rootElement={document.getElementById('calendly-model-wrapper')}
            url='https://calendly.com/inqud_team/call-with-inqud'
          />
        </div>
      </div>
    </StyledPickSectionSection>
  )
}

function PickListApi({ list }) {
  return (
    <div className='pickList pickListApi'>
      <ul>
        {list.map(({ id, title, image }) => (
          <li key={id}>
            <Image src={image?.url} alt={title} width={48} height={48} />
            <StyledTypographyUrbanistBody className='pickListItemText'>
              {title}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  )
}
