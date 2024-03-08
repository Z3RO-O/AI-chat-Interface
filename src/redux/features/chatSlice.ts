import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: Message[];
}

interface Message {
  text: string;
  isUser: boolean;
  label: string;
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;