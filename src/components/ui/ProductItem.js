import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ProductItem({ product }) {
  return (
    <div className="bg-white flex  flex-col relative items-center text-center text-sm font-semibold p-3">
      <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 bg-white rounded-lg text-brand-color shadow-md ">
        <FiPlus />
      </button>
      <img src={product.image} alt={product.title} />
      <div className=" text-brand-color ">₺{product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}
