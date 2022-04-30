import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
function App() {
  const modal = useSelector(state => state.model.isOpen)
  console.log(modal)
  return <main>
    {modal && <Modal />}
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
