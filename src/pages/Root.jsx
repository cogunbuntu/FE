import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../lib/styles/globalStyles";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <AppLayout>
        <Navbar />
        <Conetnts>
          <Outlet />
        </Conetnts>
      </AppLayout>
    </QueryClientProvider>
  );
}

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 16px;
`;

const Conetnts = styled.div`
  flex: 1;
`;

export default App;
