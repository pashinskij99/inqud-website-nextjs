import {
  StyledOurLandscapeSectionAccordion,
  StyledOurLandscapeSectionAccordionDetails,
  StyledOurLandscapeSectionAccordionSummary,
} from './OurLandscapeSectionAccordion.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistSmallSpaces,
} from '@/components/UI/Typography/Typography.styled'

export const stepsOpacity = [
  '0.20000000298023224',
  '0.4000000059604645',
  '0.6000000238418579',
  '0.800000011920929',
  '0.8999999761581421',
  '1',
]

export default function OurLandscapeSectionAccordion({
  title,
  description,
  expanded,
  handleChange,
  id,
  columnColor,
  lastchild,
}) {
  return (
    <StyledOurLandscapeSectionAccordion
      opacity={stepsOpacity[id]}
      expanded={expanded === title}
      columnColor={columnColor}
      onChange={handleChange(title)}
      lastchild={lastchild}
    >
      <StyledOurLandscapeSectionAccordionSummary>
        <StyledTypographyUrbanistBody>{title}</StyledTypographyUrbanistBody>
      </StyledOurLandscapeSectionAccordionSummary>
      <StyledOurLandscapeSectionAccordionDetails>
        <StyledTypographyUrbanistSmallSpaces>
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor tempora magnam iusto reiciendis dolore ducimus, commodi laboriosam quam sunt iste neque animi minus possimus illo iure fuga unde. Unde?'}
        </StyledTypographyUrbanistSmallSpaces>
      </StyledOurLandscapeSectionAccordionDetails>
    </StyledOurLandscapeSectionAccordion>
  )
}
