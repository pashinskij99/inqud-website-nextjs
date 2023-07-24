import styled from '@emotion/styled'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'

export const StyledQuestionsSection = styled.section`
  padding: ${rem(240)} 0;

  ${responsive.xl`
    padding: ${rem(117)} 0;
  `};
  ${responsive.xs`
    padding: ${rem(117)} 0 ${rem(98)};
  `};

  .questionsTitle {
    margin-bottom: ${rem(38)};
    ${responsive.xl`
      display: none;
    `};
  }

  .questionsTitleMobile {
    display: none;
    ${responsive.xl`
      margin-bottom: ${rem(38)};
      display: block;
    `};
    ${responsive.xs`
      text-align: center;
      margin-bottom: ${rem(40)};
    `};
  }

  .questionsAccordion {
    display: flex;
    flex-direction: column;
    gap: ${rem(8)};
    margin-bottom: ${rem(8)};
    ${responsive.xs`
      gap: ${rem(14)};
    `};
  }

  ${responsive.xs`
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
      flex-direction: column;
      // justify-content: flex-start;
      align-items: start;
      font-weight: 400;
    `};
    ${responsive.xs`
      padding: ${rem(16)};
    `};

    .questionsButtonHelp {
      height: fit-content;
      svg {
        width: ${rem(24)};
        height: ${rem(24)};
      }
    }
  }

  .questionsAccordionBodyText {
    ${responsive.xl`
      max-width: ${rem(450)};
    `};
    ${responsive.xl`
      max-width: 100%;
      transform: translateY(0) !important;
    `};
  }
`

export const StyledQuestionsSectionAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
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
}))

export const StyledQuestionsSectionAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))((props) => ({
  padding: `${rem(25)} ${rem(32)} ${rem(21)}`,
  paddingBottom: `${props.expanded ? '0' : `${rem(21)}`}`,
  lineHeight: 1,
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91':
    {
      margin: 0,
    },
  '& .questionsAccordionTitle': {
    fontWeight: `${props.expanded ? '700' : '400'}`,
  },
  '@media (max-width: 576px)': {
    padding: `${rem(16)} ${rem(16)} ${rem(10)} ${rem(16)}`,
  },
  transition: 'padding 0.3s ease',
}))

export const StyledQuestionsSectionAccordionDetails = styled(AccordionDetails)(
  (props) => ({
    // background: '#FFA3A3',
    padding: `0 ${rem(120)} ${rem(10)} ${rem(32)}`,
    display: 'flex',
    justifyContent: 'flex-end',
    // overflow: 'visible!important',
    '@media (max-width: 576px)': {
      padding: `0 ${rem(16)} ${rem(10)} ${rem(16)}`,
    },
    '@media (max-width: 1024px)': {
      justifyContent: 'start',
    },
    '& .questionsAccordionBodyText': {
      maxWidth: rem(560),
      '@media (max-width: 576px)': {
        maxWidth: '100%',
      },
      transform: `${
        props.expanded ? `translateY(-${rem(26)})` : 'translateY(0)'
      }`,
      transition: '0.3s ease',
    },
  })
)
