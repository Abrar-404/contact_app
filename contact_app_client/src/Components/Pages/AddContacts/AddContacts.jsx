import '../../Styles/submitbtn.css';

const AddContacts = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Add Contacts</h1>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full mx-auto shadow-2xl bg-base-100">
            <form className="card-body">
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
                    <span className="label-text font-bold">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your Number"
                    className="input input-bordered"
                    required
                    name="number"
                  />
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
                  <span className="label-text font-bold">Profile Picture</span>
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
  );
};

export default AddContacts;
