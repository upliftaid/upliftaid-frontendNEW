import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id)
      
      if (existingItemIndex > -1) {
        // If item exists, update its quantity
        state.items[existingItemIndex].quantity += quantity
      } else {
        // If item doesn't exist, add it
        state.items.push({ product, quantity })
      }
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => {
        const price = Number.parseFloat(item.product.price.replace(/[^0-9.]/g, "")) || 0
        return total + price * item.quantity
      }, 0)
    },
    
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.product.id !== productId)
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => {
        const price = Number.parseFloat(item.product.price.replace(/[^0-9.]/g, "")) || 0
        return total + price * item.quantity
      }, 0)
    },
    
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload
      const itemIndex = state.items.findIndex(item => item.product.id === productId)
      
      if (itemIndex > -1) {
        state.items[itemIndex].quantity = Math.max(1, newQuantity)
      }
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => {
        const price = Number.parseFloat(item.product.price.replace(/[^0-9.]/g, "")) || 0
        return total + price * item.quantity
      }, 0)
    },
    
    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
