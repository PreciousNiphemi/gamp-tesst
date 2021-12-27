import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
