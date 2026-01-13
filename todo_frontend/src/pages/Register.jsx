import { Link } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm';

const Register = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <h1>Create Account</h1>
                    <p>Join us and start organizing your tasks</p>

                    <RegisterForm />

                    <div className="auth-link">
                        Already have an account? <Link to="/">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
