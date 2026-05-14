import "@/styles/globals.css";

import { Anonymous_Pro } from "next/font/google";
const anonymous = Anonymous_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={anonymous.className}>
      <Component {...pageProps} />
    </main>
  );
}
