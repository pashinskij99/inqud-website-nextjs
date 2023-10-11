'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { StyledButtonSecondary } from '@/components/UI/Button/Button.styled'
import { InputText } from '@/components/UI/Input'
import { emailRegExp } from '@/utils/userSchema'

export default function FooterForm({ t }) {
  const pathname = usePathname()
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    if (email.toLowerCase().match(emailRegExp)) {
      const page = pathname.split('/')[1] || 'Home'

      const toast = await import('react-toastify').then((res) => res.toast)
      const createBlog = await import('@/lib/datocms').then(
        (res) => res.createBlog
      )
      await fetch('/api/post-get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })
      await toast.promise(
        createBlog({ data: { email, page }, modelId: '2540253' }),
        {
          pending: 'Sending data',
          success: 'Data sent',
        }
      )
    }
  }
  return (
    <>
      <InputText
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='example@mail.com'
        className='footerSubscribeSectionInput'
      />
      <StyledButtonSecondary
        onClick={handleSubmit}
        className='footerSubscribeSectionButton'
      >
        {t}
      </StyledButtonSecondary>
    </>
  )
}
