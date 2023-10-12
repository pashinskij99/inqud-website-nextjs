import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { responsive } from '@/utils/response'
import { rem } from '@/utils/rem'

export const StyledHeaderMobileMenu = styled.div`
  left: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  background: var(--clarity-white, #fff);
  padding-top: ${rem(60)};
  padding-bottom: ${rem(16)};
  z-index: 100;
  display: none;
  margin-bottom: env(safe-area-inset-bottom);

  ${responsive.xl`
    display: block;
    height: calc(100dvh - ${rem(72)});
    top: ${rem(72)};
  `};
  ${responsive.sm`
    height: calc(100dvh - ${rem(54)});
    top: ${rem(54)};
  `};

  &.show {
    animation: show 0.3s ease-in-out forwards;
  }

  &.hide {
    animation: hide 0.3s ease-in-out forwards;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .headerMobileMenuNav {
    display: flex;
    flex-direction: column;
    gap: ${rem(24)};
    width: 100%;
    overflow: auto;
    padding-bottom: ${rem(24)};
    p {
      cursor: pointer;
    }
  }

  .headerMobileMenuNavTitle {
    font-weight: 700;
  }

  .headerMobileMenuAccordionBodyList {
    padding-top: ${rem(16)};
    display: flex;
    flex-direction: column;
    gap: ${rem(10)};
  }

  .headerMobileMenuAccordionBodyText {
    &:first-of-type {
      font-weight: 700;
    }
  }

  .headerMobileMenuButtons {
    display: flex;
    flex-direction: column;
    gap: ${rem(8)};
    width: 100%;

    button {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      svg {
        position: absolute;
        right: ${rem(4)};
      }
    }
  }

  @keyframes show {
    from {
      transform: translateX(-100%);
      display: none;
    }
    to {
      transform: translateX(0%);
      display: block;
    }
  }

  @keyframes hide {
    from {
      transform: translateX(0%);
      display: block;
    }
    to {
      transform: translateX(-100%);
      display: none;
    }
  }
`

export const StyledHeaderMobileMenuAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  width: 'fit-content',
  margin: '0 auto',
  borderRadius: rem(16),
  borderBottom: 'none',
  // overflow: 'hidden',
  '& .MuiCollapse-root.MuiCollapse-vertical': {
    // overflow: 'visible!important',
    // visibility: 'visible!important',
    overflow: 'hidden',
  },
  '&:before': {
    display: 'none',
  },
  '& .css-1uh3lx7-MuiAccordionDetails-root': {
    border: 'none',
  },
  '.css-1jfjrob-MuiButtonBase-root-MuiAccordionSummary-root, .css-1df0xmt': {
    minHeight: 'auto',
  },
  cursor: 'pointer',

  '.css-yw020d-MuiAccordionSummary-expandIconWrapper, .MuiAccordionSummary-expandIconWrapper.css-1fx8m19':
    {
      position: 'absolute',
      right: '-18px',
      top: 0,
      bottom: 0,
      margin: 'auto 0',
      height: 'fit-content',
      '@media(max-width: 767px)': {
        right: '-8px',
      },
      svg: {
        width: '14px',
        height: '16px',
      },
    },
}))

export const StyledHeaderMobileMenuAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={}
    {...props}
  />
))(() => ({
  lineHeight: 1,
  padding: 0,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 'fit-content',
  '& .headerMobileMenuAccordionTitle': {
    margin: '0 auto',
    fontWeight: 700,
  },
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91':
    {
      margin: '0',
      textAlign: 'center',
      justifyContent: 'center',
    },
}))

export const StyledHeaderMobileMenuAccordionDetails = styled(
  MuiAccordionDetails
)(() => ({
  padding: 0,
}))

//

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }))

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     // expandIcon={}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }))

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }))
