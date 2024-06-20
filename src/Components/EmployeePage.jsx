import React from "react";
import Header from "./Header";

function EmployeePage() {
  const employee = {
    name: "Julie Taylor",
    title: "VP of Marketing",
    officePhone: "781-000-0002",
    mobilePhone: "617-000-0002",
    sms: "617-000-0002",
    email: "jtaylor@fakemail.com",
  };

  return (
    <div className="employee-page">
      <Header title="Employee" />
      <div className="employee-details">
        <div className="employee-avatar"></div>
        <div className="employee-info">
          <h2>{employee.name}</h2>
          <p>{employee.title}</p>
          <p>Call Office: {employee.officePhone}</p>
          <p>Call Mobile: {employee.mobilePhone}</p>
          <p>SMS: {employee.sms}</p>
          <p>Email: {employee.email}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
