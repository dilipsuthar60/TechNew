import { useContext } from 'react';
import './App.css'
import { Appcontext } from './Context';
import Pagination from './Pagination';
import Search from './Search';
import Story from './Story';
import { useGlobalContext } from './Context';
import { Audio, Circles } from 'react-loader-spinner'


function App() {

  // console.log(data);
  const { isLoading} = useGlobalContext();
  if (isLoading) {
    return <>
      <div className="main_container">
        <Search />
        <Pagination />
      </div>
      <div className='loading_spinner'><Circles color='#3d3d3d' /></div>
    </>
  }
  return (
    <>
      <div className="main_container">
        <Search />
        <Pagination />
        <Story />
      </div>
    </>
  );
}

export default App;
