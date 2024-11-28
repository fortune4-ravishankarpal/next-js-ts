function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const isAuthenticated = Boolean(localStorage.getItem("token"));
        if (!isAuthenticated) {
            return <div>You need to log in</div>;
        }
        return <Component {...props} />;
    };
}

function Dashboard() {
    return <h1>Welcome to the Dashboard!</h1>;
}

const AuthenticatedDashboard = withAuth(Dashboard);

function HigherOrder() {
    return <AuthenticatedDashboard />;
}

export default HigherOrder;
/* 








Ehance HelloWord


*/

export function EnhancedHelloWord() {
    let name = "world";
    return <EnhancedHello name={name} />;
}

let withLogger = (Component) => (props) => {
    return <Component {...props} />;
};

function Component({ name }) {
    return <h1>Hello, {name}!</h1>;
}

const EnhancedHello = withLogger(Component);
