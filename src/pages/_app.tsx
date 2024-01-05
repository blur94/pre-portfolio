import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Notifications position="top-center" limit={1} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
