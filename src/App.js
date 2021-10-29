import './App.css';
import Body from './components/Body/Body';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Body></Body>
    </AuthProvider>
  );
}

export default App;
