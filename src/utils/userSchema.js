import * as yup from 'yup'

export const userSchema1 = yup.object({
  email: yup.string().email('').required(),
})

export const userSchema2 = yup.object({
  email: yup.string().email('').required(),
  message: yup.string().min(8).required(),
})

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const emailRegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

// const urlRegExp =
//   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

export const userSchema8 = yup.object().shape({
  company_name: yup.string().required(),
  website: yup.string().required(),
  industry: yup.string().required(),
  message: yup.string(),
  // content: yup.string().required(),
  email: yup.string(),
  phone: yup.string(),
  whatsapp: yup.string(),
})
