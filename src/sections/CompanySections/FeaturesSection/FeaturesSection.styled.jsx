import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { responsive } from '@/utils/response'

export const StyledFeaturesSectionWrapper = styled.section`
  padding: 240px 0;
  ${responsive.xl`
    padding-top: 120px;
    padding-bottom: 64px;
  `}
  ${responsive.sm`
    padding-top: 96px;
    padding-bottom: 120px;
  `}

  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 200.38px;
    ${responsive.xxl`
      column-gap: 61px;
    `}
    ${responsive.xl`
      gap: 0;
    `}
  }
  .left-side {
    .title {
      margin-bottom: 120px;
      ${responsive.xxl`
        margin-bottom: 124px;
      `}
      ${responsive.xl`
        margin-bottom: 56px;
      `}
      ${responsive.sm`
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        margin-bottom: 32px;
      `}
    }
    .accordion {
      display: flex;
      flex-direction: column;
      row-gap: 23px;
      ${responsive.sm`
        row-gap: 19px;
      `}
    }
  }

  .right-side {
    display: flex;
    flex-shrink: 0;
    ${responsive.xl`
      display: none;
    `}
    img {
      max-width: 559px;
      width: 100%;
      height: auto;
    }
  }
`

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={false} {...props} />
))(({ expanded }) => ({
  position: 'relative',
  padding: 0,
  backgroundColor: 'transparent',
  flexDirection: 'row-reverse',
  minHeight: 'auto',
  '& .MuiAccordionSummary-content': {
    margin: 0,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 0,
    '@media (max-width: 767px)': {
      alignItems: 'flex-start',
    },
    h4: {
      lineHeight: '1',
      padding: '0 0 0 43px',
      fontWeight: expanded ? 700 : 400,
      br: {
        display: 'none',
      },
      '@media (max-width: 767px)': {
        padding: '0 0 0 35px',
        fontSize: '32px',
        lineHeight: '42px',

        br: {
          display: 'inline-block',
        },
      },
    },
    p: {
      position: 'absolute',
      left: 0,
      color: 'rgba(81, 113, 133, 1)',
      '@media (max-width: 767px)': {
        top: '12px',
      },
    },
  },
}))

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '16px 0 0 0',
  border: 'none',
  p: {
    color: 'rgba(81, 113, 133, 1)',
  },
  '@media (max-width: 1536px)': {
    padding: '22px 0 0 43px',
  },
  '@media (max-width: 767px)': {
    padding: '16px 0 0 35px',
  },
}))

export const StyledAccordionLoading = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background: rgba(129, 158, 176, 0.2);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: block;
    background-color: rgba(7, 116, 83, 1);
    width: ${({ width }) => `${width}%`};
    transition: ${({ width }) => (width ? 'width 0.4s linear' : 'none')};
  }
`
