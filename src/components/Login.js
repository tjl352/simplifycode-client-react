import React, {useState, useEffect} from 'react';

function Login() {
  return (
    <div className="col-sm-12">
      <div className="card border-dark mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">
          <b>Login</b>
        </div>
        <div className="card-body">
          <form>
            <fieldset>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              &nbsp;
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
  //}
}
export default Login;
