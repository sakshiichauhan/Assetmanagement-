
// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // for import page link

// function Login() {
//   // States to store form input values
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // to show error message
//   const [success, setSuccess] = useState(""); // to show success message

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Client-side validation (optional)
//     if (!email || !password) {
//       setError("Email and Password are required.");
//       return;
//     }

//     // Make API call for login
//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }), // Send login credentials
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Handle successful login (store token, redirect, etc.)
//         setSuccess("Login successful!");
//         setError(""); // clear any error message
//         // Example: Redirect or store token in localStorage, etc.
//         // localStorage.setItem('token', data.token); // Uncomment if needed
//         console.log("Logged in:", data); // Log data or redirect
//       } else {
//         setError(data.message || "Login failed. Please try again.");
//         setSuccess(""); // clear any success message
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//       setSuccess(""); // clear any success message
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
//           Login
//         </h2>
        
//         {/* Display error message */}
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         {/* Display success message */}
//         {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:text-blue-800">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // for import page link
import axios from "axios"; // Import axios

function Login() {
  // States to store form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // to show error message
  const [success, setSuccess] = useState(""); // to show success message

  // Generic handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value); // Update email state
    } else if (name === "password") {
      setPassword(value); // Update password state
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation (optional)
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    // Make API call for login using axios
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      // Handling successful login
      if (response.status === 200) {
        setSuccess("Login successful!");
        setError(""); // clear any error message
        // Example: Redirect or store token in localStorage, etc.
        // localStorage.setItem('token', response.data.token); // Uncomment if needed
        console.log("Logged in:", response.data); // Log data or redirect
      } else {
        setError(response.data.message || "Login failed. Please try again.");
        setSuccess(""); // clear any success message
      }
    } catch (error) {
      // Handling errors from axios
      setError("An error occurred. Please try again.");
      setSuccess(""); // clear any success message
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h2>
        
        {/* Display error message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Display success message */}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange} // Use handleChange here
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange} // Use handleChange here
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
