import "./app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} exact />
          <Route path="/surveys/new" component={SurveyNew} exact />
        </div>
      </Router>
      <a href="/auth/google">Sign in</a>
    </div>
  );
}

export default App;
