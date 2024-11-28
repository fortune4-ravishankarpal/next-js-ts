import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
    return (
        <ErrorBoundary
            FallbackComponent={({ error, resetErrorBoundary }) => (
                <div>
                    <p>Something went wrong: {error.message}</p>
                    <button onClick={resetErrorBoundary}>Try again</button>
                </div>
            )}
        >
            <AppFetch />
        </ErrorBoundary>
    );
}

function AppFetch() {
    const [hasError, setHasError] = useState(false);

    return <div>App</div>;
}
