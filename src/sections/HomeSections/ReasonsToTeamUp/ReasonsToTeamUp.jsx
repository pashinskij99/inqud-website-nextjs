import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH1,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import { StyledReasonsToTeamUp } from './ReasonsToTeamUp.styled'
import Icon1 from '@/assets/images/reason-to-team-up/1.svg'
import Icon2 from '@/assets/images/reason-to-team-up/2.svg'
import Icon3 from '@/assets/images/reason-to-team-up/3.svg'
import Icon4 from '@/assets/images/reason-to-team-up/4.svg'
import Icon5 from '@/assets/images/reason-to-team-up/5.svg'
import Icon6 from '@/assets/images/reason-to-team-up/6.svg'

const gridItems = [
  {
    id: 0,
    title: <>Say goodbye to chargebacks</>,
    description: <>Provide solutions to eliminate fraud <br /> chargebacks.</>,
    icon: <Icon1 />,
  },
  {
    id: 1,
    title: (
      <>
        Transparent <br /> & clear pricing
      </>
    ),
    description:
      <>We believe in clear-cut pricing with no <br /> surprises. With us, you get precisely what <br /> you expect.</>,
    icon: <Icon2 />,
  },
  {
    id: 2,
    title: (
      <>
        Tap into new <br /> markets
      </>
    ),
    description:
      <>Seize new market opportunities swiftly <br /> with our customized payment solutions.</>,
    icon: <Icon3 />,
  },
  {
    id: 3,
    title: <>Simplified fund management</>,
    description:
      <>Enjoy effortless fund allocation, robust <br /> security, and flexible withdrawal options.</>,
    icon: <Icon4 />,
  },
  {
    id: 4,
    title: (
      <>
        Trustworthy <br /> customer care
      </>
    ),
    description:
      <>Whether you have questions, need <br /> assistance, or encounter any issues, we <br /> are here to help.</>,
    icon: <Icon5 />,
  },
  {
    id: 5,
    title: <>Uncover hidden <br /> market solutions</>,
    description:
      <>Discover unique payment methods and <br /> solutions for non-standard cases.</>,
    icon: <Icon6 />,
  },
]

export default function ReasonsToTeamUp() {
  return (
    <StyledReasonsToTeamUp>
      <div className='container'>
        <StyledTypographyUrbanistH1 className='reasonsToTeamUpTitle'>
          Stack the Deck in Your Favor
        </StyledTypographyUrbanistH1>
        <StyledTypographyUrbanistH4 className='reasonsToTeamUpSubTitle'>
          6 Winning Reasons to Team Up!
        </StyledTypographyUrbanistH4>

        <ul className='reasonsToTeamUpGrid'>
          {gridItems.map(({ id, description, icon, title }) => (
            <li key={id}>
              {icon}
              <StyledTypographyUrbanistH4 className='reasonsToTeamUpGridItemTitle'>
                {title}
              </StyledTypographyUrbanistH4>
              <StyledTypographyUrbanistBody className='reasonsToTeamUpGridItemDescription'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </StyledReasonsToTeamUp>
  )
}
