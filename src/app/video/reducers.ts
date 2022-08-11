import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { TVidoes } from 'types/vidoes';

// Define a type for the slice state
interface IVidoeState {
  data: TVidoes;
}

// Define the initial state using that type
const initialState = {
  data: {} as IVidoeState["data"],
};

export const vidoesSlice = createSlice({
  name: 'vidoes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getvidoes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getvidoes } = vidoesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectVidoes = (state: RootState) => state.vidoes;

export default vidoesSlice.reducer;
