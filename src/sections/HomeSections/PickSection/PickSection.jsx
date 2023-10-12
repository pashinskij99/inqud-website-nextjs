import clsx from 'clsx'
import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledPickSectionSection } from './PickSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Pick from '@/assets/icons/pick.svg'
import PickSectionModalWithButton from './components/PickSectionModalWithButton'
import { getData } from '@/lib/datocms'
import { HOME_B2B_PICK_SECTION_DONT_LOSE } from '@/lib/datocmsQuery'

export default async function PickSection({ variant, className, params }) {
  const { homePage: data, pickLeadForm: leadFormData } = await getData(
    HOME_B2B_PICK_SECTION_DONT_LOSE,
    {
      locale: params.locale,
    }
  )

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
            <PickListDontLose
              data={{
                list: data.leadForm1List,
                title: data.leadForm1ListTitle,
              }}
            />
          ) : (
            <PickList10Minutes
              data={{
                list: data.leadForm2List,
              }}
            />
          )}
        </div>

        <div className='pickPick'>
          <Image src={Pick} alt='Pick' />

          <StyledTypographyUrbanistBody className='pickPickDescription'>
            {leadFormData?.pickDescription}
          </StyledTypographyUrbanistBody>

          <PickSectionModalWithButton leadFormData={leadFormData} />
        </div>
      </div>
    </StyledPickSectionSection>
  )
}

export function PickListDontLose({ data }) {
  return (
    <div className='pickList pickList_dontLose'>
      <StyledTypographyUrbanistH5 component='h3' className='pickListTitle'>
        {data.title}
      </StyledTypographyUrbanistH5>
      <ul>
        {data.list?.map((text) => (
          <li key={text}>
            <Image src={Check} alt='check' />
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
