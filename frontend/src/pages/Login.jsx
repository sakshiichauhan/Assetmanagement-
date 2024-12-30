import React, { useState, useEffect } from 'react';
import { setUser, setLoading } from '../redux/authSlice'; // Ensure correct import paths for actions
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { RadioGroup } from '../components/ui/radio-group';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner'; // Ensure sonner is correctly installed
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector((store) => store.auth); // Select loading state from Redux

    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true)); // Set loading to true before API call
            const res = await axios.post(`${USER_API_END_POINT}/userlogin`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user)); // Save user data in Redux
                toast.success(res.data.message); // Show success message
                navigate("/"); // Redirect to home/dashboard
            } else {
                toast.error(res.data.message || "Login failed"); // Show error message
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "An error occurred"); // Show error message
        } finally {
            dispatch(setLoading(false)); // Reset loading state
        }
    };

    useEffect(() => {
        // Optional: Check if user is already logged in and redirect
        const user = localStorage.getItem("user"); // or use Redux to check the logged-in state
        if (user) {
            navigate("/"); // Redirect if user is already logged in
        }
    }, [navigate]);

    return (
        <div className="flex items-center justify-center max-w-7xl mx-auto">
            <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                <h1 className="font-bold text-xl mb-5">Login</h1>
                <div className="my-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={input.email}
                        name="email"
                        onChange={changeEventHandler}
                        placeholder="patel@gmail.com"
                    />
                </div>
                <div className="my-2">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={input.password}
                        name="password"
                        onChange={changeEventHandler}
                        placeholder="**********"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <RadioGroup className="flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="employee"
                                checked={input.role === 'employee'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="r1">Employee</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={input.role === 'admin'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="r2">Admin</Label>
                        </div>
                    </RadioGroup>
                </div>
                {loading ? (
                    <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </Button>
                ) : (
                    <Button type="submit" className="w-full my-4">
                        Login
                    </Button>
                )}
                <span className="text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600">
                        Signup
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
