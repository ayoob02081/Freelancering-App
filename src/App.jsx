import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerSingleProject from "./pages/OwnerSingleProject";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes >
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<OwnerProjects />} />
            <Route path="projects/:id" element={<OwnerSingleProject />} />
          </Route>

          <Route path="/" element={<Home />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
