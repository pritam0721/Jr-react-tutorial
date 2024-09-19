import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../axioS/custom';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products');
      // console.log(resp1.data);
      const resp2 = await axios(randomUserUrl);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
