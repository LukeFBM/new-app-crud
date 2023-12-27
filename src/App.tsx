import { useState } from "react";
import "./App.css";
import { users } from "./lib/users";

function App() {
  return (
    <>
      <h1 className="">New App Crud</h1>
      <div className="flex">
        <ul className="flex gap-4 justify-center">
          {users.map((user) => {
            return (
              <li key={user.id}>
                <h5>{user.name}</h5>
                <h5>{user.email}</h5>
                <h5>{user.password}</h5>
                <h5>{user.phone}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
