import PropTypes from "prop-types";
import Card from "./Card";

const List = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.createdAt} className="mb-5">
            <Card {...item} />
          </div>
        );
      })}
    </>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
