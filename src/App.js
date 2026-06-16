import RegisterForm from './RegisterForm';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header style={{ 
        padding: '15px 30px', 
        backgroundColor: '#e63946', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px' 
      }}>
        <img 
          src="/images/logo.jpeg" 
          alt="SS Martial Arts Logo" 
          style={{ height: '100px', width: 'auto' }} 
        />
        <h1>SS MARTIAL ARTS</h1>
      </header>
      
      <RegisterForm />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;