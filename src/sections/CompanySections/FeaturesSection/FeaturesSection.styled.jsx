import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { responsive } from '@/utils/response'

export const StyledFeaturesSectionWrapper = styled.section`
  padding: 200px 0;

  ${responsive.xxl`
    padding-top: 200px;
    padding-bottom: 200px;
  `}
  ${responsive.xl`
    padding-top: 120px;
    padding-bottom: 144px;
  `}
  ${responsive.sm`
    padding-top: 96px;
    padding-bottom: 120px;
  `}
  .container {
    display: flex;
    justify-content: space-between;
    ${responsive.xxl`
      column-gap: 61px;
    `}
    ${responsive.xl`
      gap: 0;
    `}
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 679px;

    ${responsive.xl`
      max-width: 100%;
    `}
    .title {
      line-height: 62px;
      letter-spacing: 0em;
      margin-bottom: 52px;

      ${responsive.xl`
        margin-bottom: 46px;
        br {
          &:nth-of-type(2) {
            display: none;
          }
        }
      `}
      ${responsive.sm`
        white-space: normal;
        font-size: 40px;
        font-weight: 700;
        line-height: 46px;
        margin-bottom: 32px;
        br {
          display: none;
        }
      `}
    }

    .accordion {
      display: flex;
      flex-direction: column;
      row-gap: 18px;
      ${responsive.xxl`
        row-gap: 19px;
      `}
      ${responsive.sm`
        row-gap: 19px;
      `}
    }
  }

  .right-side {
    overflow: hidden;
    display: flex;
    flex-shrink: 0;
    max-width: 559px;
    width: 100%;
    border-radius: 28px;

    ${responsive.xxl`
      max-width: 559px;
      height: 650px;
    `}
    ${responsive.xl`
      display: none;
    `}
    img {
      width: 100%;
      object-fit: cover;
      ${responsive.xxl`
        height: 650px;
      `}
    }
  }
`

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ expanded }) => ({
  border: 'none',
  '&:not(:last-of-type)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  pointerEvents: expanded ? 'none' : 'auto',
  touchAction: expanded ? 'none' : 'auto',
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
    h5: {
      lineHeight: '32px',
      padding: '0 0 0 43px',
      fontWeight: expanded ? 700 : 400,
      br: {
        display: 'none',
      },
      '@media (max-width: 767px)': {
        padding: '0 0 0 35px',
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '0em',

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
        top: '5px',
      },
    },
  },
}))

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '8px 0 0 0',
  border: 'none',
  p: {
    color: 'rgba(81, 113, 133, 1)',
    lineHeight: '24px',
  },
  '@media (max-width: 1536px)': {
    padding: '8px 0 0 43px',
  },
  '@media (max-width: 767px)': {
    padding: '9px 0 0 35px',
  },
}))

export const StyledAccordionLoading = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background: rgba(129, 158, 176, 0.2);
  opacity: ${({ isLast, isExpanded }) =>
    // eslint-disable-next-line no-nested-ternary
    isLast ? (isExpanded ? '1' : '0') : '1'};

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
