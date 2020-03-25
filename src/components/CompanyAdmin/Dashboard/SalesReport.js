import React, { Component } from "react";
import { Link } from "react-router-dom";
class SalesReport extends Component {
  render() {
    return (
      <>
        <div className="col-xl-6 col-lg-6 col-sm-6">
          {/* <!--begin:: Widgets/Sale Reports--> */}
          <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
            <div className="kt-portlet__head">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title">Sales Reports</h3>
              </div>
            </div>
            <div className="kt-portlet__body">
              {/* <!--Begin::Tab Content--> */}
              <div className="tab-content">
                {/* <!--begin::tab 1 content--> */}
                <div className="tab-pane active" id="kt_widget11_tab1_content">
                  {/* <!--begin::Widget 11--> */}
                  <div className="kt-widget11">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <td className="width1">#</td>
                            <td className="width40">Application</td>
                            <td className="width14">Sales</td>
                            <td className="width15">Change</td>
                            <td className="width15">Status</td>
                            <td className="width15 kt-align-right">Total</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <Link to="" className="kt-widget11__title">
                                Loop
                              </Link>
                              <span className="kt-widget11__sub">
                                CRM System
                              </span>
                            </td>
                            <td>19,200</td>
                            <td>$63</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--brand">
                                new
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-brand kt-font-bold">
                              $34,740
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <Link to="" className="kt-widget11__title">
                                Selto
                              </Link>
                              <span className="kt-widget11__sub">
                                Powerful Website Builder
                              </span>
                            </td>
                            <td>24,310</td>
                            <td>$39</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--success">
                                approved
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-brand kt-font-bold">
                              $46,010
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <Link to="" className="kt-widget11__title">
                                Jippo
                              </Link>
                              <span className="kt-widget11__sub">
                                The Best Selling App
                              </span>
                            </td>
                            <td>9,076</td>
                            <td>$105</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--warning">
                                pending
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-brand kt-font-bold">
                              $67,800
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <Link to="" className="kt-widget11__title">
                                Verto
                              </Link>
                              <span className="kt-widget11__sub">
                                Web Development Tool
                              </span>
                            </td>
                            <td>11,094</td>
                            <td>$16</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--danger">
                                on hold
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-brand kt-font-bold">
                              $18,520
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="kt-widget11__action kt-align-right">
                      <button
                        type="button"
                        className="btn btn-label-brand btn-bold btn-sm"
                      >
                        Import Report
                      </button>
                    </div>
                  </div>

                  {/* <!--end::Widget 11--> */}
                </div>

                {/* <!--end::tab 1 content-->

            <!--begin::tab 2 content--> */}
                <div className="tab-pane" id="kt_widget11_tab2_content">
                  {/* <!--begin::Widget 11--> */}
                  <div className="kt-widget11">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <td className="width1">#</td>
                            <td className="width40">Application</td>
                            <td className="width14">Sales</td>
                            <td className="width15">Change</td>
                            <td className="width15">Status</td>
                            <td className="width15 kt-align-right">Total</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <span className="kt-widget11__title">Loop</span>
                              <span className="kt-widget11__sub">
                                CRM System
                              </span>
                            </td>
                            <td>19,200</td>
                            <td>$63</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--danger">
                                pending
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-brand  kt-font-bold">
                              $23,740
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <span className="kt-widget11__title">Selto</span>
                              <span className="kt-widget11__sub">
                                Powerful Website Builder
                              </span>
                            </td>
                            <td>24,310</td>
                            <td>$39</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--success">
                                new
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-success  kt-font-bold">
                              $46,010
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <span className="kt-widget11__title">Jippo</span>
                              <span className="kt-widget11__sub">
                                The Best Selling App
                              </span>
                            </td>
                            <td>9,076</td>
                            <td>$105</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--brand">
                                approved
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-danger kt-font-bold">
                              $15,800
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label className="kt-checkbox kt-checkbox--single">
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </td>
                            <td>
                              <span className="kt-widget11__title">Verto</span>
                              <span className="kt-widget11__sub">
                                Web Development Tool
                              </span>
                            </td>
                            <td>11,094</td>
                            <td>$16</td>
                            <td>
                              <span className="kt-badge kt-badge--inline kt-badge--info">
                                done
                              </span>
                            </td>
                            <td className="kt-align-right kt-font-warning kt-font-bold">
                              $8,520
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="kt-widget11__action kt-align-right">
                      <button
                        type="button"
                        className="btn btn-label-success btn-bold btn-sm"
                      >
                        Generate Report
                      </button>
                    </div>
                  </div>

                  {/* <!--end::Widget 11--> */}
                </div>

                {/* <!--end::tab 2 content-->

            <!--begin::tab 3 content--> */}
                <div className="tab-pane" id="kt_widget11_tab3_content"></div>

                {/* <!--end::tab 3 content--> */}
              </div>

              {/* <!--End::Tab Content--> */}
            </div>
          </div>

          {/* <!--end:: Widgets/Sale Reports--> */}
        </div>
      </>
    );
  }
}

export default SalesReport;
