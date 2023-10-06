import { StyledListItem } from '../CryptoBusinessSection.styled'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH5,
} from '@/components/UI/Typography/Typography.styled'

export default function CryptoBusinessSectionList({
  data,
  opacity,
  color,
  rgb,
}) {
  return (
    <ul className='grid grid-1'>
      {data.screen3List.map(({ id, list, listTitle }, listId) => (
        <li key={id} className='grid-item'>
          <StyledListItem
            className='first-grid-item'
            rgb={rgb[listId]}
            opacity={opacity[0]}
            color={color[listId]}
          >
            <StyledTypographyUrbanistH5 className='grid-item-title'>
              {listTitle}
            </StyledTypographyUrbanistH5>
          </StyledListItem>

          <ul className='list'>
            {list.map((text, elementId) => (
              <li key={text} className='item'>
                <StyledListItem
                  className='list-item-styled'
                  rgb={rgb[listId]}
                  opacity={opacity[elementId + 1]}
                  color={color[listId]}
                >
                  <StyledTypographyUrbanistBody>
                    {text}
                  </StyledTypographyUrbanistBody>
                </StyledListItem>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
