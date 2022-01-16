import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store = createStore(rootReducer);

// function App(){
//     return <Provider store={store} ></Provider>;
// }

export default store;