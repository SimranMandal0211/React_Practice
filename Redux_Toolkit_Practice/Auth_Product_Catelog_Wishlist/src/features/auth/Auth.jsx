import {useDispatch, useSelector} from "react-redux";
import {login, logout } from "./authSlice";

function Auth(){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return(
        <>
            {
                !user && (
                <button onClick={() => 
                    dispatch(login({
                        id: Date.now(),
                        name: "Simran",
                        email: "simran@example.com",
                    })
                )}>
                    Login
                </button>
                )
            }

            {
                user && (
                    <>
                        <p>Welcome, {user.name}!</p>
                        <p>{user.email}</p>

                        <button onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                    </>
                )
        
            }
        </>
    )
}

export default Auth;