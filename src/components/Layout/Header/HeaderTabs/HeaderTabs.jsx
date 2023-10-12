import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import { TabsHeaderComponent } from '@/components/TabsComponent/TabsComponent'
import { setCurrentPageTab } from '@/store/features/currentPageTab/currentPageTabSlice'
import { keysForLocale } from '@/config/keysForLocale'

export default function HeaderTabs() {
  const tabsTranslate = useTranslations('header_tabs')

  const tabs = [
    {
      id: 0,
      text: tabsTranslate(keysForLocale.keys3[0]),
    },
    {
      id: 1,
      text: tabsTranslate(keysForLocale.keys3[1]),
    },
  ]

  const { tab } = useSelector((state) => state.activeTab)
  const dispatch = useDispatch()

  const handleClickTab = (id) => {
    dispatch(setCurrentPageTab(id))
  }

  return (
    <TabsHeaderComponent
      active={tab}
      className='tabs'
      handleClick={handleClickTab}
      tabs={tabs}
    />
  )
}
