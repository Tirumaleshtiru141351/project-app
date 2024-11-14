import { useState } from "react";
import "./index.css";

export const Login = () => {
    const [formData, setFormData] = useState({
        name:"",
        usename:"",
        email:"",
        mobile:"",
        isChecked:"",
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData((prev) => ({ ...prev, [name]:value }));
        setErrTxt((prev) => ({ ...prev, [name]: { isError: false, msg: "" } }));
    };

    const [errTxt, setErrTxt] = useState({
        name: { isError: false, msg:"" },
        username: { isError: false, msg:"" },
        email: { isError: false, msg:"" },
        mobile: { isError: false, msg:"" },
        isChecked: { isError: false, msg:"" },
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name) {
            return setErrTxt({
                ...errTxt,
                name: { isError: true, msg: "Name is required" },
            });
        }

        if(!formData.username){
            return setErrTxt({
                ...errTxt,
                username: { isError: true, msg: "Username is required" },
            });
        }

        if(
            !formData.email &&
            !formData.email.includes("@") &&
            !formData.email.includes(".")
        ) {
            return setErrTxt({
                ...errTxt,
                email: {isError: true, msg: "Email is required" },
            });
        }
        if (!formData.mobile && !(formData.mobile.length === 10))
        {
            return setErrTxt({
                ...errTxt,
                mobile: { isError: true, msg: "Mobile is required" },
            });
        }
        if (!formData.isChecked) 
        {
            return setErrTxt({
                ...errTxt,
                isChecked: { isError: true, msg: "checkbox is required" },
            });
        }
        console.log(formData);
    };


    return <div className="login-container">
        <div style={{ width:"50vw", height:"100vh"}}></div>
        <form className="login-form">
            <h1>Fun Desk</h1>

            <input type="text" placeholder="Name" name="name" 
            style={{border: errTxt.name.isError ? "1px solid red" : "1px solid black"}}
            value={formData.name}
            onChange={handleChange}
             />
             {errTxt.name.isError && (
                <p style={{ color:"red" }}>{errTxt.name.msg}</p>
             )}

             <input type="text" placeholder="Username" name="username"
             value={formData.username}
            onChange={handleChange} />
            {errTxt.username.isError && 
            <p>{ettTxt.username.msg}</p>}


            <input type="text" placeholder="Email" name="email" 
            value={formData.email}
            onChange={handleChange} />
            {errTxt.email.isError && <p>{errTxt.email.msg}</p>}


            <input type="tel" placeholder="Mobile" name="mobile"
            value={formData.mobile}
            onChange={handleChange} />
            {errTxt.mobile.isError && <p>{errTxt.mobile.msg}</p>}

            <div>
                <input id="checkbox" type="checkbox"
                name="isChecked" value={formData.isChecked}
                onChange={(e) => 
                    setFormData({...formData, isChecked: e.target.checked })
                } />

                <label htmlFor="checkbox">
                    share my registartion data with Fun desk
                </label>

                <br />
                {errTxt.isChecked.isError && <p>{errTxt.isChecked.msg}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
};