import { IPartners, IPartner } from '../../types/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getOnePagePartners, getPartnerData } from '../actionCreator';

const initialState: IPartners = {
  page: 1,
  idPartner: 0,
  partner: null,
  partners: [],
  isLoading: false,
  isLoadingMore: false,
  isLoadingPartner: false,
  error: '',
};

export const partnerSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    pagePartner(state, action: PayloadAction<number>) {
      state.idPartner = action.payload;
      state.partners.forEach((partner) => {
        if (partner.id === action.payload) {
          state.partner = partner;
        }
      });
    },
  },
  extraReducers: {
    [getOnePagePartners.pending.type]: (state) => {
      if (state.page === 1) {
        state.isLoading = true;
      } else {
        state.isLoadingMore = true;
      }
    },
    [getOnePagePartners.fulfilled.type]: (state, action: PayloadAction<IPartner[]>) => {
      state.isLoading = false;
      state.isLoadingMore = false;
      state.error = '';
      state.page += 1;
      state.partners.push(...action.payload);
    },
    [getOnePagePartners.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getPartnerData.pending.type]: (state) => {
      state.isLoadingPartner = true;
    },
    [getPartnerData.fulfilled.type]: (state, action: PayloadAction<IPartner[]>) => {
      state.isLoadingPartner = false;
      state.error = '';
    },
    [getPartnerData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingPartner = false;
      state.error = action.payload;
    },
  },
});

export default partnerSlice.reducer;
