import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./features/users/usersSlice";


function App() {
  const dispatch = useDispatch();

  const {
  users,
  loading,
  error,
} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  },[]);


  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error: {error}</h1>
  }


  return(
    <>
      <h1>Fetch User Data</h1>

      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
