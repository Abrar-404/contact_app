import { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import '../../Styles/input.css';
import '../../Styles/updatebtn.css';
import '../../Styles/deletebtn.css';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
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

  // update function

  //   const handleUpdate = e => {
  //   e.preventDefault();

  //   const allData = {
  //     name: singleContact?.name,
  //     email: singleContact?.email,
  //     number: singleContact?.number,
  //     address: singleContact?.address,
  //   };

  //   console.log('Request Payload:', allData);

  //   fetch(`http://localhost:5000/addContact/${contactId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(allData),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Product Updated Successfully',
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error updating contact:', error);
  //     });
  // };

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const Email = form.Email.value;
    const number = form.number.value;
    const address = form.address.value;

    console.log(name, Email, number, address);

    const allData = {
      name,
      Email,
      number,
      address,
    };

    console.log('Request Payload:', allData);

    axios
      .patch(`http://localhost:5000/addContact/${contactId}`, allData)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            // text: `${user?.name} is an admin now`,
            icon: 'success',
          });
        }
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
              <h1 className="inp" name="text" type="text">
                {singleContact?.name}
              </h1>
              <label className="label" htmlFor="input">
                Name
              </label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="inp-container">
              <h1 className="inp" name="text" type="text">
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
              name="text"
              type="text"
            >
              {singleContact?.address}
            </h1>
            <label className="label" htmlFor="input">
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
            <label className="label" htmlFor="input">
              Email
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
                    name="Email"
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
                    type="number"
                    placeholder="Your Phone Here"
                    name="number"
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </li>

                <button className="bitti mt-5">Update</button>
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
