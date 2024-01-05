import '../../Styles/menubtn.css';

// eslint-disable-next-line react/prop-types
const AllContactCard = ({ contacts, handelModal }) => {
  const { name, email, picture, number, address } = contacts || {};

  return (
    <div className="flex items-center justify-between w-full gap-5">
      <div className="flex w-full mx-auto justify-evenly">
        <div>
          <img
            className="rounded-lg mr-2 w-[400px] h-[300px]"
            src={picture}
            alt=""
          />
        </div>
        <div className="w-full gap-2 mx-auto space-y-2">
          <div className="w-full pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
            <h1 className="text-xl">
              <span className="text-sm text-black">NAME</span> <br />
              {name}
            </h1>
          </div>
          <div className="flex items-center justify-between w-full pt-2 pb-2 pl-5 pr-5 mx-auto rounded-lg shadow-xl bg-slate-300">
            <h1 className="text-xl">
              <span className="text-sm">ADDRESS</span> <br />
              {address}
            </h1>

            <button
              className="buutn"
              onClick={() => handelModal(contacts?._id)}
            >
              Menu
            </button>
          </div>
          <div className="w-full flex mx-auto justify-between pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
            <h1 className="text-sm">
              {' '}
              <span className="text-sm">EMAIL</span> <br />
              {email}
            </h1>

            <button className="buutn">Add To Favorite</button>
          </div>
          <div className="w-full pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
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
