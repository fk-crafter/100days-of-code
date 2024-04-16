import React from 'react';

const Filters = () => {
    const categories = ["Joggers", "T-Shirts", "Pants", "Jackets", "Socks"];
  
    return (
      <aside className="filters">
        <h2>Filters</h2>
        {categories.map(category => (
          <label key={category}>
            <input type="checkbox" />
            {category}
          </label>
        ))}
      </aside>
    );
  };
  
  export default Filters;