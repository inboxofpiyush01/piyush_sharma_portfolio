import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App grain min-h-screen bg-[#05070A] text-gray-100 font-[Manrope,sans-serif]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="bottom-right" richColors closeButton />
    </div>
  );
}

export default App;
