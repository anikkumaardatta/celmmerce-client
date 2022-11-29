import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Banner from "../components/HomeComponents/Banner/Banner";
import Brands from "../components/HomeComponents/MobileBrands/Brands";

const Home = () => {
  const { user, loading, setUserDataInfo } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const currentUserData = {
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
          userType: data.userType,
        };
        setUserDataInfo(currentUserData);
      });
  }, [user]);
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
    </div>
  );
};

export default Home;
