import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage() {
  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
