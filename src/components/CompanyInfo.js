import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avtar from '../image/avtar.png';

function CompanyInfo() {
  // Getting the data in this component
  const location = useLocation();
  console.log("state location", location.state);
  const userData = location.state;

  // Data is in this component now, so we can use it our way

  return (
  
    <section className="vh-100" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-4 col-xl-5">
            <div className="card text-white" style={{ backgroundColor: "#eaeaea" }}>
              <div className="card-body p-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-12 order-2 order-lg-1">
                    <form className="text-center">
                      <div>
                        <h1 className=" mt-4 mb-4 text-center text-dark">Company Information</h1>
                        <div className='text-dark mb-3 mt-4'>
                          ID:
                          <input type="text" value={userData.id} />
                        </div>
                        <div className='text-dark mb-3'>
                          Name:
                          <input type="text" value={userData.name} />
                        </div>
                        <div className='text-dark mb-3'>
                          Email:
                          <input type="text" value={userData.email} />
                        </div>
                        <div className='text-dark mb-3'>
                          City:
                          <input type="text" value={userData.address.city} />
                        </div>
                        <div className='text-dark mb-3'>
                          Phone:
                          <input type="text" value={userData.phone} />
                        </div>
                        <div className='text-dark mb-3'>
                          Website:
                          <input type="text" value={userData.website} />
                        </div>
                        <Link to="/" className="btn btn-warning mt-3">
                          Go to TableData
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
