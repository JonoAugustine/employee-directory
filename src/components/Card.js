import React from "react";

const Card = ({ employee }) => {
  return (
    <div className="card">
      <h3>
        {employee.firstName} {employee.lastName}
      </h3>
      <p>{employee.title}</p>
      <p>{employee.department}</p>
      <p>{employee.salary}</p>
      <p>{employee.birthday}</p>
    </div>
  );
};

export default Card;
