import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import clsx from 'clsx'
import Pick from '@/assets/icons/pick.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
} from '@/components/UI/Typography/Typography.styled'
import PickSectionModalWithButton from './PickSectionModalWithButton'
import { StyledPickSectionSection } from '../PickSection.styled'

export function PickApiSection({ buttonText, className, data, leadFormData }) {
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
          <Image src={Pick} alt='pick' />

          <StyledTypographyUrbanistBody className='pickPickDescription'>
            {leadFormData.pickDescription}
          </StyledTypographyUrbanistBody>

          <PickSectionModalWithButton buttonText={buttonText} />
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
