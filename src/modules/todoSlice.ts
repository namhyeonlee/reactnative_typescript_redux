import {createSlice, PayloadAction, createAsyncThunk, nanoid} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

export interface Todo {
    id: string;
    text: string;
    done: boolean;
}

const initialState: Todo[] = [
    {id:'1', text: 'Rn 배우기1', done: true},
    {id:'2', text: 'Rn 배우기2', done: false},
    {id:'3', text: 'Rn 배우기3', done: false},
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: {
            prepare(text: string) {
                return {payload:{id: nanoid(), text}}
            },
            reducer(state, action: PayloadAction<{id: string; text: string}>) {
                state.push({
                    ...action.payload,
                    done:false
                })
            }
        },
        remove(state, action: PayloadAction<string>) {
            return state.filter(todo=>todo.id !== action.payload)
        },
        toggle(state, action: PayloadAction<string>) {
            const selected = state.find(todo => todo.id === action.payload);
            if(selected === undefined) {
                return;
            }
            selected.done = !selected.done;
        }
    }
});

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;