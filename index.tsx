import React from "react";
import ReactDOM from "react-dom";
import App from "./src/app";

import { ChakraProvider} from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@src/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "@src/contexts/auth_context";

const Provider: React.FC = ({ children }): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChakraProvider resetCSS theme={theme}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};



ReactDOM.render(
  <Provider>
  <App />
  </Provider>, document.getElementById("root"));
