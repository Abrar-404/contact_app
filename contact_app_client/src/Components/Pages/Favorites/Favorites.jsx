import { useEffect, useState } from 'react';
import FavoriteCards from './FavoriteCards';
import ModalData from './../AllContact/ModalData';
import Transition from '../../Transition/Transition';

// eslint-disable-next-line react-refresh/only-export-components
const Favorites = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState();
  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteContacts(favoritesFromLocalStorage);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="heading my-4">Favorite Contacts</h1>

      <ModalData isOpen={isOpen} setIsOpen={setIsOpen} contactId={contactId} />
      <div className="grid md:grid-cols-3 gap-4">
        {favoriteContacts.map(item => (
          <FavoriteCards key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(Favorites);
