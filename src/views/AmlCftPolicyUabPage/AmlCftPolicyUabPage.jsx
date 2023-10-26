import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'
import MainSection from '@/sections/AmlCftPolicyUabSections/MainSection'

function AmlCftPolicyUabPage({ data }) {
  return (
    <>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.antiMoneyLaundering.breadcrumb,
            href: '',
          },
        ]}
      />
      <MainSection data={data} />
    </>
  )
}

export default AmlCftPolicyUabPage
