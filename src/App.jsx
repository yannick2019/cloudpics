import Navbar from "./components/navbar/Navbar";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import UploadForm from "./components/UploadForm";
import { useMemo, useReducer } from "react";

const photos = [];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: "", file: null, path: null },
  isCollapsed: false,
};

const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    return {
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [state.inputs, ...state.items],
        count: state.items.length + 1,
        inputs: { title: "", file: null, path: null },
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value),
      };
    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });
  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(!state.isCollapsed);
  };

  const count = useMemo(() => {
    return `You have ${state.items.length} image${
      state.items.length > 1 ? "s" : ""
    }`;
  }, [state.items]);

  return (
    <>
      <Navbar />
      <div className="h-20 border flex flex-row items-center">
        <SearchForm />
      </div>
      <div className="flex flex-col items-center mt-5 px-2">
        <button
          className="px-4 py-2 bg-[#00df9a] text-black"
          onClick={() => toggle(!state.isCollapsed)}
        >
          {state.isCollapsed ? "Close" : "+ Add"}
        </button>
        <UploadForm
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
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
