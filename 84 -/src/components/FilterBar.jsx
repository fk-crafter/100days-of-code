import React from 'react';

const FilterBar = ({ selectedConsoles, setSelectedConsoles }) => {
  const consoles = ["PS4" ,"PS5", "Xbox One", "GameCube", "Wii", "Nintendo Switch"];

  const handleCheckboxChange = (console) => {
    if (selectedConsoles.includes(console)) {
      setSelectedConsoles(selectedConsoles.filter((c) => c !== console));
    } else {
      setSelectedConsoles([...selectedConsoles, console]);
    }
  };

  return (
    <div className="flex flex-col items-start mb-4">
      <h3 className="text-lg font-semibold mb-2">Filter by Console</h3>
      {consoles.map((console) => (
        <label key={console} className="flex items-center">
          <input
            type="checkbox"
            checked={selectedConsoles.includes(console)}
            onChange={() => handleCheckboxChange(console)}
            className="mr-2"
          />
          {console}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
