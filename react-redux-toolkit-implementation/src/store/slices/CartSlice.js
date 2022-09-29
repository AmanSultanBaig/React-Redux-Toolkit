import { createSlice } from '@reduxjs/toolkit'

const addItemSlice = createSlice({
    name: "AddSlice",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = addItemSlice.actions
export default addItemSlice.reducer