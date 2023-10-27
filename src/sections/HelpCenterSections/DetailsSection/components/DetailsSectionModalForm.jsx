import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ModalSendRequest } from '@/components/Modal'
import { submitForFormActiveCampaign } from '@/lib/activeCampaign'
import { userSchema2 } from '@/utils/userSchema'

export default function DetailsSectionModalForm({
  handleClose,
  openModal,
  data,
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

    await submitForFormActiveCampaign(newData, '/api/create-contact', 12)
    const toast = await import('react-toastify').then((res) => res.toast)
    const createBlog = await import('@/lib/datocms').then(
      (res) => res.createBlog
    )
    await toast.promise(createBlog({ data, modelId: '2592391' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleClose()
    reset()
  }
  return (
    <ModalSendRequest
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      handleClose={handleClose}
      errors={errors}
      open={openModal}
      data={data}
    />
  )
}
