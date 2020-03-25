import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/actions/auth";
import "css/assets/css/login.css";
const LoginForm = props => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);
  return (
    <>
      <div className="kt-login__form">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (!/^[a-zA-Z]\w{3,14}$/.test(values.password)) {
              errors.password = "Invalid Password";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form className="kt-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <div className="kt-login__extra">
                  <label className="kt-checkbox">
                    <input type="checkbox" name="" /> Remember me
                    <span></span>
                  </label>
                  {/* <!-- <button onclick="myFunction()">Click me</button>
													<p id="demo"></p> --> */}

                  <a onclick="forgot_pwd()" href="#">
                    Forget Password ?
                  </a>
                  {/* <!-- <a href="javascript:a();" id="#kt_login_forgot">Forget Password ?</a> --> */}
                </div>
                <div className="kt-login__actions">
                  <button
                    type="submit"
                    id="kt_login_signin_submit"
                    className="btn btn-brand btn-pill btn-elevate"
                    disabled={selector.isFetching}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default LoginForm;
