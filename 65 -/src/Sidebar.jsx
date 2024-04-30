import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryHeights, setCategoryHeights] = useState({});
  const sidebarRef = useRef(null);
  const categoryRefs = {
    Category1: useRef(null),
    Category2: useRef(null),
    Category3: useRef(null),
    Category4: useRef(null),
    Category5: useRef(null),
  };

  useEffect(() => {
    const updatedHeights = {};
    for (const category in categoryRefs) {
      updatedHeights[category] = selectedCategory === category ? categoryRefs[category].current.scrollHeight : 0;
    }
    setCategoryHeights(updatedHeights);

    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCategory]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          transitionDuration: '0.5s',
        }}
      >
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-bold">Sidebar</h1>
          </div>
          <div>
            {isOpen && (
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <ul className="mt-4">
            <li className="mb-4">
              <a
                className={`text-gray-300 hover:text-white cursor-pointer`}
                onClick={() => toggleCategory('Category1')}
              >
                Category 1
              </a>
              <ul
                className={`ml-4 sub-categories ${
                  selectedCategory === 'Category1' ? 'open' : 'closed'
                }`}
                style={{
                  maxHeight: `${categoryHeights['Category1']}px`,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
                ref={categoryRefs['Category1']}
              >
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 1.1
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 1.2
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 1.3
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <a
                className={`text-gray-300 hover:text-white cursor-pointer`}
                onClick={() => toggleCategory('Category2')}
              >
                Category 2
              </a>
              <ul
                className={`ml-4 sub-categories ${
                  selectedCategory === 'Category2' ? 'open' : 'closed'
                }`}
                style={{
                  maxHeight: `${categoryHeights['Category2']}px`,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
                ref={categoryRefs['Category2']}
              >
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 2.1
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 2.2
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 2.3
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <a
                className={`text-gray-300 hover:text-white cursor-pointer`}
                onClick={() => toggleCategory('Category3')}
              >
                Category 3
              </a>
              <ul
                className={`ml-4 sub-categories ${
                  selectedCategory === 'Category3' ? 'open' : 'closed'
                }`}
                style={{
                  maxHeight: `${categoryHeights['Category3']}px`,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
                ref={categoryRefs['Category3']}
              >
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 3.1
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 3.2
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 3.3
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <a
                className={`text-gray-300 hover:text-white cursor-pointer`}
                onClick={() => toggleCategory('Category4')}
              >
                Category 4
              </a>
              <ul
                className={`ml-4 sub-categories ${
                  selectedCategory === 'Category4' ? 'open' : 'closed'
                }`}
                style={{
                  maxHeight: `${categoryHeights['Category4']}px`,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
                ref={categoryRefs['Category4']}
              >
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 4.1
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 4.2
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 4.3
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <a
                className={`text-gray-300 hover:text-white cursor-pointer`}
                onClick={() => toggleCategory('Category5')}
              >
                Category 5
              </a>
              <ul
                className={`ml-4 sub-categories ${
                  selectedCategory === 'Category5' ? 'open' : 'closed'
                }`}
                style={{
                  maxHeight: `${categoryHeights['Category5']}px`,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
                ref={categoryRefs['Category5']}
              >
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 5.1
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 5.2
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white" href="#!">
                    Subcategory 5.3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {!isOpen && (
        <button
          className="fixed top-5 left-5 bg-gray-900 text-white p-2 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars}/>
        </button>
      )}

      <div className={`flex-1 overflow-auto ml-${isOpen ? '64' : '0'}`}>
        {/* Main content */}
      </div>
    </div>
  );
};

export default Sidebar;
