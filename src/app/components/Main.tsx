import ErrorHandler from './ErrorHandler';
import BuggyComponent from '../pages/BuggyComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import '../styles/main.css';

const Main = () => {
    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                {/* This leads to a buggy page with handled exception */}
                <Route path="/buggy-page">
                    <ErrorHandler>
                        <BuggyComponent />
                    </ErrorHandler>
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
