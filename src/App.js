import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              Sidebar{' '}
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar 0000 </div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              <Route path='/' element='home' />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
