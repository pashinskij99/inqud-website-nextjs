import styled from '@emotion/styled'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

export const StyledOurLandscapeSectionAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))((props) => ({
  borderBottom: 'none',
  background: props.lastChild
    ? `rgba(${props.columnColor}, 1) `
    : `rgba(${props.columnColor}, ${props.opacity}) `,
  borderRadius: '20px',
  '&:before': {
    display: 'none',
  },
  '& .css-1uh3lx7-MuiAccordionDetails-root': {
    border: 'none',
  },
}))

export const StyledOurLandscapeSectionAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(() => ({
  padding: '1.85rem 3.2rem 1.9rem',
  lineHeight: 1,
  height: 'fit-content',
  '& .css-1betqn-MuiAccordionSummary-content': {
    margin: 0,
  },
}))

export const StyledOurLandscapeSectionAccordionDetails = styled(
  AccordionDetails
)(() => ({
  // background: '#FFA3A3',
  padding: '0.5rem 3.2rem 1.8rem',
}))
