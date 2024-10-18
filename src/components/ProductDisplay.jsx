import React, { useState } from 'react';
import mainshoes1 from '../assets/img/main_shoes_1.png';
import carouselshoe1 from '../assets/img/carousel_shoes_1.png';
import carouselshoe2 from '../assets/img/carousel_shoes_2.png';
import carouselshoe3 from '../assets/img/carousel_shoes_3.png';
import carouselshoe4 from '../assets/img/carousel_shoes_4.png';
import carouselshoe5 from '../assets/img/carousel_shoes_5.png';
import NavComponent from './NavComponent';

const ProductDisplay = () => {
  const [selectedColor, setSelectedColor] = useState('pink');
  const [selectedSize, setSelectedSize] = useState(6);

  return (
    <>
    <NavComponent />
    
    <div className="flex justify-between items-center h-screen bg-gray-900 text-white p-10">
      
      <div className="w-2/3">
        <h1 className="text-5xl font-bold mb-4">
          Nike Impact <span className="text-pink-500">4</span>
        </h1>
        <p className="text-3xl font-semibold mb-6">$250.90</p>
        
        <div className="mb-6">
          <p className="text-xl mb-2">Colors</p>
          <div className="flex space-x-3">
            <button onClick={() => setSelectedColor('pink')} className={`w-8 h-8 rounded-full bg-pink-500 ${selectedColor === 'pink' ? 'ring-2 ring-white' : ''}`}></button>
            <button onClick={() => setSelectedColor('green')} className={`w-8 h-8 rounded-full bg-green-500 ${selectedColor === 'green' ? 'ring-2 ring-white' : ''}`}></button>
            <button onClick={() => setSelectedColor('black')} className={`w-8 h-8 rounded-full bg-black ${selectedColor === 'black' ? 'ring-2 ring-white' : ''}`}></button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xl mb-2">Size</p>
          <div className="flex space-x-4">
            {[6, 7, 8, 9].map((size) => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full border ${selectedSize === size ? 'bg-pink-500 border-pink-500 text-white' : 'border-gray-400 text-gray-400'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg mt-4">Buy</button>
      </div>
 
      <div className="w-1/3 relative"> 
        <div className="relative">
          <img src={mainshoes1} alt="Nike Impact 4" className="w-full h-auto" />
        </div>

         
        <div className="absolute bottom-0 right-0 flex space-x-2"> 
          <img src={carouselshoe1} alt="shoe1" className="w-16 h-auto" />
          <img src={carouselshoe2} alt="shoe2" className="w-16 h-auto" />
          <img src={carouselshoe3} alt="shoe3" className="w-16 h-auto" />
          <img src={carouselshoe4} alt="shoe4" className="w-16 h-auto" />
          <img src={carouselshoe5} alt="shoe5" className="w-16 h-auto" />

        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDisplay;
