import { useUIContext } from "../context/ui";


function useCart(product) {
    const {cart, setCart} = useUIContext();

    const addToCart = () => {
        cart.findIndex(c => c.id === product.id) >= 0
        ? setCart(cart.filter(c => c.id !== product.id))
        : setCart(c => [...c, product]);
    }

    /*const addToCartText  = cart.findIndex((c) => c.id === product.id) >= 0
    ? 'Видалити з кошика' : 'Додати в кошик';*/
    
    

    return addToCart
}

export default useCart;