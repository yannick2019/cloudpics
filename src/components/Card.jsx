import PropTypes from "prop-types";

function Card({ title, path }) {
  return (
    <div className=" w-[100%]">
      <img src={path} alt={title} width={380} height={380} />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default Card;
