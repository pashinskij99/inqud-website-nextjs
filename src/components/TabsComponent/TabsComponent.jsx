'use client'

import { Tab, Tabs } from '@mui/material'
import clsx from 'clsx'
import {
  StyledTabsComponentWrapper,
  StyledTabsHeaderComponentWrapper,
} from './TabsComponent.styled'

export function TabsComponent({ className, active, handleClick, tabs }) {
  return (
    <StyledTabsComponentWrapper className={className}>
      <Tabs value={active}>
        {tabs.map(({ id, text }, i) => (
          <Tab
            label={text}
            className={clsx(
              'ourLandscapeTabsButton ourLandscapeTabsButtonText',
              {
                ['active']: active === i,
              }
            )}
            onClick={() => handleClick(i)}
            key={id}
          />
        ))}
      </Tabs>
    </StyledTabsComponentWrapper>
  )
}

export function TabsHeaderComponent({ className, active, handleClick, tabs }) {
  return (
    <StyledTabsHeaderComponentWrapper className={className}>
      <Tabs value={active}>
        {tabs.map(({ id, text }) => (
          <Tab
            label={text}
            disableRipple
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
    </StyledTabsHeaderComponentWrapper>
  )
}
