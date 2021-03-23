import { createStore, applyMiddleware, compose } from "redux"
import {compositeWithDevTools} from "redux-devtools-extension"

import thunk from "redux-thunk"
import reducer from "./reducer"


const rootReducer=reducer;
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk) )
)