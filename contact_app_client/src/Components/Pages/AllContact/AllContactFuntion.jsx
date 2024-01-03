import { useEffect, useState } from 'react';
import AllContactCard from './AllContactCard';

const AllContactFuntion = () => {
  const [getContacts, setGetContacts] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/addContact')
      .then(res => res.json())
      .then(data => setGetContacts(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-5">
        {getContacts?.map(contacts => (
          <AllContactCard
            key={contacts._id}
            contacts={contacts}
          ></AllContactCard>
        ))}
      </div>
    </div>
  );
};

export default AllContactFuntion;
