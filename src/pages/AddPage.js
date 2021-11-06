import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useHttpClient } from "../Hooks/http-hook";
import "./HomePage.css";

const AddPage = () => {
  const [userData, setUserData] = useState();
  const { sendRequest } = useHttpClient();
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const responseData = await sendRequest(
          `https://fakestoreapi.com/products`
        );

       responseData.filter(i=>i.id===id)
        console.log(responseData, "yash");
        setUserData(responseData)
      } catch (error) {}
    };

    fetchCourse();

    
  }, []);

  const backHandler = () => {
    history.push("/");
  };
  return (
    <div>
      {userData && (
        <div className="card1-div">
          <div className="flex-sec">
            <p className="sec1">
              <span style={{ fontWeight: "bold" }}>Category:</span> Male
            </p>
            <p className="sec1">
              <span style={{ fontWeight: "bold" }}>Color:</span> White
            </p>
          </div>
          <img className="image-sec" src={userData[0].image} />
          <p style={{ marginTop: "1rem" }}>{userData[0].title}</p>
          <p>
            <span style={{ fontWeight: "bold", marginRight: "2rem" }}>
              Cost:
            </span>
            {userData[0].price} Rs Only
          </p>
          <button onClick={backHandler} className="btn">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPage;
