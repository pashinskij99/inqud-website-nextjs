import styled from '@emotion/styled'
import { MenuItem, Select } from '@mui/material'
import { rem } from '@/utils/rem'

export const StyledSelectWrapper = styled.div`
  .label {
    color: rgba(45, 52, 57, 1);
    font-weight: 700;
    margin-bottom: ${rem(4)};
    margin-left: ${rem(16)};
    line-height: 1;
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
    color: rgba(45, 52, 57, 0.3);
  }

  svg {
    right: ${rem(16)};
    width: ${rem(16)};
    height: ${rem(16)};
  }
`

export const StyledMenuItem = styled(MenuItem)`
  &:first-child {
    display: none;
  }
`
