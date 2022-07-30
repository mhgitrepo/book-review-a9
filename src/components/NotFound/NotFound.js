import './NotFound.css';
import NotFoundImage from '../../image/404.svg';

const NotFound = () => {
    
  return (
      <div>
          <img className='w-8/12 mx-auto' src={NotFoundImage} alt="404-not-found" />
      </div>
  );
};

export default NotFound;