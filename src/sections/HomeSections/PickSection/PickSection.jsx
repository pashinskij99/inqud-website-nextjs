import clsx from 'clsx'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH2,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'
import { StyledPickSectionSection } from './PickSection.styled'
import Check from '@/assets/icons/check-green-background.svg'
import Pick from '@/assets/icons/pick.svg'
import Priority from '@/assets/icons/priority-pick.svg'
import Message from '@/assets/icons/message-pick.svg'
import SpecificNeeds from '@/assets/icons/specific-needs-pick.svg'
import { StyledButtonSecondaryLight } from '@/components/UI/Button/Button.styled'

const list1 = [
  {
    id: 0,
    text: (
      <>
        additional payment assistance for <br /> effective issue resolution
      </>
    ),
  },
  {
    id: 1,
    text: (
      <>
        client retention, cost-effectiveness, <br /> and time efficiency
      </>
    ),
  },
  { id: 2, text: 'niche-specialized provider' },
]

const list1Mobile = [
  {
    id: 0,
    text: <>Client retention, cost-effectiveness</>,
  },
  {
    id: 1,
    text: <>Additional payment assistance</>,
  },
  { id: 2, text: 'Niche-specialized provider' },
]

const list2 = [
  {
    id: 0,
    text: (
      <>
        24/7 personal manager at
        <br />
        your service
      </>
    ),
    icon: <Message />,
  },
  {
    id: 1,
    text: (
      <>
        Tailored solutions to fit your
        <br />
        specific needs
      </>
    ),
    icon: <SpecificNeeds />,
  },
  { id: 2, text: <>Priority in solving your issues</>, icon: <Priority /> },
]

export default function PickSection({ variant, className }) {
  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH2 className='pickTitle'>
        {variant === 'dontLose' ? (
          <>
            Don&apos;t lose
            <br />
            crypto-paying
            <br />
            customers!
          </>
        ) : (
          <>
            10 minutes
            <br />
            of free expert
            <br />
            consultation
          </>
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
          Pick a time that works <br /> best for you
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className='pickPickButton'>
          Book a consultation
        </StyledButtonSecondaryLight>
      </div>
    </StyledPickSectionSection>
  )
}

export function PickListDontLose({ list }) {
  return (
    <div className='pickList'>
      <StyledTypographyUrbanistH5 className='pickListTitle'>
        If you are looking for:
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
    <div className='pickList'>
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
