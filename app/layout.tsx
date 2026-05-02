import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reddit App Nag Killer — Block Reddit's App Install Prompts",
  description: "Browser extension that silences Reddit's aggressive app install banners and popups so you can browse in peace on mobile web."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="09b04e8f-ed29-4fbd-a2df-6999c5cbfb05"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
