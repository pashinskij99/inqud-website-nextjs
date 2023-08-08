import clsx from 'clsx'
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
        24/7 personal manager at <br />
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
          <div className='pickTitleDontLose'>
            Don&apos;t lose <br />
            crypto-paying <br />
            customers!
          </div>
        ) : (
          <div className='pickTitle10Minutes'>
            10 minutes <br />
            of free expert <br />
            consultation
          </div>
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
          Book a free consultation
        </StyledButtonSecondaryLight>
        {/* <StyledButtonSecondaryLight className='pickPickButton'>
          Book a consultation
        </StyledButtonSecondaryLight> */}
        {/* {variant !== 'dontLose' && (
          <StyledButtonSecondaryLight className='pickPickButtonTablet desktop'>
            Book a demo
          </StyledButtonSecondaryLight>
        )} */}
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

const listApiSection = [
  { id: 2, text: <>Customized pricing for your niche</>, icon: <Dolar /> },

  {
    id: 1,
    text: <>Tailored payment options</>,
    icon: <SpecificNeeds />,
  },
  {
    id: 0,
    text: <>Answering all your questions</>,
    icon: <Message />,
  },
]

export function PickApiSection({ className }) {
  return (
    <StyledPickSectionSection className={clsx(className, 'container')}>
      <StyledTypographyUrbanistH3 className='pickTitle pickTitleApi'>
        <span>
          Get a personalized <br className='br-mobile' />
          <br className='br-desktop' /> free consultation
        </span>{' '}
        <br className='br-tablet' />
        <br className='br-mobile' /> with <br className='br-desktop' /> a
        payment <br className='br-mobile' /> solutions
        <br className='br-mobile' /> <br className='br-desktop' /> market{' '}
        <br className='br-tablet' /> expert
      </StyledTypographyUrbanistH3>

      <div className='pickListWrapper'>
        <PickListApi list={listApiSection} />
      </div>

      <div className='pickPick'>
        <Pick />

        <StyledTypographyUrbanistBody className='pickPickDescription'>
          Pick a time that works <br /> best for you
        </StyledTypographyUrbanistBody>

        <StyledButtonSecondaryLight className='pickPickButton pickPickButtonApi-1'>
          Book a free consultation
        </StyledButtonSecondaryLight>

        <StyledButtonSecondaryLight className='pickPickButton pickPickButtonApi-2'>
          Book a consultation
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
