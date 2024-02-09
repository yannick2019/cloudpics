import Navbar from "./components/navbar/Navbar";
import Card from "./components/Card";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import UploadForm from "./components/UploadForm";
import { useContext, useMemo, useEffect } from "react";
import { Context } from "./context/FirestoreContext";
import { useAuthContext } from "./context/AuthContext";
import Searchbar from "./components/Searchbar";

function App() {
  const { dispatch, state, read } = useContext(Context);
  const { authenticate } = useAuthContext();
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  const count = useMemo(() => {
    return `You have ${state.items.length} image${
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
      <Searchbar />
      <div className="flex flex-col items-center mt-5 px-2">
        <button
          className="px-4 py-2 bg-[#00df9a] text-black"
          onClick={() => toggle(!state.isCollapsed)}
        >
          {state.isCollapsed ? "Close" : "+ Add"}
        </button>
        <UploadForm />
        <h1 className="text-[40px] mb-4 mt-4">Gallery Images</h1>
        <span className="mb-5">{count}</span>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {state.items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <SliderComponent />
    </>
  );
}

export default App;
