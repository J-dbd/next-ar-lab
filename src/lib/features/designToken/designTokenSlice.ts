import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface DesignTokenState {
  tokens: {
    colors: {
      primary: string;
      secondary: string;
    };
    sizes: {
      fontBase: string;
      padding: string;
    };
  };
}

const initialState: DesignTokenState = {
  tokens: {
    colors: {
      primary: "",
      secondary: "",
    },
    sizes: {
      fontBase: "",
      padding: "",
    },
  },
};

export const designTokenSlice = createSlice({
  name: "designToken",
  initialState,
  reducers: {
    setDesignToken(state, action: PayloadAction<DesignTokenState>) {
      state.tokens = action.payload.tokens;
    },
  },
});

export const { setDesignToken } = designTokenSlice.actions;
export default designTokenSlice.reducer;
