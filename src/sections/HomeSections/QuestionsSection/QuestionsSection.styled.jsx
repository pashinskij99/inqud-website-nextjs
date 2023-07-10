import styled from '@emotion/styled'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

export const StyledQuestionsSection = styled.section`
  padding: 24rem 0;

  @media (max-width: 992px) {
    padding: 11.7rem 0;
  }

  @media (max-width: 576px) {
    padding: 11.7rem 0 9.8rem;
  }

  .questionsTitle {
    margin-bottom: 3.8rem;
    @media (max-width: 992px) {
      display: none;
    }
  }

  .questionsTitleMobile {
    display: none;
    @media (max-width: 992px) {
      margin-bottom: 3.8rem;
      display: block;
    }
    @media (max-width: 576px) {
      text-align: center;
      margin-bottom: 4rem;
    }
  }

  .questionsAccordion {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    @media (max-width: 576px) {
      gap: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    .css-1n4nhrw-MuiButtonBase-root-MuiAccordionSummary-root {
      padding: 1.6rem !important;
    }

    .css-yb38uv-MuiButtonBase-root-MuiAccordionSummary-root {
      padding: 1.6rem !important;
    }
    .css-d4q0y6-MuiAccordionDetails-root {
      padding: 1.6rem !important;
    }
  }

  .questionsButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 3.2rem 2.2rem;
    border-radius: 16px;
    background: var(--confident-light-grey, #f4f5fa);
    @media (max-width: 992px) {
      justify-content: flex-start;
      font-weight: 700;
    }
    @media (max-width: 767px) {
      position: relative;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      font-weight: 400;
    }

    @media (max-width: 576px) {
      padding: 1.6rem;
    }
    .questionsButtonHelp {
      padding-right: 0;
      height: fit-content;
      @media (max-width: 992px) {
        flex: 1;
        width: 100%;
        justify-content: space-between;
        padding-left: 0.5rem;
        * {
          font-weight: 400;
          font-size: 2.4rem;
          color: rgba(45, 52, 57, 1);
        }
        circle {
          fill: rgba(81, 113, 133, 1);
        }
        path {
          fill: white;
        }
      }

      @media (max-width: 767px) {
        position: static;
        padding-left: 0;

        svg {
          position: absolute;
          right: 3.2rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      @media (max-width: 576px) {
        * {
          font-size: 1.8rem;
        }
        svg {
          right: 1.6rem;
        }
      }
    }
  }

  .questionsAccordionBodyText {
    @media (max-width: 1200px) {
      max-width: 450px;
    }
    @media (max-width: 992px) {
      max-width: 100%;
      transform: translateY(0) !important;
    }
  }
`

export const StyledQuestionsSectionAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderRadius: '1.6rem',
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
  padding: '2.5rem 3.2rem 2.1rem',
  paddingBottom: `${props.expanded ? '0' : '2.1rem'}`,
  lineHeight: 1,
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91': {
    margin: 0,
  },
  '& .questionsAccordionTitle': {
    fontWeight: `${props.expanded ? '700' : '400'}`,
  },
  '@media (max-width: 576px)': {
    padding: '1.6rem 1.6rem 1rem 1.6rem',
  },
  transition: 'padding 0.3s ease',
}))

export const StyledQuestionsSectionAccordionDetails = styled(AccordionDetails)(
  (props) => ({
    // background: '#FFA3A3',
    padding: '0rem 12rem 1rem 3.2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    // overflow: 'visible!important',
    '@media (max-width: 576px)': {
      padding: '0rem 1.6rem 1rem 1.6rem',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'start',
    },
    '& .questionsAccordionBodyText': {
      maxWidth: '560px',
      '@media (max-width: 576px)': {
        maxWidth: '100%',
      },
      transform: `${props.expanded ? 'translateY(-2.6rem)' : 'translateY(0)'}`,
      transition: '0.3s ease',
    },
  })
)
