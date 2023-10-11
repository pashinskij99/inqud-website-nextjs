import {
  StyledTypographyIBMH5,
  StyledTypographyUrbanistBody,
} from '@/components/UI/Typography/Typography.styled'

const stepsOpacity = [
  [
    '0.20000000298023224',
    '0.4000000059604645',
    '0.6000000238418579',
    '0.800000011920929',
    '0.8999999761581421',
    '1',
  ],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
  ['0.20000000298023224', '0.4000000059604645', '0.6000000238418579', '1'],
]

export default function Accordion({
  idColumn,
  icon,
  items,
  title,
  columnColor,
}) {
  return (
    <div className='ourLandscapeAccordion'>
      <div className='ourLandscapeAccordionTitle'>
        {icon}
        <StyledTypographyIBMH5>{title}</StyledTypographyIBMH5>
      </div>
      {items.map((accordionTitle, i) => (
        <div
          style={{
            backgroundColor: `rgba(${columnColor}, ${
              i === items.length - 1
                ? stepsOpacity[idColumn][0]
                : stepsOpacity[idColumn][stepsOpacity[idColumn].length - 1 - i]
            })`,
            flex: i === items.length - 1 ? 1 : 0,
            alignItems: i === items.length - 1 ? 'start' : 'start',
          }}
          className='accordion-prob'
          key={accordionTitle}
        >
          <StyledTypographyUrbanistBody>
            {accordionTitle}
          </StyledTypographyUrbanistBody>
          <div />
        </div>
      ))}
    </div>
  )
}
