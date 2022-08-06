import React from "react";

function Card({ image, title, imageFull = false, children, className }) {
  return (
    <div
      className={
        "group w-full h-full bg-white shadow-xl card dark:bg-black " +
        className +
        " " +
        (imageFull
          ? "image-full hover:before:opacity-60 before:transition-opacity duration-1000"
          : "")
      }
    >
      <figure
        className={
          "relative sm:pt-[50%] overflow-hidden " + (imageFull ? "sm:!pt-[65%] pt-[85%]" : "pt-[40%]")
        }
      >
        <img
          className="absolute top-0 right-0 object-cover w-full h-full transition-transform duration-1000 group-hover:scale-125"
          src={image}
          alt={typeof title === "string" ? title : "Image"}
        />
      </figure>
      <div
        className={
          "card-body " + (imageFull ? "items-center justify-center" : "")
        }
      >
        <div className={"card-title truncate-2 h-14" + (imageFull ? "text-3xl" : "")}>
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Card;
