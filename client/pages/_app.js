import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    
     <UserProvider>
        <Nav />
        <ToastContainer position="top-center" />
        <Component {...pageProps} />
     </UserProvider>
  
  );


}




/** دى الصفحة اللى هتعمل فيها الصفحتات اللى عاوزها متشافة فى كل الصفحات على مستوى المشروع ككل*/