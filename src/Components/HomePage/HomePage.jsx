import { Link } from 'react-router-dom';
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <h2>Select the Problem</h2>
      <div className='problemTabBody'>
        <Link to='/tabandmodal'className="problemTabs">Tab And Modal</Link>
        <Link to='/infinitescroll'className="problemTabs">Infinite Scroll</Link>
        <Link to='/todo'className="problemTabs">Todo App</Link>
      </div>
    </>
  );
};
export default HomePage;
