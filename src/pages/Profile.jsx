import Navbar from "../components/navbar/Navbar";
import { useAuthContext } from "../context/AuthContext";
import { Context } from "../context/FirestoreContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { currentUser, authenticate } = useAuthContext();
  const { read } = useContext(Context);

  useEffect(() => {
    authenticate();
    read();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mt-8">
        <h1 className="text-center text-[40px]">Profile</h1>
        <hr style={{ width: "50%", margin: "3rem auto" }} />
        <div className="flex gap-4 flex-col items-center md:flex-row md:items-center md:justify-center">
          <img
            style={{ borderRadius: "4px " }}
            src={currentUser?.photoURL}
            alt={currentUser?.displayName}
            width="160"
            height="160"
          />
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
              <span className="uppercase">name:</span>{" "}
              {currentUser?.displayName}
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200">
              <span className="uppercase">email:</span> {currentUser?.email}{" "}
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200">
              <span className=""></span> ---{" "}
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200">
              <span className=""></span> ---{" "}
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default Profile;
