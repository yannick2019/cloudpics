import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className=" w-[100%]">
      <img src={props.src} alt={props.src} width={380} height={380} />
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
};

export default Card;
