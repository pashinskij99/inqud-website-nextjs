import { StructuredText } from 'react-datocms/structured-text'

function FeeBusinessDescriptionWrapper({ data }) {
  return (
    <div className='description-wrapper'>
      <StructuredText data={data.footerDescription} />
    </div>
  )
}

export default FeeBusinessDescriptionWrapper
