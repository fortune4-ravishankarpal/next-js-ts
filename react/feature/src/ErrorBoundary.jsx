import React from "react";
export class ErrorBoundaryReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log("[48;2;255;255;0m [ getDerivedStateFromError @@ ]-9 [0m", error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("[48;2;255;255;0m [ componentDidCatch @@ ]-9 [0m", error);

        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.hasError) {
            return true;
        }
        return false;
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
