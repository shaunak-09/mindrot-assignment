import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// const Toast=require("react-toastify")
import {toast}  from 'react-toastify';
function Landingpage() {
  const [name, setName] = useState("Test Patient");
  const [gender, setGender] = useState("Male");
  const [bloodg, setBloodg] = useState("AB+");
  const [age, setAge] = useState("40");
  const [poc, setPoc] = useState("PAA008");
  const [email, setEmail] = useState("test@test.test");
  const [number, setNumber] = useState("9999999999");
  const [address1, setAddress1] = useState("Address1");
  const [address2, setAddress2] = useState("Address2");
  const [city, setCity] = useState("Kolkata");
  const [pin, setPin] = useState("700001");
  const [disease1, setDisease1] = useState("Diabetics");
  const [disease2, setDisease2] = useState("Thyroid");
  const [docname, setDocname] = useState("Doctor X");
  const [docnum, setDocnum] = useState("8888888888");
  const [attname, setAttname] = useState("Primary Attendent");
  const [attrel, setAttrel] = useState("Daughter");
  const [attemail, setAttemail] = useState("test1@test.test");
  const [attnum, setAttnum] = useState("7777777777");
  const [attaddress1, setAttAddress1] = useState("Address1");
  const [attaddress2, setAttAddress2] = useState("Address2");
  const [attcity, setAttCity] = useState("Mumbai");
  const [attpin, setAttPin] = useState("100001");
  useEffect(() => {
    document.querySelectorAll(".input-1").forEach((el)=>
    {el.disabled=true})
    document.querySelectorAll(".input-2").forEach((el)=>
    {el.disabled=true})
    document.querySelectorAll(".input-3").forEach((el)=>
    {el.disabled=true})
  },[])
  const edit_1=()=>{
    document.querySelectorAll(".input-1").forEach((el)=>
    {el.disabled=false;
      
    })
  }
  const edit_2=()=>{
    document.querySelectorAll(".input-2").forEach((el)=>
    {el.disabled=false})
  }
  const edit_3=()=>{
    document.querySelectorAll(".input-3").forEach((el)=>
    {el.disabled=false})
  }
  const handlesubmit=()=>{
    console.log({
    patient_details:{name,gender,number,age,poc,email,number,address:[address1,address2,city,pin]},
    other_details:{disease1,disease2,docname,docnum},
    patient_attendent:{attname,attrel,attnum,attemail,attendent_addres:[attaddress1,attaddress2,attcity,attpin]}  
    });
    toast.success("Profile Updated");
    axios.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:10}})
    .then((data)=>{
      console.log(data);
      toast.success("Successfull Api call")

    })
    .catch((err)=>{
      console.log(err);
      toast.error("Api not called, Pls try again")
    })


    document.querySelectorAll(".input-1").forEach((el)=>
    {el.disabled=true})
    document.querySelectorAll(".input-2").forEach((el)=>
    {el.disabled=true})
    document.querySelectorAll(".input-3").forEach((el)=>
    {el.disabled=true})
  }
  

  return (
    <div className="flex flex-col">
      <div className="bg-white mt-[5rem] relative">
        <div className="flex flex-col items-center p-5">
          <div className=" bg-gray-400 absolute  top-[-3rem] w-[5rem] h-[5rem] mb-1">
          <FontAwesomeIcon icon="fa-solid fa-user" className=" p-1 w-[3rem] h-[4rem]" style={{color: "#ffffff",}} />

          </div>
          <FontAwesomeIcon icon=" fa-solid fa-pencil" style={{color: "#828282",}} className=" absolute t-1 right-5 cursor-pointer" onClick={edit_1} />
          <input
            className="input-1 text-3xl font-bold text-[#03b979] text-center py-3 mb-1 "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <div className="flex flex-row">
            <input
              className="input-1 mx-2 text-end w-[3rem]"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            |
            <div className="flex flex-row justify-center items-center px-1">
            <FontAwesomeIcon icon="fa-solid fa-droplet" />
            <input
              className="input-1 mx-2 text-start w-[2rem]"
              value={bloodg}
              onChange={(e) => {
                setBloodg(e.target.value);
              }}
            />

            </div>
            
            |
            <div className="flex flex-row">
            <input
              className="input-1 mx-2 text-center w-[2rem]"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <label>Yrs</label>

            </div>
            
          </div>
        </div>
        <div className="flex flex-col px-4 pb-4 ">
          <div className="flex flex-row items-center">
          <FontAwesomeIcon icon="fa-solid fa-address-card" />
          <input
            value={poc}
            onChange={(e) => {
              setPoc(e.target.value);
            }}
            className="input-1 px-2"
          />

          </div>
       
          <div className="flex flex-row items-center">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
              className="input-1 px-2"
            />
            <FontAwesomeIcon icon="fa-solid fa-mobile" />
            <input
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
               
              }}
              className="input-1 px-2"
            />
          </div>
          <div className="flex flex-row items-center">
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <input
              value={address1}
              onChange={(e) => {
                setAddress1(e.target.value);

              }}
              className="input-1 w-[5rem] text-start px-2"
            />
            ,
            <input
              value={address2}
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
              className="input-1 w-[5rem] text-center"
            />
            ,
            <input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="input-1 w-[5rem] text-center"
            />
            ,
            <input
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
              className="input-1 w-[5rem] text-center"
            />
          </div>
        </div>
      </div>
      <div className="flex p-4 bg-white my-4 flex-col items-start relative">
     
          <FontAwesomeIcon icon=" fa-solid fa-pencil" style={{color: "#828282",}} className=" absolute t-1 right-5 cursor-pointer" onClick={edit_2}/>
          
           <p className="text-2xl font-bold text-[#03b979] text-center py-3 ">
          Other Details
        </p>
        <p className=" font-bold">Patient Ailment :-</p>
        <input
          onChange={(e) => {
            setDisease1(e.target.value);
          }}
          value={disease1}
          className="input-2"
        />
        <input
          value={disease2}
          onChange={(e) => {
            setDisease2(e.target.value);
          }}
          className="input-2"
        />
        <div className="flex flex-row">
          <label className="">Consulting Doctor :</label>
          <input
            className=" font-bold w-[50%] input-2"
            value={docname}
            onChange={(e) => {
              setDocname(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row">
          <label className="pr-2">Doctor's Contact # :</label>
          <input
            className=" font-bold input-2 w-[50%]"
            value={docnum}
            onChange={(e) => {
              setDocnum(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex p-4 bg-white my-4 flex-col  items-start relative">
      <FontAwesomeIcon icon=" fa-solid fa-pencil" style={{color: "#828282",}} className=" absolute t-1 right-5 cursor-pointer" onClick={edit_3}/>
       <p className="text-2xl font-bold text-[#03b979] text-center py-3 ">
          Patient Attendant Details
        </p>
        <p className=" font-bold">Primary Attendent :-</p>
        <div className="flex flex-row">
          <label className="pr-2">Name :</label>
          <input
            value={attname}
            onChange={(e) => {
              setAttname(e.target.value);
            }}
            className="input-3"
          />
        </div>
        <div className="flex flex-row">
          <label className="pr-2">Relation With Patient :</label>
          <input
            value={attrel}
            onChange={(e) => {
              setAttrel(e.target.value);
            }}
            className="input-3 w-[50%]"
          />
        </div>
        <div className="flex flex-row items-center">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <input
            value={attemail}
            onChange={(e) => {
              setAttemail(e.target.value);
            }}
            className="input-3 px-2"
          />
          <FontAwesomeIcon icon="fa-solid fa-mobile" />
          <input
            value={attnum}
            onChange={(e) => {
              setAttnum(e.target.value);
            }}
            className="input-3 px-1"
          />
        </div>
        <div className="flex flex-row items-center">
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <input
            value={attaddress1}
            onChange={(e) => {
              setAttAddress1(e.target.value);
            }}
            className="w-[5rem] text-start input-3 px-2"
          />
          ,
          <input
            value={attaddress2}
            onChange={(e) => {
              setAttAddress2(e.target.value);
            }}
            className="w-[5rem] text-center input-3"
          />
          ,
          <input
            value={attcity}
            onChange={(e) => {
              setAttCity(e.target.value);
            }}
            className="w-[5rem] text-center input-3"
          />
          ,
          <input
            value={attpin}
            onChange={(e) => {
              setAttPin(e.target.value);
            }}
            className="w-[5rem] text-center input-3"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">      
      <button type="submit" className="p-3 bg-[#078e5f] w-[40%] text-2xl font-bold text-white" onClick={handlesubmit}>Submit</button>
     </div>
    </div>
  );
}

export default Landingpage;
