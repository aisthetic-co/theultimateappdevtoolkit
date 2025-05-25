import DisableDraftMode from "@/components/DisableDraftMode";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { draftMode } = pageProps;
  return (
    <>
      <Component {...pageProps} />
      {draftMode && <DisableDraftMode />}
    </>
  );
}
