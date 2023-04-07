import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        login:false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.login = true;
            state.currentUser = action.payload;// the function in dispacth >> like  dispatch(loginStart());
        },
        loginFailure: (state) => {
            state.isFetching = true;
            state.error = true;
        }
    }
})

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;