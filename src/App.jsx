import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/" element /> */}
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
