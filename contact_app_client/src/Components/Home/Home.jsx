import AddContacts from '../Pages/AddContacts/AddContacts';
import AllContactFuntion from '../Pages/AllContact/AllContactFuntion';
import Banner from './../Pages/Banner/Banner';
import Transition from '../Transition/Transition';
import Footer from '../Footer/Footer';
// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <h1 className="text-white font-bold mt-32 flex justify-center text-3xl">
          Add Contacts
        </h1>
        <AddContacts></AddContacts>
      </div>
      <div>
        <h1 className="text-white font-bold mt-32 flex justify-center text-3xl">
          All Contacts
        </h1>
        <AllContactFuntion></AllContactFuntion>
      </div>
      <div className="mt-32">
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(Home);
