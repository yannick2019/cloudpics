import Navbar from "./components/navbar/Navbar";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import UploadForm from "./components/UploadForm";
import { useContext, useMemo, useEffect } from "react";
import { Context } from "./context/FirestoreContext";
import { useAuthContext } from "./context/AuthContext";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import FooterComponent from "./components/FooterComponent";

function App() {
  const { dispatch, state, read } = useContext(Context);
  const { authenticate } = useAuthContext();
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

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
      <main className="h-[100dvh]">
        <Searchbar />
        <div className="flex flex-col items-center mt-5 px-2">
          <button
            className="px-4 py-2 bg-[#00df9a] text-black"
            onClick={() => toggle(!state.isCollapsed)}
          >
            {state.isCollapsed ? "Close" : "+ Add"}
          </button>
          <UploadForm />
          <h1 className="text-[40px] mb-4 mt-4">Gallery</h1>
          <span className="mb-5">{count}</span>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <List items={state.items} />
          </div>
        </div>
        <SliderComponent />
        <FooterComponent />
      </main>
    </>
  );
}

export default App;
