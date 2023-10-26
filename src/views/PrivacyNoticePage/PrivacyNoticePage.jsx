import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'
import MainSection from '@/sections/PrivacyNoticeSections/MainSection'

function PrivacyNoticePage({ data }) {
  return (
    <>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.breadcrumb,
            href: '',
          },
        ]}
      />
      <MainSection data={data} />
    </>
  )
}

export default PrivacyNoticePage
