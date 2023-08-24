const getCurrentTime = ({ days, hours, minutes, seconds }) =>
  (days && `${days} days`) ||
  (hours && `${hours} hours`) ||
  (minutes && `${minutes} minutes`) ||
  (seconds && `${seconds} seconds`)

export const getTimeForBlog = (date) => {
  const event = new Date(date)
  const timeLeft = new Date().getTime() - event.getTime()

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return {
    date: event.toLocaleDateString('en-EN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    time: getCurrentTime({ days, hours, minutes, seconds }),
  }
}
