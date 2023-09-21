import AuthHeader from "./components/AuthHeader/AuthHeader";
import "./styles/App.scss";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="container">
        <AuthHeader />
        {/* <SignIn></SignIn> */}
        <SignUp />
      </div>
    </>
  );
}

export default App;
