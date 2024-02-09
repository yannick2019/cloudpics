import PropTypes from "prop-types";
import { useMemo } from "react";

function Card({ title, path, createdAt }) {
  const timestamp = useMemo(() => {
    const date = `${new Date(createdAt.seconds * 1000)}`.split(" ");
    return `${date[1]} ${date[2]} ${date[3]}`;
  }, []);

  return (
    <div className=" w-[18rem] border">
      <div
        style={{
          height: "220px",
          backgroundImage: `url(${path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <h5 className="text-center">{title}</h5>
      <div className="flex flex-row items-center justify-between p-2">
        <p>{timestamp}</p>
        <i>@username</i>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  createdAt: PropTypes.string,
};

export default Card;
