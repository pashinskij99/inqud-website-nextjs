import styled from '@emotion/styled'
import { rem } from '@/utils/rem'
import { responsive } from '@/utils/response'
import { nunito } from '@/utils/font'

export const StyledTabsComponentWrapper = styled.div`
  display: flex;
  border-radius: ${rem(72)};
  border: 1px solid var(--independent-grey-dt-20, rgba(129, 158, 176, 0.2));
  background: var(--clarity-white, #fff);
  padding: ${rem(1)};
  width: fit-content;
  height: ${rem(44)};
  ${responsive.sm`
    width: 100%;
    display: flex;
  `};

  .MuiTabs-root,
  .MuiTabs-flexContainer,
  .MuiTabs-scroller,
  .css-heg063-MuiTabs-flexContainer,
  .css-jpln7h-MuiTabs-scroller {
    display: contents;
  }

  .MuiTabs-indicator,
  .css-1aquho2-MuiTabs-indicator {
    display: none !important;
  }

  .ourLandscapeTabsButton {
    border-radius: ${rem(72)};
    padding: ${rem(7)} ${rem(14.5)} !important;
    background: transparent;
    color: rgba(81, 113, 133, 1);
    min-height: auto;
    height: 100%;
    ${nunito.style};
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;

    &.active {
      background: rgba(7, 116, 83, 1);
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }

    ${responsive.sm`
      flex: 1;
      padding: ${rem(6)} ${rem(16)} ${rem(7)} ${rem(16)};
    `};
  }
`

export const StyledTabsHeaderComponentWrapper = styled(
  StyledTabsComponentWrapper
)`
  border: none;
  background: transparent;
  ${responsive.sm`
    width: fit-content;  
  `}

  .ourLandscapeTabsButton {
    background: transparent;
    border-radius: 50px;

    &.active {
      background: transparent;
      color: rgba(7, 116, 83, 1);
      font-weight: 700;
      border: 1px solid #eef1f3;
    }
  }
`
