'use client'

import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledQuestionsSection = styled.section`
  padding: 200px 0;
  ${responsive.xxl`
    padding: 198px 0;
  `};
  ${responsive.xl`
    padding: 56px 0 122px;
  `};
  ${responsive.sm`
    order: 13;
    padding: ${rem(117)} 0 ${rem(97)};
  `};

  .questionsTitle {
    margin-bottom: 54px;

    ${responsive.xl`
      display: none;
    `};
  }

  .questionsTitleMobile {
    display: none;
    ${responsive.xl`
      margin-bottom: 36px;

      display: block;
    `};
    ${responsive.sm`
      text-align: center;
      margin-bottom: ${rem(40)};
      font-size: 40px;
      font-weight: 700;
      line-height: 46px;
    `};
  }

  .questionsAccordion {
    display: flex;
    flex-direction: column;
    gap: ${rem(8)};
    margin-bottom: ${rem(8)};
    ${responsive.sm`
      gap: 11px;
    `};
  }

  ${responsive.sm`
    .css-1n4nhrw-MuiButtonBase-root-MuiAccordionSummary-root {
      padding: ${rem(16)} !important;
    }

    .css-yb38uv-MuiButtonBase-root-MuiAccordionSummary-root {
      padding: ${rem(16)} !important;
    }

    .css-d4q0y6-MuiAccordionDetails-root {
      padding: ${rem(16)} !important;
    }
  `};

  .questionsButton {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rem(24)} ${rem(32)} ${rem(22)};
    border-radius: ${rem(16)};
    background: var(--confident-light-grey, #f4f5fa);
    ${responsive.xl`
      // justify-content: flex-start;
      // font-weight: 700;
    `};
    ${responsive.sm`
      position: relative;
      // flex-direction: column;
      align-items: start;
      font-weight: 400;
      line-height: 26px;
      padding: ${rem(16)};
      font-size: ${rem(18)};
    `};

    .questionsButtonHelp {
      height: fit-content;
      padding-right: 0;
      gap: 12px;
      border-radius: 0;

      ${responsive.sm`
        position: static;
        padding: 0;
        gap: 6px;
      `};

      p {
        ${responsive.sm`
          font-size: 18px;
          font-style: normal;
          line-height: 26px;
          font-weight: 700;
          // color: rgba(45, 52, 57, 1);
        `}
      }

      svg {
        overflow: visible;
        width: ${rem(24)};
        height: ${rem(24)};
        ${responsive.sm`
          position: static;
          // top: 0;
          // bottom: 0;
          // margin: auto 0;
          // right: ${rem(16)};
        `};
        /* circle {
          ${responsive.sm`
            fill: #517185;
          `};
        }
        path {
          ${responsive.sm`
            fill: white;
          `};
        } */
      }
    }
  }

  .questionsAccordionBodyText {
    ${responsive.xl`
      max-width: 100%;
      transform: translateY(0) !important;
    `};
    ${responsive.sm`
      fontSize: ${rem(18)};
    `}
  }
`

export const StyledQuestionsSectionAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ expanded }) => ({
  position: 'relative',
  display: `${expanded ? 'flex' : 'block'}`,
  justifyContent: 'space-between',

  borderRadius: rem(16),
  background: '#F4F5FA',
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

  '@media(max-width: 1279px)': {
    display: 'block',
  },
}))

export const StyledQuestionsSectionAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(({ expanded }) => ({
  position: 'static',
  padding: `${rem(25)} ${rem(32)} ${rem(21)}`,
  paddingBottom: `${expanded ? '0' : `${rem(21)}`}`,
  lineHeight: 1,
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91':
    {
      position: 'static',
      margin: 0,
      '@media (max-width: 1279px)': {
        height: 'auto',
      },
    },
  '& .questionsAccordionTitle': {
    fontWeight: `${expanded ? '700' : '400'}`,
    maxWidth: '455px',
    '@media (max-width: 1279px)': {
      maxWidth: '100%',
      position: 'static',
    },
    '@media (max-width: 767px)': {
      fontSize: '18px',
    },
  },
  '@media (max-width: 767px)': {
    padding: `${rem(16)}`,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    position: `${expanded ? 'absolute' : 'static'}`,
    right: '32px',
    '@media (max-width: 1279px)': {
      position: 'static',
    },
  },
  svg: {
    '@media (max-width: 767px)': {
      width: '16px',
      height: '16px',
    },
  },
  transition: ' 0.3s ease',
}))

export const StyledQuestionsSectionAccordionDetails = styled(AccordionDetails)(
  ({ expanded }) => ({
    // background: '#FFA3A3',
    padding: `51px ${rem(120)} ${rem(10)} ${rem(32)}`,
    display: 'flex',
    justifyContent: 'flex-end',
    // overflow: 'visible!important',
    '@media (max-width: 1279px)': {
      padding: `26px ${rem(120)} ${rem(10)} ${rem(32)}`,
    },
    '@media (max-width: 767px)': {
      padding: `0 ${rem(16)} ${rem(10)} ${rem(16)}`,
    },
    '@media (max-width: 1024px)': {
      justifyContent: 'start',
    },
    a: {
      display: 'inline',
      textDecorationLine: 'underline',
      color: '#077453',
      marginBottom: '1rem',
    },
    // marginTop: '51px',

    '& .questionsAccordionBodyText': {
      maxWidth: rem(560),
      '@media (max-width: 767px)': {
        maxWidth: '100%',
        fontSize: '18px',
      },
      '@media (max-width: 1279px)': {
        maxWidth: '100%',
        transform: 'translateY(0) !important',
        paddingTop: '0',
      },
      transform: `${expanded ? `translateY(-${rem(26)})` : 'translateY(50%)'}`,
      transition: '0.34s ease',
    },
  })
)
