import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyleProvider } from "../src/core/ui/StyleProvider";
import { AuthProvider } from "../src/users/ui/AuthProvider";

function InviteApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </StyleProvider>
  );
}

export default InviteApp;
