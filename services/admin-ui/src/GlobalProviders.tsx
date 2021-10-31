import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

export const queryClient = new QueryClient();

interface GlobalProvidersProps {
  children: React.ReactNode;
}

export default function GlobalProviders({
  children,
}: GlobalProvidersProps): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme()}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
