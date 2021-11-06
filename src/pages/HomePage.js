import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useHttpClient } from "../Hooks/http-hook";
import { useHistory } from "react-router";

const HomePage = () => {
  const [userData, setUserData] = useState();
  const { sendRequest } = useHttpClient();
  const history= useHistory();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const responseData = await sendRequest(
          `https://fakestoreapi.com/products`
        );

        setUserData(responseData);
        console.log(responseData, "yash");
      } catch (error) {}
    };

    fetchCourse();
  }, []);

  const onSubmit=(item)=>{
     history.push(`/${item.value}/page`)
  }

  return (
    <div className="home-page">
      {userData &&
        userData.map((item) => {
          return (
            <div className="card-div">
             <div className="flex-sec">
              <p className="sec1"><span style={{fontWeight:"bold"}}>Category:</span> Male</p>
              <p className="sec1"><span style={{fontWeight:"bold"}}>Color:</span> White</p>
             </div>
             <img className="image-sec" src={item.image}/>
              <p style={{marginTop:"1rem"}}>{item.title}</p>
              <p><span style={{fontWeight:"bold", marginRight:"2rem"}}>Cost:</span>{item.price} Rs Only</p>
              <button onClick={()=>onSubmit({value: `${item.id}`})} className="btn">Add to Cart</button>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
