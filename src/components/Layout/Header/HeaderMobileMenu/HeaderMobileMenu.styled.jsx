import styled from '@emotion/styled'
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material'
import {rem} from '@/utils/rem';

export const StyledHeaderMobileMenu = styled.div`
  /* height: 100dvh; */
  /* top: 0; */
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

  @media (max-width: 1400px) {
    display: block;
  }
  @media (max-width: 1400px) {
    height: calc(100dvh - ${rem(86)});
    top: ${rem(86)};
  }
  @media (max-width: 767px) {
    height: calc(100dvh - ${rem(50)});
    top: ${rem(50)};
  }

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
    /* height: 700px; */
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
    &:first-child {
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
  borderRadius: rem(16),
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
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91': {
    margin: '0',
    textAlign: 'center',
    justifyContent: 'center',
  },
}))

export const StyledHeaderMobileMenuAccordionDetails = styled(AccordionDetails)(
  () => ({
    padding: 0,
  })
)
