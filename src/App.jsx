import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/Homepage';
import MainLayout from './layout/MainLayout';

import ViewDetailsPage,{ userLoader} from './pages/ViewDetailsPage';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';



function App() {

  //Add User

  const addUser = async (newUser) => {
    const res = await fetch('/api/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'applicatoin/json'
      },
      body: JSON.stringify(newUser)
    },
    
  )
  return;

  }

  //update user
  const updateUser = async (user) =>{
    const res = await fetch(`/api/users/${user.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'applicatoin/json'
      },
      body: JSON.stringify(user)
    },
    
  )
  return;


  }

  //delete user
  const deleteUser = async (id) =>{
    const res = await fetch(`/api/users/${id}`,{
      method: 'DELETE',
      
    },
    
  )
  return;

  }

  const router= createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/users/:id' element={<ViewDetailsPage deleteUser={deleteUser} />} loader={userLoader} />
      <Route path='/edit-user/:id' element={<EditUserPage updatedUserSubmit={updateUser} />} loader={userLoader}/>

      </Route>
      <Route path='/add-user' element={<AddUserPage  addUserSubmit={addUser} />}  />
      
      
      </>
    )
  )
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
