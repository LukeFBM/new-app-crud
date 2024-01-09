import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex justify-center mt-5">
      <div>
        <h1>New APP Crud</h1>
        <Link to={"/users"}>Go to users</Link>
      </div>
    </div>
  );
};

export default LandingPage;
