import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';
import AuthProvider from './components/Context/AuthProvider';
import AppRoute from './pages/AppRoute/AppRoute';



function App() {
  return (
    <>
      <AuthProvider>
        <AppRoute></AppRoute>
      </AuthProvider>


      </>
  );
}

export default App;
