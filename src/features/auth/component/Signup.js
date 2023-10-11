import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { selectLoggedInUser, createUserAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
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
                <h2>Signup</h2>
                <form
                  noValidate
                  onSubmit={handleSubmit((data) => {
                    dispatch(
                      createUserAsync({
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
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "email not valid",
                        },
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
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                          message: `- at least 8 characters\n
                          - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                          - Can contain special characters`,
                        },
                      })}
                      id="password"
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Conform Password" className="form-label">
                      Conform Password
                    </label>
                    <input
                      type="password"
                      {...register("conformPassword", {
                        required: "Password not matching",
                        validate: (value, formValue) =>
                          value === formValue.password ||
                          "password not matching",
                      })}
                      className="form-control"
                      id="conformPassword"
                      placeholder=" Conform Password"
                    />
                    {errors.conformPassword && (
                      <p className="text-danger">
                        {errors.conformPassword.message}
                      </p>
                    )}
                  </div>
                  <button className="btn btn-success" type="submit">
                    {" "}
                    Sign Up
                  </button>

                  {/* <Link className="btn btn-primary" to="/login">
                   
                  </Link> */}
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

export default Signup;
