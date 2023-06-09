import React from 'react';

const Profilitem = ({ nama, status, ketalamat, alamat, kettelepon, telepon, kethobi, hobi, ketmakanankesukaan, makanankesukaan, ketminumankesukaan, minumankesukaan, caption, imageSrc }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={imageSrc}
        alt={nama}
        className="h-60 w-65 rounded-full mr-4"
      />
      <div className='ml-11'>
        <h2 className="text-xl font-bold">{nama}</h2>
        <p className="text-gray-600 mb-3">{status}</p>
        <p className="text-gray-800 mb-4">{caption}</p>
        <p className="text-gray-800">{ketalamat}</p>
        <p className="text-gray-800 mb-4">{alamat}</p>
        <p className="text-gray-800">{kettelepon}</p>
        <p className="text-gray-800 mb-4">{telepon}</p>
        <p className="text-gray-800">{kethobi}</p>
        <p className="text-gray-800 mb-4">{hobi}</p>
        <p className="text-gray-800">{ketmakanankesukaan}</p>
        <p className="text-gray-800 mb-4">{makanankesukaan}</p>
        <p className="text-gray-800">{ketminumankesukaan}</p>
        <p className="text-gray-800 mb-4">{minumankesukaan}</p>
      </div>
    </div>
  );
};

export default Profilitem;