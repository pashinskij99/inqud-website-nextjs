import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { responsive } from '@/utils/response'

export const StyledPersonalSectionWrapper = styled.section`
  padding: 50px 0 120px;
  background-color: rgba(246, 247, 248, 1);
  ${responsive.xl`
    padding: 46px 0 110px;
  `}
  ${responsive.sm`
    padding: 40px 0 88px;
  `}

  .container {
    display: grid;
    grid-template-columns: 315px 680px 320px;
    justify-content: space-between;
    align-items: flex-start;
    ${responsive.xxl`
      grid-template-columns: 286px 596px 286px;
    `}
    ${responsive.xl`
      grid-template-columns: 100%;
    `};
  }
`
export const StyledLeftSideWrapper = styled.div`
  position: sticky;
  top: calc(var(--header-height) + 10px);
  left: 0;
  ${responsive.xl`
    display: none;
  `}
  .title {
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    margin-bottom: 16px;
  }

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    .list-item {
      cursor: pointer;

      &.active {
        border-left: 2px solid rgba(7, 116, 83, 1);
      }

      .list-item-text {
        color: var(--independent-grey, #517185);
        font-weight: 400;
        line-height: 26px;

        &.active {
          color: var(--ambitious-green, #077453);
          font-weight: 700;
          transform: translateX(10px);
        }
      }
    }
  }
`
export const StyledCenterSideWrapper = styled.div`
  transform: translateY(-6px);

  .content {
    margin-bottom: 58px;
    ${responsive.xl`
      margin-bottom: 32px;
    `}
    ${responsive.sm`
      margin-bottom: 34px;
    `}
    &:nth-last-child(2),
    &:nth-last-child(1) {
      margin-bottom: 0;
      ${responsive.xl`
        margin-bottom: 40px;
      `}
    }

    &.content-1 {
      ${responsive.xl`
        display: none;
      `}
    }
    &.content-2 {
      display: none;

      ${responsive.xl`
        display: block;
      `}
    }
    .content-title {
      color: var(--directness-black, #2d3439);
      font-weight: 700;
      line-height: 42px;
      margin-bottom: 16px;
    }
    .content-description-wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      margin-bottom: 24px;
    }
    .content-description {
      color: #1e1e1e;
      line-height: 26px;
    }
    .content-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 16px;
      background: #fff;
      padding: 15px 24px;

      .content-footer-text {
        color: var(--directness-black, #2d3439);
        font-weight: 700;
        line-height: 26px;
      }
      .likeOrDislike {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
`
export const StyledRightSideWrapper = styled.div`
  transform: translateY(-7px);
  .cart {
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    background: #fff;
    padding: 28px 24px;
    ${responsive.xl`
      padding: 24px;
    `}
    ${responsive.sm`
      padding: 16px;
    `}
    .cart-left-side {
      svg {
      }
    }
    .cart-right-side {
      ${responsive.xl`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      `}
      ${responsive.sm`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
      `}
      .cart-title {
        font-weight: 700;
        line-height: 24px;
      }
      .cart-button {
        padding: 0;
        height: auto;
        .cart-button-text {
          color: var(--ambitious-green, #077453);
          font-weight: 700;
          line-height: 26px;
        }
      }
    }
  }
`

export const StyledContentItemAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderRadius: 0,
  background: 'rgba(246, 247, 248, 1)',
  borderBottom: 'none',
  overflow: 'hidden',
  minHeight: 'auto',
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
export const StyledContentItemAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))((props) => ({
  padding: '0',
  paddingBottom: `${props.expanded ? '9px' : '0'}`,
  lineHeight: 1,
  minHeight: 'auto',
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content, & .MuiAccordionSummary-content.css-1n11r91':
    {
      margin: 0,
    },
  '& .questionsAccordionTitle': {
    fontWeight: '700',
    '@media (max-width: 767px)': {
      fontSize: '18px',
    },
  },
  // '@media (max-width: 767px)': {
  //   padding: `${rem(16)}`,
  // },
  svg: {
    '@media (max-width: 767px)': {
      // width: '16px',
      // height: '16px',
      width: '22px',
      height: '22px',
    },
  },
  transition: 'padding 0.3s ease',
}))
export const StyledContentItemAccordionDetails = styled(AccordionDetails)(
  () => ({
    // background: '#FFA3A3',
    padding: '0 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    rowGap: 0,
    // overflow: 'visible!important',
    '@media (max-width: 767px)': {
      padding: '0',
    },
    '@media (max-width: 1024px)': {
      justifyContent: 'start',
    },
    '& .questionsAccordionBodyText': {
      maxWidth: '100%',
      marginBottom: '16px',
      '@media (max-width: 767px)': {
        maxWidth: '100%',
      },
      // transform: `${
      //   props.expanded ? `translateY(-${rem(26)})` : 'translateY(0)'
      // }`,
      transition: '0.3s ease',
    },
  })
)
