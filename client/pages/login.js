import { useState  , useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForms";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [state , setState] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );

     setState({
      user:data.user,
      token:data.token,
     })
      window.localStorage.setItem("auth" , JSON.stringify(data));
      router.push("/");

     /**
      * --------------------------------------------------
     // setEmail("");
     // setPassword("");
     // setLoading(false);
     // console.log(data);
      * --------------------------------------------------
     */

    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };


  if(state && state.token){
    router.push("/");
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3 bg-image">
          <div className="col text-center">
            <h1 className="test text-light ">This is Login page</h1>
          </div>
        </div>

        <div className="row pt-3 ">
          <div className="col-md-6 offset-md-3 text-center bg-light">
            <AuthForm
              handleSubmit={handleSubmit}
              
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              loading={loading}
              page="login"
            />
          </div>
        </div>
       
        <div className="row">
          <div className="col">
            <p className="text-center">
              Not yet registered?{""}
              <Link href={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
