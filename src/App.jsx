import Navbar from "./components/navbar/Navbar";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import UploadForm from "./components/UploadForm";
import { useContext, useMemo, useEffect, useState } from "react";
import { Context } from "./context/FirestoreContext";
import { useAuthContext } from "./context/AuthContext";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import FooterComponent from "./components/FooterComponent";
import GoUpButton from "./components/GoUpButton";
import CookieDisclaimer from "./components/CookieDisclaimer";

function App() {
  const { dispatch, state, read } = useContext(Context);
  const { authenticate, currentUser } = useAuthContext();
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });
  const [isHoved, setIsHoved] = useState(false);

  const count = useMemo(() => {
    return `Total: ${state.items.length} image${
      state.items.length > 1 ? "s" : ""
    }`;
  }, [state.items]);

  useEffect(() => {
    read();
    authenticate();
  }, []);

  return (
    <>
      <Navbar />
      <main className="">
        <Searchbar />
        <div className="flex flex-col items-center mt-5 px-2">
          <div className="relative flex flex-col items-center">
            <button
              className="px-4 py-2 bg-[#00df9a] text-black"
              onClick={() => toggle(!state.isCollapsed)}
              onMouseEnter={() => setIsHoved(true)}
              onMouseLeave={() => setIsHoved(false)}
            >
              {state.isCollapsed ? "Close" : "+ Add"}
            </button>
            {isHoved && !currentUser && (
              <div className="absolute w-[190px] top-[30px] left-[40px] border p-2 bg-white shadow-md">
                Sign In to upload image
              </div>
            )}
          </div>
          <UploadForm />
          <h1 className="text-[40px] mb-4 mt-4">Images Gallery</h1>
          <span className="mb-5">{count}</span>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <List items={state.items} />
          </div>
        </div>
        <SliderComponent />
      </main>
      <GoUpButton />
      <FooterComponent />
      <CookieDisclaimer />
    </>
  );
}

export default App;
