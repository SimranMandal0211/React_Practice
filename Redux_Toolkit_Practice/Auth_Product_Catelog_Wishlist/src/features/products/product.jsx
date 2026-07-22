import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { fetchProduct } from "./productSlice";
import { addToWishlist } from "../wishlist/wishlistSlice";

function ProductList(){
    const dispatch = useDispatch();

    const { items: products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch]);

    if(loading){
        return <p>Loading....</p>
    }

    if(error){
        return <p>Error {error}</p>
    }

    return(
        <>
            <h2>Products</h2>
                <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>

                            <img src={product.image} alt={product.title} width="100" />

                            <button
                            onClick={() => dispatch(addToWishlist(product))}>
                                Add to Wishlist
                            </button>
                        </li>
                    )) 
                }
                </ul>
        </>
        
    )
}

export default ProductList;