import { Tab, Tabs } from '@mui/material'
import clsx from 'clsx'
import { StyledTabsComponentWrapper } from './TabsComponent.styled'

export function TabsComponent({ className, active, handleClick, tabs }) {
  return (
    <StyledTabsComponentWrapper className={className}>
      <Tabs value={active} onChange={handleClick}>
        {tabs.map(({ id, text }) => (
          <Tab
            label={text}
            className={clsx(
              'ourLandscapeTabsButton ourLandscapeTabsButtonText',
              {
                ['active']: active === id,
              }
            )}
            onClick={() => handleClick(id)}
            key={id}
          />
        ))}
      </Tabs>
    </StyledTabsComponentWrapper>
  )
}
