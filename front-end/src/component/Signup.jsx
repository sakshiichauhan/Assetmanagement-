// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Make sure Link is imported

// function AuthForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission (either signup or login)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password || (isLogin === false && !formData.name)) {
//       setError('All fields are required.');
//       setSuccess('');
//       return;
//     }

//     const apiUrl = isLogin ? 'http://localhost:8080/auth/login' : 'http://localhost:8080/auth/signup';
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(isLogin ? 'Login successful!' : 'Sign-up successful! You can now log in.');
//         setError('');
//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//         });
//       } else {
//         setError(data.message || 'An error occurred.');
//         setSuccess('');
//       }
//     } catch (error) {
//       setError('Failed to connect to the server. Please try again.');
//       setSuccess('');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>

//         {/* Display error message */}
//         {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}

//         {/* Display success message */}
//         {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Field (only for signup) */}
//           {!isLogin && (
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
//                 required
//               />
//             </div>
//           )}

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>

//           {/* Toggle between login and signup */}
//           <div className="text-center mt-4">
//             <span className="text-sm text-gray-600">
//               {isLogin ? "Don't have an account? " : 'Already have an account? '}
//             </span>
//             <button
//               type="button"
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               {isLogin ? 'Sign up' : 'Login'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import axios from 'axios'; // Import axios

function AuthForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (either signup or login)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (isLogin === false && !formData.name)) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    const apiUrl = isLogin ? 'http://localhost:8080/auth/login' : 'http://localhost:8080/auth/signup';
    
    try {
      // Replace fetch with axios
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle response
      if (response.status === 200) {
        setSuccess(isLogin ? 'Login successful!' : 'Sign-up successful! You can now log in.');
        setError('');
        setFormData({
          name: '',
          email: '',
          password: '',
        });
      } else {
        setError(response.data.message || 'An error occurred.');
        setSuccess('');
      }
    } catch (error) {
      setError('Failed to connect to the server. Please try again.');
      setSuccess('');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>

        {/* Display error message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Display success message */}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field (only for signup) */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          {/* Toggle between login and signup */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </span>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-blue-700"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
