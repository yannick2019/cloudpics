import Navbar from "./components/navbar/Navbar";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";
import "./App.css";
import SliderComponent from "./components/SliderComponent";

function App() {
  const photos = [
    "https://picsum.photos/id/237/300/300",
    "https://picsum.photos/seed/picsum/300/300",
    "https://picsum.photos/300/300?grayscale",
    "https://picsum.photos/300/300",
    "https://picsum.photos/id/239/300/300",
    "https://picsum.photos/id/240/300/300",
  ];

  return (
    <>
      <Navbar />
      <div className="h-20 border flex flex-row items-center">
        <SearchForm />
      </div>
      <div className="flex flex-col items-center mt-5 px-2">
        <h1 className="text-[40px] mb-5">Gallery Images</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {photos.map((photo, index) => (
            <Card key={index} src={photo} />
          ))}
        </div>
      </div>
      <SliderComponent />
    </>
  );
}

export default App;
