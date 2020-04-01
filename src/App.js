import React from "react";
import Employees from "./employees.json";
import { Card } from "./components";

const App = () => {
  const [{ filter }, setFilter] = React.useState({
    filter: () => true
  });
  const [{ comparator }, setComparator] = React.useState({
    comparator: undefined
  });

  return (
    <div className="app">
      <header>
        <h1>Employee Directory</h1>
      </header>
      <nav>
        <div className="filters">
          <h3>Filter By Department:</h3>
          <button onClick={() => setFilter({ filter: () => true })}>All</button>
          <button
            onClick={() => {
              setFilter({ filter: e => e.department === "HR" });
            }}
          >
            HR
          </button>
          <button
            onClick={() => {
              setFilter({ filter: e => e.department === "Finance" });
            }}
          >
            Finance
          </button>
          <button
            onClick={() => {
              setFilter({ filter: e => e.department === "C-Suite" });
            }}
          >
            C-Suite
          </button>
          <button
            onClick={() => {
              setFilter({ filter: e => e.department === "IT" });
            }}
          >
            IT
          </button>
        </div>
        <div className="sorters">
          <h3>Sort By:</h3>

          <button
            onClick={() => {
              setComparator({ comparator: (e1, e2) => e2.salary - e1.salary });
            }}
          >
            Salary
          </button>
          <button
            onClick={() => {
              setComparator({
                comparator: (e1, e2) =>
                  e1.firstName > e2.firstName ? 1 : e1.firstName < e2.firstName ? -1 : 0
              });
            }}
          >
            First Name
          </button>
        </div>
      </nav>
      <div className="grid">
        {Employees.filter(filter)
          .sort(comparator)
          .map(e => (
            <Card employee={e} />
          ))}
      </div>
    </div>
  );
};

export default App;
