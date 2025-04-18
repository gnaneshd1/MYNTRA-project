import { combineReducers } from "@reduxjs/toolkit";
import  userReducer from "./userReducer";
import wishlistReducer from "./wishlistReducer";
import cartReducer from './cartReducer';
import currentProductReducer from './currentProductReducer'; // ✅ no curly braces


const rootReducer = combineReducers({
     
    user: userReducer,
    cart:cartReducer,
    wishlist: wishlistReducer,
    currentProduct:currentProductReducer,

})
export default rootReducer;
