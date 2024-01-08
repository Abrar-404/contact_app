import AddContacts from '../Pages/AddContacts/AddContacts';
import AllContactFuntion from '../Pages/AllContact/AllContactFuntion';
import Banner from './../Pages/Banner/Banner';
import Transition from '../Transition/Transition';
// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AddContacts></AddContacts>
      <AllContactFuntion></AllContactFuntion>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(Home);
