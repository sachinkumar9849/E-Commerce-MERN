import React from "react";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="login-container">
                <h2>Signup</h2>
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Conform Password" className="form-label">
                      Conform Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id=" Conform Password"
                      placeholder=" Conform Password"
                    />
                  </div>

                  <Link className="btn btn-primary" to="/login">
                    Sign Up
                  </Link>
                </form>
                <p>
                  Already A Member ?Log In <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
