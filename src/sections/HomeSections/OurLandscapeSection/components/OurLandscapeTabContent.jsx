'use client'

import { TabsComponent } from '@/components/TabsComponent'

export default function OurLandscapeTabContent({ data, active, handleClick }) {
  const tabs = [
    {
      id: 0,
      text: data.tabName1,
    },
    {
      id: 1,
      text: data.tabName2,
    },
  ]

  return (
    <TabsComponent
      tabs={tabs}
      className='ourLandscapeTabs'
      active={active}
      handleClick={handleClick}
    />
  )
}
