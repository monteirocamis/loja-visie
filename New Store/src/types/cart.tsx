import { createContext, ReactNode, useContext, useState } from "react"

 export type  ShoppingCartProps = {
    isOpen: boolean
  }
   export type  CartItemProps = {
    id: number
    quantity: number
  }

   export type  ShoppingCartProviderProps = {
    children: ReactNode
  }
  
  export type  CartItem = {
    id: number
    quantity: number
  }
  
  export type  ShoppingCartContextTypes = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
  }
  