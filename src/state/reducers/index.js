import { combineReducers } from "redux";
import amountReduce from "./amount-reduce";

const reducers=combineReducers({
    amount:amountReduce
})
export default reducers;