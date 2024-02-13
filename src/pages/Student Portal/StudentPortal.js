import React, { useEffect, useState } from "react";
import "./StudentPortal.css";
import VictoryCard from "./VictoryCard.js";
import InfoCards from "./InfoCards.js";
import FeatureCard from "./FeathuredCard.js";
import SideDrawer from "../../SideDrawer";
import {useLoaderData} from "react-router-dom";
import axios from "axios";


function StudentPortal() {
  const [campusdata, setCampusdata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rp = await axios.get("http://localhost:8000/company_data/oncampuss");
        console.log("inside useEffect function", rp.data,"hello ");
        setCampusdata(rp.data); // Assuming you want to set the data from the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Immediately invoke the async function
  }, []); // Empty dependency array means this effect runs only once, like componentDidMount

  const fuck = useLoaderData();
  return (

    <div className="flex flex-row justify-between">
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer />
      </div>
      <div className="flex flex-col pt-20">
        <div className="flex flex-col pt-10">
          <h1 className="text-5xl font-bold ">Overview</h1>
            <InfoCards data={fuck.data[0]} />
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-5xl font-bold ">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
        </div>
      </div>

      <div className="inline-block space-y-8 border-l-2 border-l-black pl-10">
        <h1 className="text-5xl font-bold pt-20 mt-5 mb-5">Opportunities</h1>
        <FeatureCard oncampus campusdata={campusdata} />
        <FeatureCard offcampus campusdata={campusdata} />
      </div>
      </div>
  );
}

export default StudentPortal;

export async function loader(){
  try {
      const response = await axios.get("http://localhost:8000/student_portal/overview");
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
  }
}