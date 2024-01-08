import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import '../../Styles/submitbtn.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

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
          title: `Bingo!`,
          text: ` ${name} added to the cart.`,
          // imageUrl: `${img}`,
          imageWidth: 400,
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
        <div className="mt-32 mb-[-20]">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Add Contacts</h1>
          </div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleAddContact} className="card-body">
                  <div className="flex flex-col md:flex-col lg:flex-row gap-5 mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Name</span>
                      </label>
                      <input
                        type="name"
                        placeholder="Your Name"
                        className="input input-bordered"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-col lg:flex-row gap-5 mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">
                          Phone Number
                        </span>
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="BD"
                        className="input input-bordered"
                        value={value}
                        name="number"
                        onChange={setValue}
                      />
                      {/* <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    international
                    defaultCountry="BD"
                    type="number"
                    className="input input-bordered"
                    required
                    name="number"
                  /> */}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Address</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered"
                        required
                        name="address"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">
                        Profile Picture
                      </span>
                    </label>
                    <input
                      type="url"
                      placeholder="Your Profile Picture URL"
                      className="input input-bordered"
                      required
                      name="picture"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="buttu">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AddContacts;
