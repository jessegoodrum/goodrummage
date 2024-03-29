import {CartDropdownContainer, EmptyMessage, CartItems }from './cart-dropdown.styles'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

export default function CartDropdown(){
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler =() =>{
        navigate('/checkout')
    }

    
    return(
        <CartDropdownContainer>
            <CartItems>

            {cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem = {item}/>
            ))): (
                <EmptyMessage>Your Cart Is Empty</EmptyMessage>
            )} 
                
            </CartItems>
            <Button onClick = {goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}