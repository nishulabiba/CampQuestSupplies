import { Outlet } from "react-router-dom";


const Main = () => {

  return (
      <div className="">
        <h1>you</h1>
        <Outlet/>
      </div>
  );
};

export default Main;