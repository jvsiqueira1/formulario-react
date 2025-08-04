import UserRegistrationForm from './components/UserRegistrationForm';
import './App.css';

interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const handleUserRegistration = async (userData: UserData) => {
    console.log('Dados do usuário para cadastro:', userData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sistema de Cadastro
          </h1>
          <p className="text-gray-600">
            Preencha os dados abaixo para criar sua conta
          </p>
        </header>
        
        <UserRegistrationForm onSubmit={handleUserRegistration} />
        
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Sistema de Cadastro. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
