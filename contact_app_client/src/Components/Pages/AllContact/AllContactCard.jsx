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
      <div className=''>
        <div className="cardush">
          <img className="w-full" src={picture} alt="" />
          <div className="cardush__content">
            <p className="cardush__title">{name}</p>
            <p className="cardush__description font-bold">Email</p>
            <p className="cardush__description">{email}</p>
            <p className="cardush__description font-bold">Number</p>
            <p className="cardush__description">{number}</p>
            <p className="cardush__description font-bold">Address</p>
            <p className="cardush__description">{address}</p>

            <div className="mb-2 flex justify-evenly mx-auto cardush__description">
              <button
                className="buutn"
                onClick={() => handelModal(contacts?._id)}
              >
                Menu
              </button>

              <div
                onClick={toggleFavorite}
                className="heart-container"
                title="Like"
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  id="Give-It-An-Id"
                />
                <div className="svg-container">
                  <svg
                    viewBox="0 0 24 24"
                    className="svg-outline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="svg-filled"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                  </svg>
                  <svg
                    className="svg-celebrate"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContactCard;
