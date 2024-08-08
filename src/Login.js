
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



function Login(props){
    const [euseremail,esetuseremail]=useState()
    const [epassword,esetpassword]=useState()
    const [ruser,setruser]=useState(true)
    const users=props.users
    const navigate=useNavigate()

    function handleuname(evt){
        esetuseremail(evt.target.value)
    }
function handlepassword(evt){
    esetpassword(evt.target.value)
}
console.log(users)

    function checkuser()
    {
       var userfound=false
        users.forEach(function(item){
            if(item.emailid===euseremail && item.pwd===epassword){
                console.log("Login succesfull")
                userfound=true
                navigate("/productlist",{state:{name:euseremail}})
            }})
        if(userfound===false)
            {
                console.log("Login failed")
                setruser(false)
            }
    }

    return(
        <div style={{backgroundColor:"solid white",padding:"10px",textAlign:"center"}}>

        <div style={{backgroundColor:"white", padding:"10px",borderRadius:"5px" }}>
        <h1 className="text-3xl">Hello People...!</h1>
        {ruser?<p>WELCOME TO SHOPPING </p>:<p className="text-red-500">Please signup before you login</p>}

        <div className="flex flex-col gap-3 my-3">
            <input type="text" vlaue={euseremail} typeof="email" style={{border:"gray solid 2px",width:"50%"}} onChange={handleuname} placeholder="email id"></input>
            <input type="password" value={epassword}  style={{border:"gray solid 2px",width:"50%"}} onChange={handlepassword} placeholder="password"></input>
           
            <button className="bg-[#8272DA] w-24 border rounded-md p-1"onClick={checkuser}>Login</button>
           <p>Don't have an account <Link to={"/signup"} className="underline">Signup</Link></p>
        </div>

        </div>
        
        </div>
    )
}
export default Login
