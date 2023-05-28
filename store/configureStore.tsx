import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { NotificationsReducer, OrdersReducer } from "./reducers";
import { LoginReducer } from "./reducers/auth";
import { LooksReducer } from "./reducers/looks";
import { profileReducer } from "./reducers";
import { HistoryReducer } from "./reducers/searchHistory";
import { TagsReducer } from "./reducers/tags";
import { SearchReducer } from "./reducers/search";
import { FavoritesReducer } from "./reducers/favorites";
import { DeliverAddressReducer } from "./reducers/deliveryAddress";
import { ChatReducer } from "./reducers/chat";


const rootReducer = combineReducers({
  login: LoginReducer,
  looks: LooksReducer,
  profile: profileReducer,
  orders: OrdersReducer,
  searchHistory: HistoryReducer,
  tags: TagsReducer,
  deliverAddress: DeliverAddressReducer,
  notifications: NotificationsReducer,
  favorites: FavoritesReducer,
  search: SearchReducer,
  messages: ChatReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
