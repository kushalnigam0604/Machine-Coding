import { Link } from 'react-router-dom';
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <h2>Select the Problem</h2>
      <div className='problemTabBody'>
        <Link to='/tab'className="problemTabs">Tab And Modal</Link>
        <Link to='/'className="problemTabs">Infinite Scroll</Link>
      </div>
    </>
  );
};
export default HomePage;
