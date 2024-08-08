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
    }, 2000); 
    }
    return(
        <div style={{backgroundColor:"solid white",padding:"10px",textAlign:"center"}} >

        <div style={{backgroundColor:"white", padding:"10px",borderRadius:"5px" }}>
        <h1 className="text-3xl">Welcome To Shopping</h1>
        <p>Signup Here</p>

        <div className="flex flex-col gap-3 my-3">
            <input type="text" onChange={handleuname}  typeof="email" style={{border:"gray solid 2px",width:"50%"}} placeholder="Enter your email id"></input>
            <input type="text" onChange={handlepassword} style={{border:"gray solid 2px",width:"50%"}} placeholder="password"></input>
            <input type="text" style={{border:"gray solid 2px",width:"50%"}} placeholder="confirm-password"></input>

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

