import { useEffect, useState } from 'react';
import getData from '../../../services/getData';

const usePeopleData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await getData();
      data.sort((a, b) => a.id - b.id);

      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
};

export default usePeopleData;
