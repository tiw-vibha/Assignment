
import { useState, useEffect } from 'react';
import UserListing from './UserListing';

const UserListings = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchUser = async () =>{
            const apiURL = "/api/users";
            try{
                const res = await fetch(apiURL);
                const data = await res.json();
                setUser(data);

            }
            catch (err){
                console.log("Error in fetching", err);

            }finally{
                setLoading(false);
            }
        }
        fetchUser()

    },[])
    
  return (
    <>
    
    <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Email
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Role
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  {users.map((user)=>{
    return(<UserListing key={user.id} user={user}/>)
  })}
</table> 
    </>
    
  )
}

export default UserListings