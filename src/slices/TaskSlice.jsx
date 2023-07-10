import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: null,
        loading: false
    },
    reducers: {
        getAll: (state, action) => {
            state.tasks = action.payload
        },
        add: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        },
        remove: (state, action) => {
            state.tasks = state.tasks && state.tasks.filter(i => i._id !== action.payload._id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {
    getAll,
    add,
    remove,
    setLoading
} = taskSlice.actions

export default taskSlice.reducer
