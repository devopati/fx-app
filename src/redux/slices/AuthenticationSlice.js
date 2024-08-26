import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { errorGenerator } from "../../utils/errorGenerator";
import { ToastAndroid } from "react-native";
// import { BACKEND_URL } from "../../constants/BackendUrl";

const BACKEND_URL = "https://tradeorbit-server.onrender.com/api";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userData: {},
  token: "",
  errMsg: "",
  successMsg: "",
  verified: false,
  toLogin: false,
  currentPlan: [],
  isGettingOffering: false,
};

// Register user
export const RegisterUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/register`,
        userData
      );

      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Verify user
export const VerifyUser = createAsyncThunk(
  "auth/verify",
  async (data, thunkAPI) => {
    try {
      const { userId, code } = data;
      const response = await axios.get(
        `${BACKEND_URL}/user/verify/${userId}/${code}`
      );
      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Login user
export const LoginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, userData);
      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Forgot Password
export const ForgotPasswordReset = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/reset-password-code`,
        { email }
      );
      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Forgot Password
export const ResetUserPassword = createAsyncThunk(
  "auth/resetUserPassword",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/reset-password`,
        data
      );
      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Update Password
export const UpdateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/update-password`,
        data
      );
      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

// Update plan
export const UpdatePlan = createAsyncThunk(
  "auth/updateplan",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${BACKEND_URL}/user/update-plan`,
        data
      );

      return response;
    } catch (error) {
      let errMsg = errorGenerator(error);

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_SUCCESS_MSG(state, action) {
      state.successMsg = action.payload;
    },
    SET_ERR_MSG(state, action) {
      state.errMsg = action.payload;
    },
    SET_IS_LOGGED_IN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_TOKEN(state, action) {
      state.token = action.payload;
    },
    SET_VERIFIED(state, action) {
      state.verified = action.payload;
    },
    setToLogin: (state, action) => {
      state.toLogin = action.payload;
    },
    setCurrentPlan: (state, action) => {
      state.currentPlan = action.payload;
    },
    setIsGettingOfferings: (state, action) => {
      state.isGettingOffering = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER USER
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload.data?.message;
        state.token = action.payload.data?.token;
        state.isLoggedIn = true;
        ToastAndroid.show("Success", ToastAndroid.SHORT);
      })

      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // VERIFY USER
      .addCase(VerifyUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(VerifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload.data?.message;
        state.userData = action.payload.data?.user;
        state.verified = true;
      })

      .addCase(VerifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // LOGIN USER
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.data?.user;
        state.token = action.payload.data?.token;
        state.isLoggedIn = true;
        ToastAndroid.show("Success", ToastAndroid.SHORT);
      })

      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // FORGOT PASSWORD RESET
      .addCase(ForgotPasswordReset.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(ForgotPasswordReset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload.data?.message;
        state.token = action.payload.data?.token;
      })

      .addCase(ForgotPasswordReset.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // RESET USER PASSWORD
      .addCase(ResetUserPassword.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(ResetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.data?.user;
        state.token = action.payload.data?.token;
      })

      .addCase(ResetUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // UPDATE USER PLAN
      .addCase(UpdatePlan.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(UpdatePlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.data?.user;
        state.token = action.payload.data?.token;
      })

      .addCase(UpdatePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      })

      // UPDATE USER PASSWORD
      .addCase(UpdateUserPassword.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(UpdateUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMsg = action.payload.data?.message;
      })

      .addCase(UpdateUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
      });
  },
});

export const {
  SET_SUCCESS_MSG,
  SET_ERR_MSG,
  SET_IS_LOGGED_IN,
  SET_TOKEN,
  SET_VERIFIED,
  setToLogin,
  setCurrentPlan,
  setIsGettingOfferings,
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
