import React, { createContext, useReducer, ReactNode } from "react";
import { reducer } from "../reducer/reducer";

// Defina o tipo para o estado inicial
interface InitialStateType {
  products: {
    products:[]
  };
  productDetail:{
    productDetail:{}
  }
}

// Defina o tipo para o contexto
export interface APIContextType {
  api: InitialStateType;
  dispatch: React.Dispatch<any>;
  
}

export const contextAPI = createContext<APIContextType | any>(undefined);

// Aceite 'children' como um tipo ReactNode
interface APIContextProviderProps {
  children: ReactNode;
}

const initialState: InitialStateType = {
  products: {
    products:[]
  },
  productDetail:{
    productDetail:{}
  }
};

export const APIContextProvider: React.FC<APIContextProviderProps> = ({
  children,
}: APIContextProviderProps) => {
  const [api, dispatch] = useReducer(reducer, initialState);

  // Crie um objeto para fornecer ambos o estado e o despachante no contexto
  const apiContextValue: APIContextType = {
    api,
    dispatch,
  };

  return (
    <contextAPI.Provider value={apiContextValue}>
      {children}
    </contextAPI.Provider>
  );
};