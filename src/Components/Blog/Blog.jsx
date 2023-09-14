import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ id, blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title`}
      />

      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>

          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl my-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="py-2 text-purple-600 underline font-bold"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default Blog;
