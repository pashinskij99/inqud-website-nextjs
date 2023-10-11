import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { userSchema2 } from '@/utils/userSchema'
import { submitForFormActiveCampaign } from '@/lib/activeCampaign'
// import { createBlog } from '@/lib/datocms'

const DynamicModalSendRequest = dynamic(
  () => import('@/components/Modal').then((mod) => mod.ModalSendRequest),
  {
    ssr: false,
  }
)

export default function YourNeedsSectionModalForm({
  handleClose,
  openModalSendRequest,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      message: '',
    },
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

    // await toast.promise(
    await submitForFormActiveCampaign(newData, '/api/create-contact', 2)
    // ,
    // {
    //   pending: 'Sending data',
    //   success: 'Data sent',
    // }
    // )
    const toast = await import('react-toastify').then((res) => res.toast)
    const createBlog = await import('@/lib/datocms').then(
      (res) => res.createBlog
    )
    await toast.promise(createBlog({ data, modelId: '2537177' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleClose()
    reset()
  }
  return (
    <DynamicModalSendRequest
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      handleClose={handleClose}
      errors={errors}
      open={openModalSendRequest}
    />
  )
}
