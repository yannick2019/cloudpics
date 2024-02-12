import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Searchbar from "../components/Searchbar";
import FooterComponent from "../components/FooterComponent";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="h-[100dvh]">
        <Searchbar />
        <button
          className="mb-5 px-2 py-1 bg-[#00df9a] m-4"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[50px] md:text-[100px]">404</h1>
          <p className="text-[36px] md:text-[50px]">Looks like you are lost</p>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};
export default NotFound;
