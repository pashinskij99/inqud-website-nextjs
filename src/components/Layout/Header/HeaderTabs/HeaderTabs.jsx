import { useDispatch, useSelector } from 'react-redux'
import { TabsHeaderComponent } from '@/components/TabsComponent/TabsComponent'
import { setCurrentPageTab } from '@/store/features/currentPageTab/currentPageTabSlice'

const tabs = [
  {
    id: 0,
    text: 'Business',
  },
  {
    id: 1,
    text: 'Personal',
  },
]

export default function HeaderTabs() {
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
