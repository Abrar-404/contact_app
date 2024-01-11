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
  // const [contacts, setUpdateContacts] = useState();
  const [, forceUpdate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://contactify-rho.vercel.app/addContact/${contactId}`
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

  // update function

  const handleUpdate = async e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;

    const allData = {
      name,
      email,
      number,
      address,
    };

    try {
      const response = await axios.patch(
        `https://contactify-rho.vercel.app/addContact/${contactId}`,
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
          color: 'white',
          background: 'black',
          icon: 'success',
        });
        forceUpdate({});
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Delete function

  const handleDelete = contactId => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      background: 'black',
      color: 'white',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        console.log('Deleted Successfully');

        fetch(`https://contactify-rho.vercel.app/addContact/${contactId}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                color: 'white',
                text: 'Your file has been deleted.',
                icon: 'success',
                background: 'black',
              });

              // eslint-disable-next-line react/prop-types
              setContacts(prevContacts =>
                prevContacts.filter(contact => contact._id !== contactId)
              );
              setIsOpen(false);
            }
          });
      }
    });
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
            <button onClick={() => handleDelete(contactId)} className="booto">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalData;
