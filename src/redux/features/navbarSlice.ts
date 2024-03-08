import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavbarState {
 activeItem: string;
 mobileMenuOpen: boolean;
}

const initialState: NavbarState = {
 activeItem: 'Chat',
 mobileMenuOpen: false,
};

export const navbarSlice = createSlice({
 name: 'navbar',
 initialState,
 reducers: {
    setActiveItem: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
 },
});

export const { setActiveItem, setMobileMenuOpen } = navbarSlice.actions;

// Assuming you have a more complex state structure or need to compute derived data
const selectNavbarState = (state: RootState) => state.navbar;

// Using createSelector for memoization
export const selectActiveItem = createSelector(
 [selectNavbarState],
 (navbarState) => navbarState.activeItem
);

export default navbarSlice.reducer;