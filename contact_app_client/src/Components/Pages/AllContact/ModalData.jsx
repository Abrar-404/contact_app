import { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import '../../Styles/input.css';
import '../../Styles/updatebtn.css';
import '../../Styles/deletebtn.css';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const ModalData = ({ isOpen, setIsOpen, contactId, setContacts }) => {
  const [singleContact, setSingleContact] = useState(null);
  const [, forceUpdate] = useState();

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

  // update function

  // const handleUpdate = e => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const number = form.number.value;
  //   const address = form.address.value;

  //   console.log(name, email, number, address);

  //   const allData = {
  //     name,
  //     email,
  //     number,
  //     address,
  //   };

  //   console.log('Request Payload:', allData);

  //   axios
  //     .patch(`http://localhost:5000/addContact/${contactId}`, allData)
  //     .then(res => {
  //       console.log(res.data);
  //       if (res.data.modifiedCount > 0) {
  //         Swal.fire({
  //           title: 'Success!',
  //           // text: `${user?.name} is an admin now`,
  //           icon: 'success',
  //         });
  //       }
  //     });
  // };

  const handleUpdate = async e => {
    e.preventDefault();
    console.log('Handle Update function called');
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;

    console.log(name, email, number, address);

    const allData = {
      name,
      email,
      number,
      address,
    };

    console.log('Request Payload:', allData);

    try {
      const response = await axios.patch(
        `http://localhost:5000/addContact/${contactId}`,
        allData
      );

      if (response.data.modifiedCount > 0) {
        setContacts(prevContacts =>
          prevContacts.map(contact =>
            contact._id === contactId ? { ...contact, ...allData } : contact
          )
        );
        setSingleContact(prevContact => ({
          ...prevContact,
          ...allData,
        }));
        Swal.fire({
          title: 'Success!',
          icon: 'success',
        });
        forceUpdate({});
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <Modal
        key={contactId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
      >
        <div className="flex justify-center">
          <img
            src={singleContact?.picture}
            className="rounded-full w-[80px] h-[80px]"
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-center gap-5 mt-5 items-center mx-auto">
            <div className="inp-container">
              <h1 className="inp" name="name" type="text">
                {singleContact?.name}
              </h1>
              <label className="label" htmlFor="input">
                Name
              </label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="inp-container">
              <h1 className="inp" name="email" type="text">
                {singleContact?.email}
              </h1>
              <label className="label" htmlFor="input">
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
              name="address"
              type="text"
            >
              {singleContact?.address}
            </h1>
            <label className="label" htmlFor="input">
              Address
            </label>
            <div className="topline"></div>
            <div className="underline"></div>
          </div>
          <div className="inp-container">
            <h1
              className="inp flex justify-center mt-10"
              name="number"
              type="text"
            >
              {singleContact?.number}
            </h1>
            <label className="label" htmlFor="input">
              Number
            </label>
            <div className="topline"></div>
            <div className="underline"></div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mx-auto items-center mt-10">
          <div className="dropdown dropdown-top w-full">
            <button tabIndex={0} role="bitti" className="bitti m-1">
              Edit
            </button>

            <form onSubmit={handleUpdate}>
              <ul
                tabIndex={0}
                className="dropdown-content mx-auto z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
              >
                <li>
                  <label htmlFor="input" className="font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name Here"
                    name="name"
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </li>
                <li>
                  <label htmlFor="input" className="font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email Here"
                    name="email"
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </li>
                <li>
                  <label htmlFor="input" className="font-bold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address Here"
                    name="address"
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </li>
                <li>
                  <label htmlFor="input" className="font-bold">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone Here"
                    name="number"
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </li>
                <button className="bitti mt-2">Update</button>
              </ul>
            </form>
          </div>

          <div>
            <button className="booto">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalData;
