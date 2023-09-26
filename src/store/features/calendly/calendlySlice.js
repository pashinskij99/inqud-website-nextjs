const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  uri: '',
}

const calendlySlice = createSlice({
  name: 'calendly',
  initialState,
  reducers: {
    setUri(state, action) {
      state.uri = action.payload
    },
  },
})

export const { setUri } = calendlySlice.actions
