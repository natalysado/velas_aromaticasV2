// pages/pending.js
import Navbar from "../components/Navbar";

export default function Pending() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-yellow-100">
        <h1 className="text-4xl font-bold text-yellow-800">
          El pago está pendiente
        </h1>
      </div>
    </div>
  );
}
