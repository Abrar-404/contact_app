import AddContacts from '../Pages/AddContacts/AddContacts';
import AllContactFuntion from '../Pages/AllContact/AllContactFuntion';
import Banner from './../Pages/Banner/Banner';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AddContacts></AddContacts>
      <AllContactFuntion></AllContactFuntion>
    </div>
  );
};

export default Home;
