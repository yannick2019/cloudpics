import "./App.css";
import Navbar from "./components/Navbar";
import farmerImg from "../src/assets/farmer.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-5 px-2">
        <h1 className="text-[50px] mb-5">Gallery</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {Array.apply(null, { length: 9 }).map((index) => {
            return (
              <div key={index} className=" w-[100%]">
                <img src={farmerImg} alt="a farmer" width={380} height={380} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
