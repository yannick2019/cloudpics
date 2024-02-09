import { FileInput } from "flowbite-react";
import { useContext, useMemo } from "react";
import { Context } from "../context/FirestoreContext";
import { useAuthContext } from "../context/AuthContext";
import Firestore from "../handlers/firestore";
import Storage from "../handlers/storage";

const { writeDoc } = Firestore;
const { uploadFile, downloadFile } = Storage;

const Preview = () => {
  const { state } = useContext(Context);
  const { currentUser } = useAuthContext();
  const {
    inputs: { path },
  } = state; // destructuring current state
  return (
    path && (
      <div
        className="p-1 m-5"
        style={{
          width: "300px",
          height: "300px",
          backgroundImage: `url(${path})`,
          backgroundSize: "cover",
        }}
      ></div>
    )
  );
};

function UploadForm() {
  const { dispatch, state, read } = useContext(Context);
  const { currentUser } = useAuthContext();
  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  const username = currentUser?.displayName.split(" ").join("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    uploadFile(state.inputs)
      .then(downloadFile)
      .then((url) => {
        writeDoc(
          { ...state.inputs, path: url, user: username.toLowerCase() },
          "stocks"
        ).then(() => {
          read();
          dispatch({ type: "collapse", payload: { bool: false } });
        });
      });
  };

  const isDisabled = useMemo(() => {
    return !!Object.values(state.inputs).some((input) => !input);
  }, [state.inputs]);

  return (
    state.isCollapsed && (
      <div className="flex flex-col md:flex-row">
        <Preview />
        <form
          className="mb-5 mt-5 border rounded-xl p-4 shadow-md"
          onSubmit={handleOnSubmit}
        >
          <p className="text-3xl mb-2 text-black">Upload Stock Image</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            aria-describedby="text"
            onChange={handleOnChange}
            className="w-[100%] p-2 mb-2 mt-2 border rounded-lg"
          />
          <FileInput
            id="file-upload"
            name="file"
            className="mb-4"
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="bg-[#00df9a] text-black px-4 py-2 rounded-lg cursor-pointer"
            disabled={isDisabled}
          >
            Save and Upload
          </button>
        </form>
      </div>
    )
  );
}

export default UploadForm;
