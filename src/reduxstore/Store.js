import {createStore,combineReducers,applyMiddleware} from "redux"
import AuthReducer from "./Authreducer"
import CartReducer from "./Cartreducer"
import thunk from "redux-thunk"

let middle=store=>next=>action=>{
	console.log("Action "+action.type+" is called at "+ new Date())
	if(action.type==="LOGOUT"){
		store.dispatch({
            type:"EMPTYCART",
        })
	}
	next(action)
}
let reducers=combineReducers({AuthReducer,CartReducer})
let store = createStore(reducers,applyMiddleware(middle,thunk))

export default store


// store.dispatch({
//     type: "BUY_LAPTOP"
// })


