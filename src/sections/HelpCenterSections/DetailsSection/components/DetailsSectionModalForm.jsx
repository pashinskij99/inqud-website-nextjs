import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ModalSendRequest } from '@/components/Modal'
import { submitForFormActiveCampaign } from '@/lib/activeCampaign'
import { createBlog } from '@/lib/datocms'
import { userSchema2 } from '@/utils/userSchema'

export default function DetailsSectionModalForm({ handleClose, openModal }) {
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
    await submitForFormActiveCampaign(newData, '/api/create-contact', 12)
    // ,
    //   {
    //     pending: 'Sending data',
    //     success: 'Data sent',
    //   }
    // )
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
    />
  )
}
