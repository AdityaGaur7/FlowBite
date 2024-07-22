import React from "react";

const MasonryLayout = () => {
  const images = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;