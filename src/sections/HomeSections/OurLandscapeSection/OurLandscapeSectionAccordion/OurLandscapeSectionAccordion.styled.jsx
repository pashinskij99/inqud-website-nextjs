import styled from '@emotion/styled';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { rem } from '@/utils/rem';

export const StyledOurLandscapeSectionAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ lastchild, columnColor, opacity }) => ({
  borderBottom: 'none',
  background: lastchild
    ? `rgba(${columnColor}, 1) `
    : `rgba(${columnColor}, ${opacity}) `,
  borderRadius: rem(20),
  '&:before': {
    display: 'none',
  },
  '& .css-1uh3lx7-MuiAccordionDetails-root': {
    border: 'none',
  },
}));

export const StyledOurLandscapeSectionAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(() => ({
  padding: `${rem(18.5)} ${rem(32)} ${rem(19)}`,
  lineHeight: 1,
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content': {
    margin: 0,
  },
}));

export const StyledOurLandscapeSectionAccordionDetails = styled(
  AccordionDetails
)(() => ({
  // background: '#FFA3A3',
  padding: `${rem(5)} ${rem(32)} ${rem(18)}`,
}));
