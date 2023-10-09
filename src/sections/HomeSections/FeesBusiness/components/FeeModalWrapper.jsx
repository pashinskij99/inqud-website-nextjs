import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FeeModal } from '@/components/Modal/Modal'
import { emailRegExp, phoneRegExp, userSchema8 } from '@/utils/userSchema'

export default function FeeModalWrapper({
  handleHideModal,
  showModal,
  modelId,
  params,
}) {
  const [lastError, setLastError] = useState('')
  const clearLastError = () => {
    setLastError('')
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(userSchema8),
  })
  const onSubmit = async (data) => {
    const checkValue = (key, value) => {
      switch (key) {
        case 'email':
          return value.toLowerCase().match(emailRegExp)
            ? 'valid'
            : 'Email is not valid'
        case 'phone':
          return value.toLowerCase().match(phoneRegExp)
            ? 'valid'
            : 'Phone number is not valid'
        case 'whatsapp':
          return value.toLowerCase().length >= 4
            ? 'valid'
            : 'Whatsapp username must be at least 4 characters'
        default:
          return null
      }
    }
    const validateLastValues = (obj) => {
      let result

      Object.entries(obj).forEach(([key, value]) => {
        if (value) {
          result = checkValue(key, value)
        }
      })

      return result || 'one of these fields must be filled'
    }
    const resultCheck = validateLastValues({
      email: data.email,
      phone: data.phone,
      whatsapp: data.whatsapp,
    })
    if (resultCheck === 'valid') {
      // const newData = {
      //   email: data.email,
      //   phone: data.phone,
      //   whatsapp: data.whatsapp,
      //   fieldValues: [
      //     {
      //       field: '2',
      //       value: data.company_name,
      //     },
      //     {
      //       field: '3',
      //       value: data.website,
      //     },
      //     {
      //       field: '4',
      //       value: data.industry,
      //     },
      //     {
      //       field: '1',
      //       value: data.message,
      //     },
      //   ],
      // }

      // await toast.promise(
      //   submitForFormActiveCampaign(newData, '/api/create-contact', autoId),
      //   {
      //     pending: 'Sending data',
      //     success: 'Data sent',
      //   }
      // )
      const toast = await import('react-toastify').then((res) => res.toast)
      const createBlog = await import('@/lib/datocms').then(
        (res) => res.createBlog
      )
      await toast.promise(createBlog({ data, modelId }), {
        pending: 'Sending data',
        success: 'Data sent',
      })

      handleHideModal()
      reset()
    } else {
      setLastError(resultCheck)
    }
  }
  return (
    <FeeModal
      lastError={lastError}
      clearLastError={clearLastError}
      setValue={setValue}
      control={control}
      open={showModal}
      handleClose={handleHideModal}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      params={params}
    />
  )
}
