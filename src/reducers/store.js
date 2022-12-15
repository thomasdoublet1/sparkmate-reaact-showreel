import {createStore} from "redux";
import {storedPromptReducer} from "./storedPromptReducer";

const store = createStore(storedPromptReducer);

export default store;