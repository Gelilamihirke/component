import React from "react";

const Card = ({ link, images, title, description }) => (
  <article>
    <a className="block bg-[#E5E5E5] px-9 -ml-3 pt-10 pl-10 max-w-[700px] mx-auto" href={link}>
      <div className="flex gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="object-cover"
            width={img.width}
            height={img.height}
            style={{ width: `${img.width}px`, height: `${img.height}px` }}
          />
        ))}
      </div>
    </a>
    <h3 className="mt-6 font-bold text-left text-[24px] max-w-[700px] mx-auto">
      {title}
    </h3>
    <p className="max-w-[700px] mx-auto text-left text-base text-[18px] mt-2">{description}</p>
  </article>
);

export default Card;