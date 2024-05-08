import { Link } from "react-router-dom"

const UserListing = ({user}) => {
  return (
    <>
     <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {user.role}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link  
        to={`/users/${user.id}`} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Details
        </Link>
      </td>
    </tr>
    
  </tbody>
</>
  )
}

export default UserListing