import { createSlice } from '@reduxjs/toolkit'

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    status:[],
  },
  reducers: {

    setPostToStore :(state,action) =>{
        console.log(action.payload);
        state.status.push(action.payload)
    },  
  
  },
})

// Action creators are generated for each case reducer function
export const { setPostToStore, } = statusSlice.actions

export default statusSlice.reducer