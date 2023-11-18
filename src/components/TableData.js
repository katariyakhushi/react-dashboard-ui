
    import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function TableData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err=> console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Email</th>
              <th>CITY</th>
              <th>MORE</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user,index) => {
                return <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{ <button style={{ backgroundColor: 'orange', color: 'white' }}>
                Company
              </button>}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;