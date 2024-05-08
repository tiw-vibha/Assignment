import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUserPage = ({updatedUserSubmit}) => {
    const user = useLoaderData()
    const {id} =  useParams();

    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [role, setRole] = useState(user.role);
    const [email, setEmail] = useState(user.email);
    const [suit, setSuite] = useState(user.address.suit);
    const [city, setCity] = useState(user.address.city);
    const [zipcode, setZipcode] = useState(user.address.zipcode);

    const navigate = useNavigate();
    

    const submitForm = (e) =>{
        e.preventDefault();
        const updatedUser = {
            id,
            name,
            username,
            role,
            email,
            address:{
                suit:suit,
                city:city,
                zipcode:zipcode

            }
            
        }
        updatedUserSubmit(updatedUser);
        toast.success("User updated successfully");
        return navigate(`/users/${id}`);
    }
  return (
    <>
    {console.log(user)}
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Edit User</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter name"
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Username</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >User Role</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter Role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Email Address
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Enter Email'
                required      
                value={email}
                onChange={(e) => setEmail(e.target.value)}   
              />
            </div>

            <h3 className="text-2xl mb-5">Address Details</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Suite</label
              >
              <input
                type="sNum"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Apartment number"
                value={suit}
                onChange={(e) => setSuite(e.target.value)}
              />
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >City</label
              >
              <input
                type="text"
                id="city"
                name="city"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
               <label htmlFor="Zipcode" className="block text-gray-700 font-bold mb-2"
                >Zipcode</label
              >
              <input
                type="tel"
                id="Zipcode"
                name="Zipcode"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Zipcode eg-302029"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default EditUserPage