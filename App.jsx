
import { useEffect, useState } from "react";

function App() {
  const [signal, setSignal] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  const fetchSignal = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://forex-signal-app.onrender.com/api/rsi?symbol=EURUSD");
      const text = await res.text();
      setSignal(text);
    } catch (e) {
      setSignal("Error fetching signal");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSignal();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Forex RSI Signal</h1>
      <div className="text-2xl p-4 bg-white shadow-md rounded-xl mb-4">
        Signal: {loading ? "Loading..." : signal}
      </div>
      <button
        onClick={fetchSignal}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
      >
        Refresh
      </button>
    </div>
  );
}

export default App;
