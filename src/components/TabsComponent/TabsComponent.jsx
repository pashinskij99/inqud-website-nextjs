'use client'

import { Tab, Tabs } from '@mui/material'
import clsx from 'clsx'
import styles from './styles.module.scss'

export function TabsComponent({ className, active, handleClick, tabs }) {
  return (
    <div className={clsx(className, styles.wrapper1)}>
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
    </div>
  )
}

export function TabsHeaderComponent({ className, active, handleClick, tabs }) {
  return (
    <div className={clsx(className, styles.wrapper2)}>
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
    </div>
  )
}
