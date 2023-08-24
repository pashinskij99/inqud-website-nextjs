import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledPickSectionSection } from './PickSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Pick from '@/assets/icons/pick.svg'
import Priority from '@/assets/icons/priority-pick.svg'
import Message from '@/assets/icons/message-pick.svg'
import Dolar from '../../../assets/images/api/pick/icon1.svg'
import SpecificNeeds from '@/assets/icons/specific-needs-pick.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'
import { keysForLocale } from '@/config/keysForLocale'

export default function PickSection({ variant, className }) {
  const t = useTranslations('home_page.dont_lose_api_section')
  const tList = useTranslations(
    'home_page.dont_lose_api_section.list_item_title'
  )
  const tListMobile = useTranslations(
    'home_page.dont_lose_api_section.list_item_title_mobile'
  )

  const t2 = useTranslations('home_page.10_minutes_section')
  const tList2 = useTranslations('home_page.10_minutes_section.list_item_text')

  const list1 = [
    {
      id: 0,
      text: tList(keysForLocale.keys3[0]),
    },
    {
      id: 1,
      text: tList(keysForLocale.keys3[1]),
    },
    { id: 2, text: tList(keysForLocale.keys3[2]) },
  ]

  const list1Mobile = [
    {
      id: 0,
      text: tListMobile(keysForLocale.keys3[0]),
    },
    {
      id: 1,
      text: tListMobile(keysForLocale.keys3[1]),
    },
    { id: 2, text: tListMobile(keysForLocale.keys3[2]) },
  ]

  const list2 = [
    {
      id: 0,
      text: tList2(keysForLocale.keys3[0]),
      icon: <Message />,
    },
    {
      id: 1,
      text: tList2(keysForLocale.keys3[1]),
      icon: <SpecificNeeds />,
    },
    { id: 2, text: tList2(keysForLocale.keys3[2]), icon: <Priority /> },
  ]

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH2 className='pickTitle'>
        {variant === 'dontLose' ? (
          <div className='pickTitleDontLose'>{t('title')}</div>
        ) : (
          <div className='pickTitle10Minutes'>{t2('title')}</div>
        )}
      </StyledTypographyUrbanistH2>

      <div className='pickListWrapper'>
        {variant === 'dontLose' ? (
          <>
            <div className='pickListMobile'>
              <PickListDontLose list={list1Mobile} />
            </div>
            <div className='pickListDontLose'>
              <PickListDontLose list={list1} />
            </div>
          </>
        ) : (
          <PickList10Minutes list={list2} />
        )}
      </div>

      <div className='pickPick'>
        <Pick />

        <StyledTypographyUrbanistBody className='pickPickDescription'>
          {t('pick_description')}
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className='pickPickButton'>
          {t('pick_button_text')}
        </StyledButtonSecondaryLight>
      </div>
    </StyledPickSectionSection>
  )
}

export function PickListDontLose({ list }) {
  const t = useTranslations('home_page.dont_lose_api_section')

  return (
    <div className='pickList pickList_dontLose'>
      <StyledTypographyUrbanistH5 className='pickListTitle'>
        {t('list_title')}
      </StyledTypographyUrbanistH5>
      <ul>
        {list.map(({ id, text }) => (
          <li key={id}>
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

export function PickList10Minutes({ list }) {
  return (
    <div className='pickList pickList10Minutes'>
      <ul>
        {list.map(({ id, text, icon }) => (
          <li key={id}>
            {icon}
            <StyledTypographyUrbanistBody className='pickListItemText'>
              {text}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PickApiSection({ className }) {
  const t = useTranslations('api_page.get_personalized_section')
  const tList = useTranslations('api_page.get_personalized_section.list_item')

  const listApiSection = [
    { id: 2, text: tList(keysForLocale.keys3[0]), icon: <Dolar /> },

    {
      id: 1,
      text: tList(keysForLocale.keys3[1]),
      icon: <SpecificNeeds />,
    },
    {
      id: 0,
      text: tList(keysForLocale.keys3[2]),
      icon: <Message />,
    },
  ]

  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH3 className='pickTitle pickTitleApi'>
        <span>{t('title').slice(0, 36)}</span>{' '}
        {t('title').slice(36, t('title').length)}
      </StyledTypographyUrbanistH3>

      <div className='pickListWrapper'>
        <PickListApi list={listApiSection} />
      </div>

      <div className='pickPick'>
        <Pick />

        <StyledTypographyUrbanistBody className='pickPickDescription'>
          {t('pick_description')}
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className='pickPickButton pickPickButtonApi-1'>
          {t('pick_button_text')}
        </StyledButtonSecondaryLight>

        <StyledButtonSecondaryLight className='pickPickButton pickPickButtonApi-2'>
          {t('pick_button_text')}
        </StyledButtonSecondaryLight>
      </div>
    </StyledPickSectionSection>
  )
}

function PickListApi({ list }) {
  return (
    <div className='pickList pickListApi'>
      <ul>
        {list.map(({ id, text, icon }) => (
          <li key={id}>
            {icon}
            <StyledTypographyUrbanistBody className='pickListItemText'>
              {text}
            </StyledTypographyUrbanistBody>
          </li>
        ))}
      </ul>
    </div>
  )
}
