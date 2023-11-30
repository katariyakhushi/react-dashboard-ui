import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
function TableData() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(() => setTimeout(300))
    .then((res) => {
      setTimeout(1000);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="vh-100" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container h-100 mt-4 mb-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
        {!isLoading ? ( 
          <div className="col-lg-12 col-xl-0">
            <div className="card text-dark" style={{ backgroundColor: '#eaeaea' }}>
              <div className="card-body p-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-12 order-2 order-lg-1">
                      <table className="table table-bordered table-striped table-dark table-responsive">
                        <thead>
                          <tr>
                            <th scope="col" className="text-center">
                              ID
                            </th>
                            <th scope="col" className="text-center">
                              NAME
                            </th>
                            <th scope="col" className="text-center">
                              Email
                            </th>
                            <th scope="col" className="text-center">
                              CITY
                            </th>
                            <th scope="col" className="text-center">
                              MORE
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((user, index) => (
                            <tr key={index}>
                              <td className="text-center">{user.id}</td>
                              <td className="text-center">{user.name}</td>
                              <td className="text-center">{user.email}</td>
                              <td className="text-center">{user.address.city}</td>
                              <td className="text-center">
                                <Button
                                  className="btn btn-warning"
                                  type="button"
                                  onClick={() => {
                                    navigate('companyInfo', { state: user });
                                  }}
                                >
                                  Company
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      </div>
                      </div>
                      </div>
              </div>
            </div>
                    ) : (
                      <div class="spinner-border" role="status" style={{
                        width: "200px",
                        height: "200px"
                      }}>
                        <span class="sr-only"></span>
                      </div>
                  )}
          </div>
      </div>
    </section>
  );
}

export default TableData;
