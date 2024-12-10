import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Async Thunk for creating users
export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ formData }) => {
    try {
      const {
        address,
        city,
        confirmPassword,
        contactNo,
        country,
        dob,
        email,
        gender,
        name,
        password,
        role,
        state,
        zipCode,
        age,
      } = formData;
      const body = {
        name,
        age,
        dob,
        contact: contactNo,
        address,
        country,
        city,
        state,
        zipCode: Number(zipCode),
        gender,
        email,
        password,
        role,
      };
      const response = await axios.post(`http://localhost:3010/users`, body);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch vehicles"
      );
    }
  }
);

// Async Thunk for user login
export const userLogin = createAsyncThunk(
  "users/userLogin",
  async ({ formData }) => {
    try {
      const response = await axios.post(
        `http://localhost:3010/auth/login`,
        formData
      );
      const token = response.data.access_token;
      localStorage.setItem("token", token);

      // Decode JWT and save user data
      const decodedData = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(decodedData));

      return { user: decodedData, access_token: token };
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch vehicles"
      );
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: {},
    token: "",
    loading: false,
    error: null,
  },
  reducers: {
    loadUser: (state) => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        state.token = token;
        state.data = user;
      }
    },
    logout: (state) => {
      state.token = null;
      state.data = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.data = action.payload.user;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { loadUser, logout } = userSlice.actions;
export default userSlice.reducer;
