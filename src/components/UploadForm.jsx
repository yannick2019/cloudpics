import { FileInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useMemo } from "react";

const Preview = ({ path }) => {
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

function UploadForm({ inputs, isVisible, onChange, onSubmit }) {
  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some((input) => !input);
  }, [inputs]);

  return (
    isVisible && (
      <div className="flex flex-col md:flex-row">
        <Preview {...inputs} />
        <form
          className="mb-5 mt-5 border rounded-xl p-4 shadow-md"
          onSubmit={onSubmit}
        >
          <p className="text-3xl mb-2 text-black">Upload Stock Image</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            aria-describedby="text"
            onChange={onChange}
            className="w-[100%] p-2 mb-2 mt-2 border rounded-lg"
          />
          <FileInput
            id="file-upload"
            name="file"
            className="mb-4"
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-[#00df9a] text-black px-4 py-2 rounded-lg cursor-pointer"
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
    )
  );
}

UploadForm.propTypes = {
  isVisible: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  inputs: PropTypes.object,
};

Preview.propTypes = {
  path: PropTypes.string,
};

export default UploadForm;
