import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  selectedWorkspaceId: string;
}

const initialState: SidebarState = {
  selectedWorkspaceId: '',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelectedWorkspaceId: (state, action: PayloadAction<string>) => {
      state.selectedWorkspaceId = action.payload;
    },
  },
});

export const { setSelectedWorkspaceId } = sidebarSlice.actions;

export default sidebarSlice.reducer;
