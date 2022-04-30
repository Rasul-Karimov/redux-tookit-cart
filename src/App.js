import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
function App() {
  const modal = useSelector(state => state.model.isOpen)
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();
  console.log(modal)


  useEffect(() => {
    dispatch(getCartItems())
  }, [])


  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading</h1>
      </div>
    )
  }
  return <main>
    {modal && <Modal />}
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
