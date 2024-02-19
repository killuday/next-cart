import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    id: number;
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [] as Item[],
    reducers: {
        add(state, action: PayloadAction<Item>) {
            state.push(action.payload);
        },
        remove(state, action: PayloadAction<{ id: number }>) {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
