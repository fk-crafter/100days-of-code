import React from 'react';

const ProductGrid = () => {

    const productCount = 24;
  
    return (
      <div className="grid">
        {Array.from({ length: productCount }).map((_, index) => (
          <div key={index} className="grid-item">
            <div className="skeleton"></div>
            <div style={{width: '40px'}} className="skeleton"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductGrid;