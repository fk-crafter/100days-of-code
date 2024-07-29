import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import FilterBar from './components/FilterBar';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedConsoles, setSelectedConsoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={`min-h-screen relative transition-colors ${darkMode ? 'dark' : ''}`}>
      <div className={`absolute top-0 z-[-2] h-screen w-screen transition-colors ${darkMode ? 'bg-slate-950' : 'bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(150,216,280,.5)_100%)]'}`}>
        {darkMode && (
          <div className="relative h-full w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        )}
      </div>
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded flex items-center transition-colors"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-2 transition-colors" />
        </button>
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-200 text-black rounded flex items-center transition-colors"
            onClick={toggleFilters}
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2 transition-colors" />
            <span>Filters</span>
          </button>
          <div
            className={`absolute right-0 mt-2 bg-white p-4 rounded shadow-md transition-all duration-300 ease-in-out transform ${
              showFilters ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {showFilters && (
              <FilterBar selectedConsoles={selectedConsoles} setSelectedConsoles={setSelectedConsoles} />
            )}
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 text-black rounded flex items-center transition-colors"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>
      <ImageGallery selectedConsoles={selectedConsoles} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
