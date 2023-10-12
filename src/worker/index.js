import { getTimeForBlog } from '@/utils/getTimeForBlog'

// eslint-disable-next-line no-restricted-globals
addEventListener('message', (event) => {
  postMessage(getTimeForBlog(event.data))
})
