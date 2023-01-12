import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyleProvider } from "../src/core/ui/StyleProvider";
import { Navbar } from "../src/core/ui/layout/navbar/Navbar";

function InviteApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Navbar />
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default InviteApp;
