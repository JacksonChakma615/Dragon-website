import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

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

  return (
    <div className="card bg-base-100 shadow-md border">

      {/* Top Author Bar */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-0">
        <h2 className="text-xl font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="p-4 pt-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-64 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="px-4 pb-4">

        {/* Meta line */}
        <p className="text-sm text-gray-500 mb-2">
          {new Date(author.published_date).toDateString()} | Tag Cloud Tags:{" "}
          {tags?.slice(0, 3).join(", ")}
        </p>

        {/* Details */}
        <p className="text-gray-700">
          {details.slice(0, 200)}...
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="flex items-center justify-between">

          {/* Rating */}
          <div className="flex items-center gap-2 text-orange-400">
            <FaStar />
            <span className="font-semibold text-gray-700">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;