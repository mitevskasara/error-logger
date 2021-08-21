import React from 'react';
import log from '../utils/logger';
import Fallback from './Fallback';

class ErrorHandler extends React.Component<{}, IErrorHandlerState> {
  
    state = {
        hasError: false
    };
  
    static getDerivedStateFromError(error: object) {
        return { hasError: true };
    }

    componentDidCatch(error: object, errorInfo: any) {
        log.error(error.toString() + errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <Fallback />;
        }
        return this.props.children;
    }
}

export default ErrorHandler;
