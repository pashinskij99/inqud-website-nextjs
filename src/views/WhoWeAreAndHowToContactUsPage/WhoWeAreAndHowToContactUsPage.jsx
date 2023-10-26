import MainSection from '@/sections/PrivacyNoticeSections/MainSection'
import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'

function WhoWeAreAndHowToContactUsPage({ data }) {
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

export default WhoWeAreAndHowToContactUsPage
