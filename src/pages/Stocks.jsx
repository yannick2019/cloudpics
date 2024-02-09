import List from "../components/List";
import Navbar from "../components/navbar/Navbar";
import Searchbar from "../components/Searchbar";
import FooterComponent from "../components/FooterComponent";

function Stocks() {
  return (
    <>
      <Navbar />
      <main className="h-[100dvh]">
        <Searchbar />
        <h1 className="text-[40px] mb-4 mt-4">My Stocks</h1>
        <List items={[]} />
      </main>
      <FooterComponent />
    </>
  );
}

export default Stocks;
