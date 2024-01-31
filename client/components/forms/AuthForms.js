import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
    page
}) => (
  <form onSubmit={handleSubmit}>
    {page !== "login" && (<div className="form-group p-2">
      <small>
        <label className="text-muted">Your Name</label>
        </small>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
        ></input>
    </div>)}

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Your Email</label>
        </small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
        ></input>
    </div>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Your Password</label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
        ></input>
    </div>
 {page !== "login" && (<>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Select a quetion</label>
      </small>
      <select className="form-control">
        <option>what is your favourite color?</option>
        <option>what is your favourite car?</option>
        <option>what is your favourite drint?</option>
      </select>
      <small className="form-text text-muted">
        You can use this to reset your password
      </small>
    </div>

    <div className="form-group p-2">
      <input
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        type="text"
        className="form-control"
        placeholder="write yur answer here"
      ></input>
    </div>
    </>)}
    <div className="form-group p-2">
      <button
        disabled={
          page === "login" 
        ? !email || !password
        :!name || !password || !email || !secret}
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-2" /> : "Submit"}
      </button>
    </div>
  </form>
);
export default AuthForm;
