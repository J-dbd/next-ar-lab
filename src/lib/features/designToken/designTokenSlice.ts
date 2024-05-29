import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface Colors {
  primary: string;
  secondary: string;
}

interface Sizes {
  fontBase: string;
  padding: string;
  container: string;
  warpper: string;
}

export interface DesignTokenState {
  tokens: {
    colors: Colors;
    sizes: Sizes;
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
      container: "",
      warpper: "",
    },
  },
};

export const designTokenSlice = createSlice({
  name: "designToken",
  initialState,
  reducers: {
    setDesignToken(state, action: PayloadAction<DesignTokenState["tokens"]>) {
      state.tokens = action.payload;
    },
  },
});

export const { setDesignToken } = designTokenSlice.actions;
export default designTokenSlice.reducer;
