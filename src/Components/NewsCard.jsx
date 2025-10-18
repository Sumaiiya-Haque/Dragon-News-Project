import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl ">
      {/* Author Info (left) + Icons (right) */}
      <div className="flex bg-base-200 items-center justify-between gap-3 px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Right-side icons (bookmark + share) */}
        <div className="flex items-center gap-3 text-gray-500">
          <button
            aria-label="bookmark"
            className="p-2 hover:text-primary hover:bg-base-200 rounded-full"
          >
            <FaRegBookmark />
          </button>
          <button
            aria-label="share"
            className="p-2 hover:text-primary hover:bg-base-200 rounded-full"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="card-body pt-2">
        <h2 className="card-title text-lg font-bold hover:text-primary cursor-pointer">
          {title}
        </h2>

        {/* Image */}
        <figure className="mt-2">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full h-52 object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 mt-3">
          {details.length > 180 ? `${details.slice(0, 180)}...` : details}
          <span className="text-primary font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline mr-2 mb-2 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 border-t pt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-warning" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-700 font-semibold ml-1">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye className="text-gray-500" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;


