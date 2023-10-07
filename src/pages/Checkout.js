import React from "react";

const Checkout = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  placeholder="Enter your street address"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Enter your state"
                  />
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="zip">ZIP/Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder="ZIP/Postal Code"
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button type="submit" className="btn btn-info">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
