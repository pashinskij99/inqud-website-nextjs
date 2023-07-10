import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

export const StyledHeaderMobileMenu = styled.div`
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  background: var(--clarity-white, #fff);
  padding-top: 6rem;
  padding-bottom: 1.6rem;
  z-index: 100;
  display: none;
  margin-bottom: env(safe-area-inset-bottom);

  @media (max-width: 1400px) {
    display: block;
  }
  /* @media (max-width: 1400px) {
    height: calc(100vh - 8.6rem);
    top: 8.6rem;
  }
  @media (max-width: 767px) {
    height: calc(100vh - 5rem);
    top: 5rem;
  } */

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
    gap: 2.4rem;
    width: 100%;
    overflow: auto;
    padding-bottom: 2.4rem;
    /* height: 700px; */
  }
  .headerMobileMenuNavTitle {
    font-weight: 700;
  }

  .headerMobileMenuAccordionBodyList {
    padding-top: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .headerMobileMenuAccordionBodyText {
    &:first-child {
      font-weight: 700;
    }
  }
  .headerMobileMenuButtons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    button {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
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
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderRadius: '1.6rem',
  // background: '#F4F5FA',
  borderBottom: 'none',
  overflow: 'hidden',
  '& .MuiCollapse-root.MuiCollapse-vertical': {
    overflow: 'visible!important',
    visibility: 'visible!important',
  },

  '&:before': {
    display: 'none',
  },
  '& .css-1uh3lx7-MuiAccordionDetails-root': {
    border: 'none',
  },
}))

export const StyledHeaderMobileMenuAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(() => ({
  // padding: '2.5rem 3.2rem 2.1rem',
  // paddingBottom: `${props.expanded ? '0' : '2.1rem'}`,
  lineHeight: 1,
  padding: 0,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 'fit-content',
  '& .headerMobileMenuAccordionTitle': {
    margin: 0,
    fontWeight: 700,
  },
  '& .css-1betqn-MuiAccordionSummary-content': {
    margin: '0',
    textAlign: 'center',
    justifyContent: 'center',
  },
}))

export const StyledHeaderMobileMenuAccordionDetails = styled(AccordionDetails)(
  () => ({
    padding: 0,
    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //   // display: 'none',
    // },

    // height: '200px',
  })
)
