import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    StudentName: "",
    FathersName: "",
    Phone: "",
    Email: "",

  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  }

    // connect with firebase
    const submitData = async (event) => {
      event.preventDefault();
      const { StudentName, FathersName, Phone, Email } = userData;
  
      if (StudentName && FathersName && Phone && Email ) {
        const res = fetch(
          "https://clg1-c5fbf-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              StudentName,
              FathersName,
              Phone,
              Email,

            }),
          }
        );
  
        if (res) {
          setUserData({
            StudentName: "",
            FathersName: "",
            Phone: "",
            Email: "",

          });
          alert("Thank you for your response");
        } else {
          alert("plz fill the details");
        }
      } else {
        alert("plz fill the details");
      }
    };

  return (
<>
<div className='container'>
<form method="POST">
  
    <h1 className=''>CONTACT FORM</h1>
    <span className='fs-3'>Enter Your details</span>
    <div className='col-12 col-lg-4 contact-input-feild my-3'>
      <input
      type='text'
      name='StudentName'
      id=''
      className='form-control'
      placeholder='StudentName'
      value={userData.StudentName}
      onChange={postUserData}
      />
    </div>

    <div className='col-12 col-lg-4 contact-input-feild my-3'>
      <input
      type='text'
      name='FathersName'
      id=''
      className='form-control'
      placeholder='FathersName'
      value={userData.FathersName}
      onChange={postUserData}
      />
    </div>

    <div className='col-12 col-lg-4 contact-input-feild my-3'>
      <input
      type='text'
      name='Email'
      id=''
      className='form-control'
      placeholder='Email'
      value={userData.Email}
      onChange={postUserData}
      />
    </div>

    <div className='col-12 col-lg-4 contact-input-feild my-3'>
      <input
      type='text'
      name='Phone'
      id=''
      className='form-control'
      placeholder='Phone'
      value={userData.Phone}
      onChange={postUserData}
      />
    </div>
    

    <button
            type="submit"
           className="btn btn-style  col-12 col-lg-4"
           onClick={submitData}>
            Submit
           </button>
</form>
</div>



</>
  )
}

export default Contact
