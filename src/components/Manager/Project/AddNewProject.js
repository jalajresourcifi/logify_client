import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addNewProject } from "redux/actions/project";
import "react-image-crop/dist/ReactCrop.css";
// import ReactCrop from "react-image-crop";
function AddNewProject() {
  // const [src, setSrc] = useState(null);
  // const [crop, setCrop] = useState({
  //   unit: "%",
  //   width: 150,

  //   aspect: 16 / 9
  // });
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  // const setImagehandler = file => {
  //   console.log("Without FileReader", file);
  //   let filereader = new FileReader();
  //   filereader.onloadend = () => {
  //     setImage(filereader.result);
  //   };
  //   filereader.readAsDataURL(file);
  //   console.log("FileReader Output", filereader);
  // };

  return (
    <>
      <Formik
        initialValues={{
          project_logo: null,
          project_name: "",
          company_id: "",
          client_id: "",
          start_date: "",
          deadline: "",
          budget: null,
          project_manager: "",
          description: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.project_name) {
            errors.project_name = "Required";
          }
          // if (!values.project_logo) {
          //   errors.project_logo = "Image Required";
          // }
          if (!values.company_id) {
            errors.company_id = "Required";
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
            onSubmit={handleSubmit}
          >
            {/* <!--begin: Form Wizard Step 1--> */}
            <div
              className="kt-wizard-v1__content"
              data-ktwizard-type="step-content"
              data-ktwizard-state="current"
            >
              <div className="kt-heading kt-heading--md">Project Details:</div>
              <div className="kt-section kt-section--first">
                <div className="kt-wizard-v1__form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="kt-section__body">
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Project Logo
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
                                  name="project_logo"
                                  onChange={async event => {
                                    let filereader = new FileReader();
                                    filereader.onloadend = () => {
                                      setImage(filereader.result);
                                      setFieldValue(
                                        "project_logo",
                                        filereader.result
                                      );
                                    };
                                    filereader.readAsDataURL(
                                      event.target.files[0]
                                    );
                                  }}
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
                            <div>
                              {errors.project_logo &&
                                touched.project_logo &&
                                errors.project_logo}
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
                              name="project_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.project_name}
                              placeholder="Project Name"
                            />
                            {errors.project_name &&
                              touched.project_name &&
                              errors.project_name}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Company
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              name="company_id"
                              className="form-control"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.company_id}
                              placeholder="Company"
                            />
                            {errors.company_id &&
                              touched.company_id &&
                              errors.company_id}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Client Name
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              name="client_id"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.client_id}
                              placeholder="Client"
                            />
                            {errors.client_id &&
                              touched.client_id &&
                              errors.client_id}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Start Date
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div
                              className="input-group pull-right"
                              id="kt_daterangepicker_5"
                            >
                              <input
                                type="date"
                                className="form-control"
                                name="start_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.start_date}
                              />

                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="la la-calendar-check-o"></i>
                                </span>
                              </div>
                            </div>
                            {errors.start_date &&
                              touched.start_date &&
                              errors.start_date}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Deadline
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div
                              className="input-group pull-right"
                              id="kt_daterangepicker_5"
                            >
                              <input
                                type="date"
                                className="form-control"
                                name="deadline"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.deadline}
                              />

                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="la la-calendar-check-o"></i>
                                </span>
                              </div>
                            </div>
                            {errors.deadline &&
                              touched.deadline &&
                              errors.deadline}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Budget
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div
                              className="input-group pull-right"
                              id="kt_daterangepicker_5"
                            >
                              <input
                                type="number"
                                className="form-control"
                                name="budget"
                                placeholder="Budget"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.budget}
                              />
                            </div>
                            {errors.budget && touched.budget && errors.budget}
                          </div>
                        </div>

                        {/* <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Resources
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <TagsInput
                              className="form-control"
                              placeholder="Resources"
                              name="resources"
                              onChange={handleChange
                              }
                              onBlur={handleBlur}
                              value={values.resources}
                            />
                          </div>
                        </div> */}
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Manager
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className="form-control"
                              type="text"
                              name="project_manager"
                              placeholder="Manager"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.project_manager}
                            />
                            {errors.project_manager &&
                              touched.project_manager &&
                              errors.project_manager}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Description
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group">
                              {/* <!-- <input type="text" className="form-control" placeholder="Comments Here" value="" /> --> */}
                              <textarea
                                className="form-control"
                                name="description"
                                placeholder="Comments Here"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                              ></textarea>
                            </div>
                            {errors.description &&
                              touched.description &&
                              errors.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="kt-form__actions">
              <button
                type="submit"
                className="btn btn-brand btn-md btn-tall btn-wide kt-font-bold kt-font-transform-u"
                data-ktwizard-type="action-next"
              >
                Create Project
              </button>
            </div>

            {/* <!--end: Form Actions --> */}
          </form>
        )}
      </Formik>
    </>
  );
}

export default AddNewProject;
