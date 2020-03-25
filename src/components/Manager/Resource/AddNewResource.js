import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addNewProject } from "redux/actions/project";
import "react-image-crop/dist/ReactCrop.css";
import { Link } from "react-router-dom";
// import ReactCrop from "react-image-crop";
function AddNewResource() {
  // const [src, setSrc] = useState(null);
  // const [crop, setCrop] = useState({
  //   unit: "%",
  //   width: 150,

  //   aspect: 16 / 9
  // });
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  //   const setImagehandler = file => {
  //     console.log("Without FileReader", file);
  //     let filereader = new FileReader();
  //     filereader.onloadend = () => {
  //       setImage(filereader.result);
  //     };
  //     filereader.readAsDataURL(file);
  //     console.log("FileReader Output", filereader);
  //   };

  return (
    <>
      <Formik
        initialValues={{
          avatar: null,
          firstname: "",
          lastname: "",
          designation: "",
          company_id: "",
          role_id: "",
          address: "",
          skills: "",
          phone: 0,
          joining_date: "",
          experience: 0
        }}
        validate={values => {
          const errors = {};
          if (!values.project_name) {
            errors.fullname = "Required";
          }
          // if (!values.avatar) {
          //   errors.avatar = "Image Required";
          // }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.client_id) {
            errors.client_id = "Required";
          }
          if (!values.start_date) {
            errors.start_date = "Required";
          }
          if (!values.deadline) {
            errors.deadline = "Required";
          }
          if (!values.budget) {
            errors.budget = "Required";
          } else if (values.budget < 0) {
            errors.budget = "Budget Cannot Be in Negative";
          }
          if (!values.project_manager) {
            errors.project_manager = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addNewProject(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          /* and other goodies */
        }) => (
          <form
            className="kt-form"
            id="kt_apps_projects_add_form"
            novalidate="novalidate"
          >
            {/* <!--begin: Form Wizard Step 1--> */}
            <div
              className="kt-wizard-v1__content"
              data-ktwizard-type="step-content"
              data-ktwizard-state="current"
            >
              <div className="kt-heading kt-heading--md">Resource Details:</div>
              <div className="kt-section kt-section--first">
                <div className="kt-wizard-v1__form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="kt-section__body">
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Avatar
                          </label>
                          <div className="col-lg-9 col-xl-6">
                            <div
                              className="kt-avatar kt-avatar--outline kt-avatar--circle"
                              id="kt_apps_user_add_avatar"
                            >
                              <img
                                src={image}
                                className="kt-avatar__holder bg-logo"
                              ></img>
                              <label
                                className="kt-avatar__upload"
                                data-toggle="kt-tooltip"
                                title=""
                                data-original-title="Change avatar"
                              >
                                <i className="fa fa-pen"></i>
                                <input
                                  type="file"
                                  name="avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                              </label>
                              <span
                                className="kt-avatar__cancel"
                                data-toggle="kt-tooltip"
                                title=""
                                data-original-title="Cancel avatar"
                              >
                                <i className="fa fa-times"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Project Name
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              value="Loop CRM"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Email Address
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="la la-at"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                value="anna.krox@loop.com"
                                placeholder="Email"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            UserName
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              value="Loop Inc."
                            />
                            <span className="form-text text-muted">
                              If you want your invoices addressed to a company.
                              Leave blank to use your full name.
                            </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Company
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              value="Krox"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Profession
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              value="Profession"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Designation
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              value="Designation"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Contact Phone
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="la la-phone"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                value="+45678967456"
                                placeholder="Phone"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span className="form-text text-muted">
                              We'll never share your email with anyone else.
                            </span>
                          </div>
                        </div>

                        <div className="form-group form-group-last row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Company Site
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value="loop"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">.com</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-form__actions">
              <div
                className="btn btn-brand btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                data-ktwizard-type="action-next"
              >
                Create Resource
              </div>
            </div>

            {/* <!--end: Form Actions --> */}
          </form>
        )}
      </Formik>
    </>
  );
}

export default AddNewResource;
