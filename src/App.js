import { useEffect } from 'react';
import { getStarWarsPeople } from './fetch';

function App() {
  useEffect(() => {
    getStarWarsPeople()
      .then((people) => {
        console.log(people.map((p) => p));
      })
      .catch(console.error);
  }, []);

  return <></>;
}

export default App;
