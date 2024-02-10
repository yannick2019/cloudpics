import List from "../components/List";
import Navbar from "../components/navbar/Navbar";
import Searchbar from "../components/Searchbar";
import FooterComponent from "../components/FooterComponent";
import { Context } from "../context/FirestoreContext";
import { useFirestoreContext } from "../context/FirestoreContext";
import { useAuthContext } from "../context/AuthContext";
import { useContext, useMemo } from "react";
import UploadForm from "../components/UploadForm";

function Stockimages() {
  const { state } = useFirestoreContext();
  const { currentUser } = useAuthContext();
  const { dispatch } = useContext(Context);
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  const items = useMemo(() => {
    const filtered = state.items.filter((item) => {
      const username = currentUser?.displayName.split(" ").join("");
      return item.user === username;
    });
    return currentUser ? filtered : [];
  }, [state.items, currentUser]);

  const count = useMemo(() => {
    return `You have ${items.length} image${items.length > 1 ? "s" : ""}`;
  }, [items]);

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
          <h1 className="text-[40px] mb-4 mt-4">My Stock Images</h1>
          <span className="mb-5">{count}</span>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <List items={items} />
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default Stockimages;
