import { useLocation, useNavigate } from "react-router-dom";
import { useFirestoreContext } from "../context/FirestoreContext";
import { Context } from "../context/FirestoreContext";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/navbar/Navbar";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useContext } from "react";

function Single() {
  const { read } = useContext(Context);
  const navigate = useNavigate();
  const { state } = useFirestoreContext();
  const { state: routerState } = useLocation();
  const item = state.items.find((item) => item.id === routerState.id);

  useEffect(() => {
    read();
  }, []);
  return (
    <>
      <Navbar />
      <main className="h-[100dvh]">
        <Searchbar />
        <button
          className=""
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <div className="flex items-center">
          <Card {...item} />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default Single;
