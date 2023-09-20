import AuthHeader from './components/AuthHeader/AuthHeader';
import './styles/App.scss';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <>
      <div className='container'>
        <AuthHeader></AuthHeader>
        <SignIn></SignIn>
      </div>
    </>
  );
}

export default App;
