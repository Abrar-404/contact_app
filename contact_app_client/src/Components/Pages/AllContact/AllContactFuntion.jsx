import { useEffect, useState } from 'react';
import AllContactCard from './AllContactCard';
import ModalData from './ModalData';

const AllContactFuntion = () => {
  const [getContacts, setGetContacts] = useState([]);
  const [contactId, setContactId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handelModal = id => {
    setIsOpen(!isOpen);
    setContactId(id);
  };

  useEffect(() => {
    fetch('http://localhost:5000/addContact')
      .then(res => res.json())
      .then(data => setGetContacts(data));
  }, []);

  return (
    <div>
      <ModalData
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
        setContacts={setGetContacts}
      />

      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-4 mt-32">
        {getContacts?.map(contacts => (
          <AllContactCard
            key={contacts._id}
            contacts={contacts}
            handelModal={handelModal}
          ></AllContactCard>
        ))}
      </div>
    </div>
  );
};

export default AllContactFuntion;
