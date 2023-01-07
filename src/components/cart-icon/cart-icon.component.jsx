
import {ShoppingIcon, CartIconContainer, ItemCount} from"./cart-icon.styles"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon(){
    const {isCartOpen , setIsCartOpen, cartQuantity} = useContext(CartContext)

    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
    return(
    
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>

    );
};