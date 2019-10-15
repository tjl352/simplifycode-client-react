import React, {useState, useEffect} from 'react';

function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/customers')
      .then(res => res.json())
      .then(customers => {
        setCustomers([...customers]);
        setIsLoaded(!isLoaded);
      });
  });

  return (
    <div className="col-sm-12">
      <h3>Customers</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr className="table-active" key={customer.customerId}>
              <th scope="row">{customer.customerId}</th>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //}
}
export default CustomerTable;
