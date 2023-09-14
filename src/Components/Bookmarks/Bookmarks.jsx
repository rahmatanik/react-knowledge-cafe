import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 py-4 mt-4 rounded ">
      <div>
        <h3 className="text-center">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="3xl  text-center">Bookmarks: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
