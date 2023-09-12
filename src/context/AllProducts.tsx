import React, { createContext, useReducer, ReactNode } from "react";
import { reducer } from "../reducer/reducer";


interface InitialStateType {
  products: {
    products:[]
  };
  productDetail:{
    productDetail:{}
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    brand: string;
    discountPercentage: number;
    description: string;
    rating: number;
    stock: number;
  }
}

export interface APIContextType {
  api: InitialStateType;
  dispatch: React.Dispatch<any>;
  
}

export const contextAPI = createContext<APIContextType | any>(undefined);


interface APIContextProviderProps {
  children: ReactNode;
}

const initialState: InitialStateType = {
  products: {
    products:[]
  },
  productDetail:{
    productDetail:{},
    id: 0,
    title: '',
    price: 0,
    thumbnail: '',
    brand: '',
    discountPercentage: 0,
    description: '',
    rating: 0,
    stock: 0,

    
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