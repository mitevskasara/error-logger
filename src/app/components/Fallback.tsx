import { Link } from 'react-router-dom';
import '../styles/fallback.css';

const Fallback = () => {
    return (
        <div className="container">
            <p className="text">
                <b>Oh no!</b>
                <br />
                Something went wrong
            </p>
            <Link
                to="/home"
                className="back-button"
            >
                GO HOME
            </Link>
        </div>
    );
};

export default Fallback;
