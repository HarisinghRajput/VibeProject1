import { useAuth } from '../../context/AuthContext';
import Button from '../UI/Button';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="dashboard-header">
            <div className="container">
                <h1 className="dashboard-title">Todo App</h1>
                <div className="dashboard-user">
                    <span className="dashboard-email">{user?.email}</span>
                    <Button variant="secondary" size="sm" onClick={logout}>
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
