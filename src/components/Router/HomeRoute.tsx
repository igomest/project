import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

declare let abp: any;

const HomeRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  // You can also return some JSX for the home page
  return <h1>Welcome to the Home Page</h1>;
};

export default HomeRoute;
