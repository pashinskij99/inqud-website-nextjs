import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'
import MainSection from '@/sections/CookiePolicySections/MainSection'

function CookiePolicyPage({ data }) {
  return (
    <div>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.cookiePolicy.breadcrumb,
            href: '',
          },
        ]}
      />
      <MainSection data={data} />
    </div>
  )
}

export default CookiePolicyPage
