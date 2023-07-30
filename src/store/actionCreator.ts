import { createAsyncThunk } from '@reduxjs/toolkit';
import { registration } from '../api/tokenApi';
import { IUserDataRegistration } from '../types/api';
import { getPartner, getPartners } from '../api/partnerApi';

export const getTokenRegistration = createAsyncThunk(
  'token/registration',
  async (userData: IUserDataRegistration, thunkApi) => {
    // try {
    return (await registration(userData)).token;
    // } catch (error: any) {
    //   return thunkApi.rejectWithValue(error.message);
    // }
  }
);

export const getTokenLogin = createAsyncThunk('token/login', async (userData: IUserDataRegistration, thunkApi) => {
  // try {
  return await registration(userData);
  // } catch (error: any) {
  //   return thunkApi.rejectWithValue(error.message);
  // }
});

export const getOnePagePartners = createAsyncThunk('partner/morePartners', async (page: number, thunkApi) => {
  // try {
  return await getPartners(page);
  // } catch (error: any) {
  //   return thunkApi.rejectWithValue(error.message);
  // }
});

export const getPartnerData = createAsyncThunk('partner/partner', async (id: number, thunkApi) => {
  // try {
  return await getPartner(id);
  // } catch (error: any) {
  //   return thunkApi.rejectWithValue(error.message);
  // }
});
