import '../../Styles/menubtn.css';
import '../../Styles/favoritebtn.css';
import '../../Styles/card.css';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const AllContactCard = ({ contacts, handelModal }) => {
  const { name, email, picture, number, address, _id } = contacts || {};
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(_id));
  }, [_id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      favorites = favorites.filter(favId => favId !== _id);
    } else {
      favorites.push(_id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="">
        <div className="cardush">
          <img src={picture} alt="" />
          <div className="cardush__content">
            <p className="cardush__title">{name}</p>
            <p className="cardush__description font-bold">Email</p>
            <p className="cardush__description">{email}</p>
            <p className="cardush__description font-bold">Number</p>
            <p className="cardush__description">{number}</p>
            <p className="cardush__description font-bold">Address</p>
            <p className="cardush__description">{address}</p>

            <div className="mb-2 flex mx-auto cardush__description">
              <button
                className="buutn"
                onClick={() => handelModal(contacts?._id)}
              >
                Menu
              </button>

              <button onClick={toggleFavorite} className="cardush__description">
                <div className="tooltip-container">
                  <span
                    //       className={`  isFavorite ? "bg-yellow-400" : "bg-sky-500"
                    //    tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white bg-sky-500`}
                    className={`${
                      isFavorite ? 'bg-red-600' : 'bg-sky-600'
                    }  tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white rounded-full p-2`}
                  >
                    <p className="text-base">
                      {isFavorite ? 'Remove ' : 'Add to Favorites'}
                    </p>
                  </span>
                  <span className="text">
                    <div className="">
                      <div
                        className={`${
                          isFavorite ? 'bg-red-600' : 'bg-sky-600'
                        } icon border-2 border-white `}
                      >
                        <button className="buutn">Add To Favorite</button>
                      </div>
                    </div>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="flex items-center justify-between w-full gap-5">
    //   <div className="flex w-full mx-auto justify-evenly">
    //     <div>
    //       <img
    //         className="rounded-lg mr-2 w-[400px] h-[300px]"
    //         src={picture}
    //         alt=""
    //       />
    //     </div>
    //     <div className="w-full gap-2 mx-auto space-y-2">
    //       <div className="w-full pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
    //         <h1 className="text-xl">
    //           <span className="text-sm text-black">NAME</span> <br />
    //           {name}
    //         </h1>
    //       </div>
    //       <div className="flex items-center justify-between w-full pt-2 pb-2 pl-5 pr-5 mx-auto rounded-lg shadow-xl bg-slate-300">
    //         <h1 className="text-xl">
    //           <span className="text-sm">ADDRESS</span> <br />
    //           {address}
    //         </h1>

    // <button
    //   className="buutn"
    //   onClick={() => handelModal(contacts?._id)}
    // >
    //   Menu
    // </button>
    //       </div>
    //       <div className="w-full flex mx-auto justify-between pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
    //         <h1 className="text-sm">
    //           {' '}
    //           <span className="text-sm">EMAIL</span> <br />
    //           {email}
    //         </h1>

    //         {/* <button className="buutn">Add To Favorite</button> */}

    //         {/* Favorite button */}

    //         {/* <div className="heart-container" title="Like">
    //           <input
    //             type="checkbox"
    //             className="checkbox inpuu"
    //             id="Give-It-An-Id"
    //           />
    //           <div className="svg-container">
    //             <svg
    //               viewBox="0 0 24 24"
    //               className="svg-outline"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
    //             </svg>
    //             <svg
    //               viewBox="0 0 24 24"
    //               className="svg-filled"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
    //             </svg>
    //             <svg
    //               className="svg-celebrate"
    //               width="100"
    //               height="100"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <polygon points="10,10 20,20"></polygon>
    //               <polygon points="10,50 20,50"></polygon>
    //               <polygon points="20,80 30,70"></polygon>
    //               <polygon points="90,10 80,20"></polygon>
    //               <polygon points="90,50 80,50"></polygon>
    //               <polygon points="80,80 70,70"></polygon>
    //             </svg>
    //           </div>
    //         </div> */}

    // <button onClick={toggleFavorite} className="">
    //   <div className="tooltip-container">
    //     <span
    //       //       className={`  isFavorite ? "bg-yellow-400" : "bg-sky-500"
    //       //    tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white bg-sky-500`}
    //       className={`${
    //         isFavorite ? 'bg-red-600' : 'bg-sky-600'
    //       }  tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white rounded-full p-2`}
    //     >
    //       <p className="text-base">
    //         {isFavorite ? 'Remove ' : 'Add to Favorites'}
    //       </p>
    //     </span>
    //     <span className="text">
    //       <div className="">
    //         <div
    //           className={`${
    //             isFavorite ? 'bg-red-600' : 'bg-sky-600'
    //           } icon border-2 border-white `}
    //         >
    //           <button className="buutn">Add To Favorite</button>
    //         </div>
    //       </div>
    //     </span>
    //   </div>
    // </button>

    //         {/* Favorite button */}
    //       </div>
    //       <div className="w-full pt-2 pb-2 pl-5 pr-5 rounded-lg shadow-xl bg-slate-300">
    //         <h1 className="text-sm">
    //           {' '}
    //           <span className="text-sm">NUMBER</span> <br />
    //           {number}
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllContactCard;
