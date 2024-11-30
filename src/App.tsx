import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { RegionsPage } from './pages/RegionsPage';
import { RegionDetailPage } from './pages/RegionDetailPage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { EstablishmentsPage } from './pages/EstablishmentsPage';
import { SavedEstablishmentsPage } from './pages/SavedEstablishmentsPage';
import { UserProfile } from './pages/UserProfile'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <div className="max-w-md mx-auto px-4 sm:px-6">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>
                    <LoginForm />
                  </div>
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div className="max-w-md mx-auto px-4 sm:px-6">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Register</h1>
                    <RegisterForm />
                  </div>
                </div>
              }
            />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/regions/:regionId" element={<RegionDetailPage />} />
            <Route path="/regions/:regionId/countries/:countryId" element={<CountryDetailPage />} />
            <Route path="/establishments" element={<EstablishmentsPage />} />
            <Route path="/saved" element={<SavedEstablishmentsPage />} />
            <Route path="/profile" element={<UserProfile />} />
            
            {/* Редирект з будь-якого іншого маршруту */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
