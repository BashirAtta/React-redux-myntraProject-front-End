import Header from "../component/Header";
import Footer from "../component/Footer";

import "../index.css";
import { Outlet } from "react-router-dom";
import FetchItem from "../component/FetchItem";
import { useSelector } from "react-redux";
import Spinner from "../component/Spinner";

function App() {
  const isFetching = useSelector((store) => store.fetching.currentlyFetching);

  return (
    <>
      <Header />
      <FetchItem />

      <main>{isFetching ? <Spinner /> : <Outlet />}</main>
      <Footer />
    </>
  );
}

export default App;
