import { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import '../../Styles/input.css';

const ModalData = ({ isOpen, setIsOpen, contactId }) => {
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/addContact/${contactId}`
        );
        setSingleContact(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (contactId) {
      fetchData();
    }
  }, [contactId]);
  console.log(contactId);

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <div className="flex justify-center gap-5 mt-5 items-center mx-auto">
            <div className="inp-container">
              <h1 className="inp" name="text" type="text">
                {singleContact?.name}
              </h1>
              <label className="label" for="input">
                Name
              </label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="inp-container">
              <h1 className="inp" name="text" type="text">
                {singleContact?.email}
              </h1>
              <label className="label" for="input">
                Email
              </label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="inp-container">
            <h1
              className="inp flex justify-center mt-10"
              name="text"
              type="text"
            >
              {singleContact?.address}
            </h1>
            <label className="label" for="input">
              Email
            </label>
            <div className="topline"></div>
            <div className="underline"></div>
          </div>
          <div className="inp-container">
            <h1
              className="inp flex justify-center mt-10"
              name="text"
              type="text"
            >
              {singleContact?.number}
            </h1>
            <label className="label" for="input">
              Email
            </label>
            <div className="topline"></div>
            <div className="underline"></div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalData;
