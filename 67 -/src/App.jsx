import { useState } from 'react';
import PasswordForm from './components/PasswordForm';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <input
            type="password"
            className="form-input bg-gray-800 text-white"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PasswordForm password={password} />
      </div>
    </div>
  );
}

export default App;