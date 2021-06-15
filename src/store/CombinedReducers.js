import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

import { changeTheme } from "../components/navbar/store/choose_theme/ChooseThemeReducers";
import { changeCurrentPage } from "../components/navbar/store/current_page/CurrentPageReducers";

//games filter with Game Provider
const persistConfig = {
  key: "pageData",
  whitelist: ["changeTheme", "changeCurrentPage", "i18nState"],
  storage,
};

const rootReducer = combineReducers({
  changeTheme,
  i18nState,
  changeCurrentPage
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
