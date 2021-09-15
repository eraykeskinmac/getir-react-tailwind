import React from 'react';

export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center gap-y-2 group text-center p-4 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-md border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap group-hover:text-brand-color tracking-tight">
        {title}
      </span>
    </a>
  );
}
