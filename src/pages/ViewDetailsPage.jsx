import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ViewDetailsPage = ({deleteUser}) => {
    const {id} = useParams();
    const user = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = (id) =>{
        const confirm = window.confirm("Are you sure you want to delete this job?")
        if(!confirm) return;
        deleteUser(id);
        toast.success("User Deleted Successfully")
        navigate("/")
  
      }


  return (<>
 
 <section className="bg-indigo-100">
      <div className="container m-auto py-6 px-6">
        <Link
          to="/"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="m2-2" />Back to Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              
              <h1 className="text-3xl font-bold mb-4">
                {user.name}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <div className="text-gray-500 mb-4">UserName - </div>
                
                <p className="text-orange-700">{user.username}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                More Details
              </h3>

              <p className="mb-4">
              Role - {user.role}
              </p>
              <p className="mb-4">
              Email Address - {user.email}
              </p>
            </div>
          </main>

          <aside>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Address Details</h3>

              

              <p className="my-2">
              {user.address.suite},
              {user.address.city},
              {user.address.zipcode}
              </p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage User</h3>
              <Link
                to={`/edit-user/${user.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit User</Link>
              <button onClick={() => onDeleteClick(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete User
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>
  )
}

const userLoader = async ({params}) =>{
    const res = await fetch(`/api/users/${params.id}`);
    const data = await res.json();
    return data;


}

export { ViewDetailsPage as default , userLoader }