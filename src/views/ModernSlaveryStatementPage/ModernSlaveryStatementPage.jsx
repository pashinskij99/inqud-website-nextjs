import SetterBreadcrumbComponent from '@/components/SetterBreadcrumbComponent'
import MainSection from '@/sections/ModernSlaveryStatementSections/MainSection/MainSection'

function ModernSlaveryStatementPage({ data }) {
  return (
    <div>
      <SetterBreadcrumbComponent
        data={[
          {
            name: data.modernSlaveryStatement.breadcrumb,
            href: '',
          },
        ]}
      />
      <MainSection data={data} />
    </div>
  )
}

export default ModernSlaveryStatementPage
