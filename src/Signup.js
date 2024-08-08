import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const users=props.users
    const setuser=props.setuser
    const navigate=useNavigate()
    const [euseremail,esetuseremail]=useState()
    const [epassword,esetpassword]=useState()
    const [signupSuccess, setSignupSuccess] = useState(false);

    function handleuname(evt){
        esetuseremail(evt.target.value)
    }
     function handlepassword(evt){
    esetpassword(evt.target.value)
    }
   
      function Adduser() {
    setuser([...users, { emailid: euseremail, pwd: epassword }]);
    setSignupSuccess(true);
    setTimeout(() => {
        navigate("/");
    }, 2000); // Navigate to login page after 2 seconds
    }
    return(
        <div  className="bg-solid p-10" >

        <div className="bg-white p-40 border rounded-md">
        <h1 className="text-3xl">Welcome To Shopping</h1>
        <p>Signup Here</p>

        <div className="flex flex-col gap-3 my-3">
            <input type="text" onChange={handleuname} className="w-52 bg-transparent border-black p-1 border rounded-md" typeof="email" placeholder="Enter your email id"></input>
            <input type="text" onChange={handlepassword} className="w-52 bg-transparent   border-black p-1 border rounded-md" placeholder="password"></input>
            <input type="text" className="w-52 bg-transparent  border-black p-1 border rounded-md" placeholder="confirm-password"></input>

            <button className="bg-[rgb(252,241,84)] w-24 border rounded-md p-1" onClick={Adduser}>Signup</button>
           <p>Already have an account <Link to={"/"} className="underline">Login</Link></p>
        </div>
        {signupSuccess && (
                    <p className="text-red-500 mt-3">Signed up successfully! Redirecting to login...</p>
                )}
        </div>
        
        </div>
    )
}
export default Signup

