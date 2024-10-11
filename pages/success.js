// pages/success.js
import Navbar from '../components/Navbar';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-green-100">
        <h1 className="text-4xl font-bold text-green-800">
          Pago exitoso
        </h1>
      </div>
    </div>
  );
}