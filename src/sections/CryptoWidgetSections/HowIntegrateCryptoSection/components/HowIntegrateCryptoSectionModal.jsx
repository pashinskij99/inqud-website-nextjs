import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { userSchema2 } from '@/utils/userSchema'
import { ModalSendRequest } from '@/components/Modal'

export default function HowIntegrateCryptoSectionModal({ handleClose, open }) {
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
    const submitForFormActiveCampaign = await import(
      '@/lib/activeCampaign'
    ).then((res) => res.submitForFormActiveCampaign)
    await submitForFormActiveCampaign(newData, '/api/create-contact', 11)
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
    await toast.promise(createBlog({ data, modelId: '2543028' }), {
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
      open={open}
    />
  )
}
