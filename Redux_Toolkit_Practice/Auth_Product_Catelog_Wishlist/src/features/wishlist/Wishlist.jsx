import { useDispatch, useSelector } from "react-redux";

import { removeFromWishList } from "./wishlistSlice";

function Wishlist(){
    const dispatch = useDispatch();

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    return(
        <>
            <h2>Wishlist</h2>

            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => dispatch(removeFromWishList(item.id))}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Wishlist;