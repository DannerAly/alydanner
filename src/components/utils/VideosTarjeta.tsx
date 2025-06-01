import React from "react";

export interface GalleryItem {
  imgUrl: string;
  name: string;
  videoLink: string;
}

interface RollingGalleryProps {
  items: GalleryItem[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-60 bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
        >
          <img
            src={item.imgUrl}
            alt={item.name}
            className="w-full h-36 object-cover"
          />
          <div className="p-4">
            <h3 className="text-white text-lg font-semibold">{item.name}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RollingGallery;