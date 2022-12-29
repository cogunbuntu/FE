import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../lib/styles/globalStyles";
import palette from "../lib/styles/palette";

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
      <AppLayout>
        <GlobalStyle />
        
        <Outlet />
      </AppLayout>
    </QueryClientProvider>
  );
}

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${palette.sky.lightest};
  padding: 16px;
`;

export default App;
