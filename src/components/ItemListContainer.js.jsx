import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="mt-5 p-4 bg-gray-100 text-center">
      <h2 className="text-xl text-blue-500 font-bold">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
