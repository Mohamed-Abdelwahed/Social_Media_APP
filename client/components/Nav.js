import { useContext , useEffect , useState} from "react";
import {UserContext} from "../context";
import {useRouter} from "next/router";
import Link from "next/link";
import style from "../public/css/index.module.css"

const Nav = ()=>{
  const [state , setState] = useContext(UserContext);
const [current , setCurrent] = useState("");
useEffect(() => {
  process.browser && setCurrent(window.location.pathname);
}, [process.browser && window.location.pathname]);

const router = useRouter();

  const logout = ()=>{
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  }
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              href={"/"}
              className={`nav-link logo ${current === "/" && style.my_active}`}
            >
              Home
            </Link>
          </li>
          {state !== null ? (
            <>
              <li className="nav-item">
                <Link
                  href={"/user/dashboard"}
                  className={`nav-link my_active ${
                    current === "/user/dashboard" && style.my_active
                  }`}
                >
                  Hi ,{state && state.user && state.user.name}
                </Link>
              </li>

              <li className="nav-item pointTo">
                <a onClick={logout} className={`nav-link ${style.pointer}`}>
                  logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  href={"/login"}
                  className={`nav-link my_active ${
                    current === "/login" && style.my_active
                  }`}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={"/register"}
                  className={`nav-link ${
                    current === "/register" && style.my_active
                  }`}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
}


export default Nav;
