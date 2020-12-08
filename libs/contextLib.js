import { useContext, createContext } from "react";

/*
Store the Session in the Context
We are going to have to pass the session related info to all of our containers. 
This is going to be tedious if we pass it in as a prop, 
since we¡¯ll have to do that manually for each component. 
Instead let¡¯s use React Context for this.
*/

export const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}