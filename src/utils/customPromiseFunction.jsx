// export function customPromiseFunction(
//   operation,
//   { success, loading },
//   handleStatus
// ) {
//   // eslint-disable-next-line no-async-promise-executor
//   return new Promise(async (resolve, reject) => {
//     try {
//       handleStatus({
//         loading: true,
//         success: '',
//         error: '',
//       })

//       const result = await operation

//       handleStatus({
//         success: true,
//         loading: false,
//         error: false,
//       })

//       resolve(result)
//     } catch (error) {
//       handleStatus({
//         error: true,
//         success: false,
//         loading: false,
//       })

//       reject(error)
//     }
//   })
// }
