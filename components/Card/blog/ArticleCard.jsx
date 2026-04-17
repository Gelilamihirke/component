import React from "react";

const ArticleCard = ({
  imageUrl,
  categoryLinks = [],
  title,
  authorImg,
  authorName,
  fullImage = false,
}) => {
  return (
    <div>
      {fullImage ? (
        // Full-image layout
        <article className="w-full h-full rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </article>
      ) : (
        // Regular card layout
        <article className="group bg-white rounded-md shadow-sm border  border-transparent hover:border-gray-200 transition-colors duration-200 w-full max-w-sm mx-auto">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-t-md w-full object-cover h-[180px]"
            loading="lazy"
          />
          <div className="p-3 group-hover:bg-gray-300 group-hover:text-gray-600 transition-colors duration-200">
         <div className="text-sm mb-1 text-gray-700 mt-2 px-3 sm:px-4 md:px-5 group-hover:text-gray-600">
  {categoryLinks.map((cat, idx) => (
    <span key={idx}>
      <a href="#" className="underline group-hover:text-gray-700">
        {cat}
      </a>
      {idx < categoryLinks.length - 1 && <span>, </span>}
    </span>
  ))}
</div>

<h2 className="font-semibold text-gray-900 text-base sm:text-lg lg:text-[20px] px-3 sm:px-4 md:px-5 mt-1 sm:mt-2 leading-snug mb-3 sm:mb-4 group-hover:text-gray-700">
  {title}
</h2>

<div className="flex items-center space-x-2 text-xs px-3 sm:px-4 md:px-5 mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 md:mb-5 text-gray-600 group-hover:text-gray-700">
  <img
    src={authorImg}
    alt={`Photo of ${authorName}`}
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
    loading="lazy"
  />
  <span>By {authorName}</span>
</div>
          </div>
        </article>
      )}
    </div>
  );
};

export default ArticleCard;
