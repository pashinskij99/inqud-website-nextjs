import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { GetPersonalizedModal } from '@/components/Modal'
import { submitForFormActiveCampaign } from '@/lib/activeCampaign'
import { createBlog } from '@/lib/datocms'
import { userSchema2 } from '@/utils/userSchema'

export default function ApiHeroSectionModalForm({
  handleClose,
  data,
  showModal,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(userSchema2),
  })

  const onSubmit = async (data) => {
    const newData = {
      email: data.email,
      fieldValues: [
        {
          field: '1',
          value: data.message,
        },
      ],
    }

    // console.log(newData)

    // await toast.promise(
    await submitForFormActiveCampaign(newData, '/api/create-contact', 7)
    // ,
    //   {
    //     pending: 'Sending data',
    //     success: 'Data sent',
    //   }
    // )

    await toast.promise(createBlog({ data, modelId: '2540346' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleClose()
    reset()
  }
  return (
    <GetPersonalizedModal
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      data={data}
      handleClose={handleClose}
      open={showModal}
    />
  )
}
