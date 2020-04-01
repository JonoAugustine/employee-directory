import React from "react";

const Card = ({ employee }) => {
  return (
    <div className="card">
      <h3>
        {employee.firstName} {employee.lastName}
      </h3>
      <p>{employee.title}</p>
      <p className="department">{employee.department}</p>
      <p className="salary">{employee.salary}</p>
      <p className="birthday">{employee.birthday}</p>
    </div>
  );
};

export default Card;
