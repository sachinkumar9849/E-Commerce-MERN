import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { selectLoggedInUser, checkUserAsync, selectError } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <>
      {user&& <Navigate to="/" replace={true}></Navigate>}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="login-container">
                <h2>Login</h2>
                <form
                  noValidate
                  onSubmit={handleSubmit((data) => {
                    dispatch(
                      checkUserAsync({
                        email: data.email,
                        password: data.password,
                      })
                    );
                  })}
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password", {
                        required: "Email Address is required",
                      })}
                      id="password"
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                    {error && <p className="text-danger">{error.message}</p>}
                  </div>

                  <button className="btn btn-success" type="submit">
                    Login
                  </button>

                  {/* <Link className="btn btn-primary" to="/login">
                   
                  </Link> */}
                </form>
                <p>
                  Create a account <Link to="/signup"> Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
