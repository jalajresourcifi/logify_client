import React from "react";

const MembershipDetails = props => {
  return (
    <>
      <div className="kt-portlet">
        <div className="kt-portlet__body kt-portlet__body--fit">
          <div className="row row-no-padding row-col-separator-xl">
            <div className="col-md-12 col-lg-12 col-xl-4">
              {/* <!--begin:: Widgets/Stats2-1 --> */}
              <div className="kt-widget1">
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Membership Details</h3>
                    <span className="kt-widget1__desc">
                      Awerage Weekly Profit
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-brand">
                    +$17,800
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Policy</h3>
                    <span className="kt-widget1__desc">
                      Weekly Customer Orders
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-danger">
                    +1,800
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Cookie Policy</h3>
                    <span className="kt-widget1__desc">
                      System bugs and issues
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-success">
                    -27,49%
                  </span>
                </div>
              </div>

              {/* <!--end:: Widgets/Stats2-1 --> */}
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4">
              {/* <!--begin:: Widgets/Stats2-2 --> */}
              <div className="kt-widget1">
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Pricing</h3>
                    <span className="kt-widget1__desc">Awerage IPO Margin</span>
                  </div>
                  <span className="kt-widget1__number kt-font-success">
                    +24%
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Expiry</h3>
                    <span className="kt-widget1__desc">Yearly Expenses</span>
                  </div>
                  <span className="kt-widget1__number kt-font-info">
                    +$560,800
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Status</h3>
                    <span className="kt-widget1__desc">
                      Overall Regional Logistics
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-warning">
                    -10%
                  </span>
                </div>
              </div>

              {/* <!--end:: Widgets/Stats2-2 --> */}
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4">
              {/* <!--begin:: Widgets/Stats2-3 --> */}
              <div className="kt-widget1">
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Orders</h3>
                    <span className="kt-widget1__desc">
                      Awerage Weekly Orders
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-success">
                    +15%
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Transactions</h3>
                    <span className="kt-widget1__desc">
                      Daily Transaction Increase
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-danger">
                    +80%
                  </span>
                </div>
                <div className="kt-widget1__item">
                  <div className="kt-widget1__info">
                    <h3 className="kt-widget1__title">Revenue</h3>
                    <span className="kt-widget1__desc">
                      Overall Revenue Increase
                    </span>
                  </div>
                  <span className="kt-widget1__number kt-font-primary">
                    +60%
                  </span>
                </div>
              </div>

              {/* <!--end:: Widgets/Stats2-3 --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipDetails;
