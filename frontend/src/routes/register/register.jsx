import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventdefault();
    setError("");
    setIsLoading(true);

    const formData = new FromData(e.target);
    const username = formData.get("usename");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      Navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };
  return <div className="registerPage"></div>;
}
