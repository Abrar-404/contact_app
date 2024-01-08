import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import '../../Styles/submitbtn.css';
import 'react-phone-number-input/style.css';
import * as React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Transition from '../../Transition/Transition';
import '../../Styles/form.css';
import PhoneInput from 'react-phone-number-input';
import { Logo } from './../../Spring/Logo';

// eslint-disable-next-line react-refresh/only-export-components
const AddContacts = () => {
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const handleAddContact = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const picture = form.picture.value;

    const contactAdd = {
      name,
      email,
      number,
      address,
      picture,
    };
    axiosSecure.post('/addContact', contactAdd).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: `Bingo!`,
          background: `black`,
          text: ` ${name} added to the Contact.`,
          // imageUrl: `${img}`,
          imageWidth: 400,
          color: `white`,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
      }
    });
  };

  return (
    <>
      <motion.div
        className="container"
        style={{
          scale,
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <div className="mb-[-20]">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full mx-auto shadow-2xl bg-base-100">
                <div className="login-box">
                  <form onSubmit={handleAddContact} className="card-body">
                    <div className="flex gap-2">
                      <div className="user-box">
                        <input
                          required
                          name="name"
                          className="innpuu"
                          id=""
                          type="text"
                        />
                        <label>Name</label>
                      </div>
                      <div className="user-box">
                        <input
                          required
                          name="email"
                          type="email"
                          className="innpuu"
                        />
                        <label>Email</label>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="user-box">
                        <input
                          required
                          name="number"
                          type="text"
                          className="innpuu"
                        />
                        <label>Phone Number</label>
                      </div>
                      <div className="user-box">
                        <input
                          required
                          name="address"
                          type="text"
                          className="innpuu"
                        />
                        <label>Address</label>
                      </div>
                    </div>
                    <div className="user-box">
                      <input
                        required
                        name="picture"
                        type="url"
                        className="innpuu"
                      />
                      <label>User Photo</label>
                    </div>
                    <center>
                      <button className="a" href="#">
                        Submit
                        <span></span>
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(AddContacts);
