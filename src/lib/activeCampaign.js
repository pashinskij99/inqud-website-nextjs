import axios from 'axios'

// const apiKey = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY;
const apiKey = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_API_URL

export const activeCampaignApi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Api-Token': apiKey,
    'Content-Type': 'application/json',
  },
})

export const createContact = async (contactData) => {
  try {
    const response = await activeCampaignApi.post(
      '/api/3/contacts',
      contactData
    )
    return response.data
  } catch (error) {
    return null
  }
}

export const addTagToContact = async (contactId, tagId) => {
  try {
    const response = await activeCampaignApi.post('/api/3/contactTags', {
      contactTag: {
        contact: contactId,
        tag: tagId,
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
