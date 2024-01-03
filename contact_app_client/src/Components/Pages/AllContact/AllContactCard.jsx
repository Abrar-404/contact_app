import '../../Styles/menubtn.css';

// eslint-disable-next-line react/prop-types
const AllContactCard = ({ contacts }) => {
  const { name, email, picture, number, address } = contacts || {};

  return (
    <div className="w-full flex gap-5 justify-between items-center">
      <div className="flex justify-evenly mx-auto w-full">
        <div>
          <img
            className="rounded-lg mr-2 w-[400px] h-[300px]"
            src={picture}
            alt=""
          />
        </div>
        <div className="gap-2 space-y-2 mx-auto w-full">
          <div className="bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-xl">
              <span className="text-sm">NAME</span> <br />
              {name}
            </h1>
          </div>
          <div className="flex mx-auto justify-between items-center bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-xl">
              <span className="text-sm">ADDRESS</span> <br />
              {address}
            </h1>
            {/* <button className="buutn">Menu</button> */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="buutn"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              Menu
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className=" bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-sm">
              {' '}
              <span className="text-sm">EMAIL</span> <br />
              {email}
            </h1>
          </div>
          <div className=" bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-sm">
              {' '}
              <span className="text-sm">NUMBER</span> <br />
              {number}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContactCard;
