import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyleProvider } from "../src/core/ui/StyleProvider";

function InviteApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </StyleProvider>
  );
}

export default InviteApp;
