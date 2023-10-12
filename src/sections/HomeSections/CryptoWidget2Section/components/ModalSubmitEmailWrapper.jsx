'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { userSchema1 } from '@/utils/userSchema'
import { ModalSubmitEmail } from '@/components/Modal'

export default function ModalSubmitEmailWrapper({ handleClose, open, params }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(userSchema1),
  })
  const onSubmit = async (data) => {
    const newData = {
      email: data.email,
    }

    const submitForFormActiveCampaign = await import(
      '@/lib/activeCampaign'
    ).then((res) => res.submitForFormActiveCampaign)
    await submitForFormActiveCampaign(newData, '/api/create-contact', 4)

    const toast = await import('react-toastify').then((res) => res.toast)
    const createBlog = await import('@/lib/datocms').then(
      (res) => res.createBlog
    )
    await toast.promise(createBlog({ data, modelId: '2537957' }), {
      pending: 'Sending data',
      success: 'Data sent',
    })

    handleClose()
    reset()
  }
  return (
    <ModalSubmitEmail
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      open={open}
      handleClose={handleClose}
      params={params}
    />
  )
}
