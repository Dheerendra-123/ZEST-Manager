import React, { useState } from 'react'
import styles from "./student.module.css"
import axios from "axios";



function studentRegister() {


    const [formData, setFormData] = useState({

        rollno: '',
        name: '',
        phone: '',
        address:'',
        collegeSelect: 'SRMS CET', // Default value
        branchSelect: 'CSE', // Default value
        yearSelect: '1', // Default value
    });

    const [message,setMessage]=useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); 
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   const registerStudent=async ()=>{
        try{
            const response=await axios.post("http://127.0.0.1:5000/users/register",{
                email:"sample@gmail.com",
                rollno:formData.rollno,
                name:formData.name,
                phone:formData.phone,
                address:formData.address,
                college:formData.collegeSelect,
                branch:formData.branchSelect,
                year:formData.yearSelect
                
            })

            console.log("Response from Reister:", response.data); // Log the response data
            return response.data; // Return the data
        }
        catch(error){
            console.log("Register Error:",error)
            setMessage(error.response.data.message)
        }
   }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send formData to the server)

        await registerStudent();
        console.log('Form submitted:', formData);
    };
    return (
        <div id={styles.wrapper}>

            <div id={styles.left}>

                <h1>User Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rollno">Roll No/Reg. No</label>
                    <input
                        type="text"
                        name="rollno"
                        id="rollno"
                        required
                        value={formData.rollno}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="collegeSelect">College</label>
                    <select
                        name="collegeSelect"
                        value={formData.collegeSelect}
                        onChange={handleChange}
                    >
                        <option value="SRMS CET">SRMS CET</option>
                        <option value="SRMS CETR">SRMS CETR</option>
                        <option value="SRMS IBS">SRMS IBS</option>
                        <option value="SRMS IMS">SRMS IMS</option>
                        <option value="SRMS Law">SRMS Law</option>
                        <option value="SRMS Nursing">SRMS Nursing</option>
                        <option value="SRMS Unnao">SRMS Unnao</option>
                        <option value="SRMS IPS">SRMS IPS</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />

                    <label htmlFor="branchSelect">Branch</label>
                    <select
                        name="branchSelect"
                        value={formData.branchSelect}
                        onChange={handleChange}
                    >
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="EN">EN</option>
                        <option value="EC">EC</option>
                        <option value="ME">ME</option>
                        <option value="B Pharma">B Pharma</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="Medical">Medical</option>
                        <option value="Other">Other</option>
                    </select>

                    <label htmlFor="yearSelect">Year</label>
                    <select
                        name="yearSelect"
                        value={formData.yearSelect}
                        onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />

                    <button type="submit">Register</button>
                </form>

                {/* response status */}
                {message && (
                <div className={styles.errorMessage}>
                    {message}
                </div>
            )}
            </div>
        </div>
    )
}

export default studentRegister;