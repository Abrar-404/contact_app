import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Transition from '../../Transition/Transition';

// eslint-disable-next-line react-refresh/only-export-components
const AddContact = () => {
  const axiosSecure = useAxiosSecure();

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
    <div>
      <div className="hero min-h-screen">
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
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(AddContact);
