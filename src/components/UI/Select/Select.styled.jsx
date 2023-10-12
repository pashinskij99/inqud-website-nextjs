import styled from '@emotion/styled'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { rem } from '@/utils/rem'

export const StyledSelectWrapper = styled.div`
  z-index: 1;
  .label {
    color: rgba(45, 52, 57, 1);
    font-weight: 700;
    margin-bottom: ${rem(4)};
    margin-left: ${rem(16)};
    line-height: 1;
  }

  .inputTextHelperTextBottom {
    margin-left: ${rem(16)};
    text-align: start;
    color: rgba(45, 52, 57, 0.6000000238418579);

    &.error {
      color: rgba(244, 92, 59, 1);
    }
  }
`

export const StyledSelect = styled(Select)`
  width: 100%;
  height: ${rem(48)};

  padding: 0;

  [aria-labelledby='mui-component-select-industry'] {
    padding: 0 ${rem(32)} 0 ${rem(16)};
  }

  fieldset {
    border: none;
    border-radius: ${rem(22)};
    background: rgba(243, 246, 248, 1);
    z-index: -1;
  }

  .placeholder {
    color: rgba(45, 52, 57, 0.6000000238418579);
  }

  svg {
    right: ${rem(16)};
    width: ${rem(16)};
    height: ${rem(16)};
  }
`

export const StyledMenuItem = styled(MenuItem)`
  &:first-of-type {
    display: none;
  }
`
