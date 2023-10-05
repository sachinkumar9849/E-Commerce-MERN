import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="login-container">
                <h2>Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  
                    
                    <Link to="/" className="btn btn-success">Login</Link>
                
                </form>
                <p>
                  Not a member ? <Link to="/signup" className="">Create an Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
