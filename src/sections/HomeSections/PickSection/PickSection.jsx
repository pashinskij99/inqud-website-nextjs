import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import dynamic from 'next/dynamic'
import { useWindowSize } from '@uidotdev/usehooks'
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
import { getPageData } from '@/lib/datocms'
import {
  HOME_B2B_PICK_SECTION_DONT_LOSE,
  HOME_B2B_PICK_SECTION_DONT_LOSE_LEAD_FORM_DATA,
} from '@/lib/datocmsQuery'
import { responseBreakPoint } from '@/utils/response'

const DynamicModalCalendaly = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
)

export default function PickSection({ variant, className }) {
  const [data, setData] = useState({})
  const [leadFormData, setLeadFormData] = useState({})

  const { params } = useContext(PageContext)
  const [calendlyModal, setCalendlyModal] = useState(false)

  const handleOpenCalendlyModal = () => {
    setCalendlyModal(true)
    removeGlobalScrollBar()
  }
  const handleCloseCalendlyModal = () => {
    setCalendlyModal(false)
    addGlobalScrollBar()
  }

  useEffect(() => {
    const getData = async () => {
      const pageData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_PICK_SECTION_DONT_LOSE,
      })

      const leadData = await getPageData({
        variables: {
          locale: params.locale,
        },
        query: HOME_B2B_PICK_SECTION_DONT_LOSE_LEAD_FORM_DATA,
      })

      setLeadFormData(leadData.pickLeadForm)
      setData(pageData.homePage)
    }

    getData()
  }, [])

  const size = useWindowSize()

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
              {size.width && size.width <= responseBreakPoint.mobile ? (
                <PickListDontLose
                  data={{
                    list: data.leadForm1List,
                    title: data.leadForm1ListTitle,
                  }}
                />
              ) : null}

              {size.width && size.width > responseBreakPoint.mobile ? (
                <PickListDontLose
                  data={{
                    list: data.leadForm1List,
                    title: data.leadForm1ListTitle,
                  }}
                />
              ) : null}
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
            {leadFormData?.pickDescription}
          </StyledTypographyUrbanistBody>

          <StyledButtonSecondaryLight
            onClick={handleOpenCalendlyModal}
            className='pickPickButton'
          >
            {leadFormData?.buttonText}
          </StyledButtonSecondaryLight>
          {calendlyModal ? (
            <DynamicModalCalendaly
              onModalClose={handleCloseCalendlyModal}
              open={calendlyModal}
              rootElement={document.getElementById('calendly-model-wrapper')}
              url='https://calendly.com/inqud_team/30-minute-free-consultation'
            />
          ) : null}
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
        {data.list?.map((text) => (
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
        {data.list?.map(({ id, title, image: { url } }) => (
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
            className='pickPickButton'
          >
            {leadFormData.buttonText}
          </StyledButtonSecondaryLight>
          {calendlyModal ? (
            <DynamicModalCalendaly
              onModalClose={handleCloseCalendlyModal}
              open={calendlyModal}
              rootElement={document.getElementById('calendly-model-wrapper')}
              url='https://calendly.com/inqud_team/30-minute-free-consultation'
            />
          ) : null}
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
