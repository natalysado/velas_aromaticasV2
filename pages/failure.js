// pages/failure.js
import Navbar from "../components/Navbar";

export default function Failure() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <h1 className="text-4xl font-bold text-red-800">
          El pago ha fallado
        </h1>
      </div>
    </div>
  );
}
