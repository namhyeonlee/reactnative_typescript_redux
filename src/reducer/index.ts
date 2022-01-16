import { combineReducers } from "redux";
import auth from '../modules/authSlice';

//rootReducer 생성

const rootReducer = combineReducers({
    auth,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;