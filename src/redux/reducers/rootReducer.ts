import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import search, { ISearch } from "./searchReducer";

export interface IStore {
  router: any;
  search: ISearch;
}
//@ts-ignorets-ignore
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    search,
  });

export default createRootReducer;
