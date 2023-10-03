export const submitForFormActiveCampaign = async (
  contact,
  apiLink,
  automationId
) => {
  // const contact = {}
  // const formData = new FormData(event.target)

  // eslint-disable-next-line no-restricted-syntax
  // for (const [key, value] of formData.entries()) {
  //   contact[key] = value
  // }

  await fetch(apiLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contact, automationId }),
  })
}
