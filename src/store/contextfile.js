import React, { useState } from "react";
import CreateContext from "./contextglobal";
import { useReducer } from 'react';
const SavedProductReducer=(state,action)=>{
  if (action.type === "add") {
      return [...state,action.payload];
  }
    else {
      return state
  }
}

export const ContextWrapper = (props) => {
const [savedProductData,dispatchProductData]=useReducer(SavedProductReducer,[]);
  return (
    <CreateContext.Provider value={{savedProductData,dispatchProductData }}>
      {props.children}
    </CreateContext.Provider>
  );
};
