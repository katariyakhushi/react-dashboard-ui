
    import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function TableData() {
  const [data, setData] = useState([]);


  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err=> console.log(err));
  }, []);

  return (
   
       <div className="table-responsive">
      <table className="table table-bordered table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"  className="text-center">ID</th>
            <th scope="col" className="text-center">NAME</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col" className="text-center">CITY</th>
            <th scope="col" className="text-center">MORE</th>
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
                <button className="btn btn-warning">
                  Company 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  );
}

export default TableData;