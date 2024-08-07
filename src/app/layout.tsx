import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Header from "~/components/header/header";
import { ThemeProvider } from "~/components/header/theme-provider";
import { Toaster } from "~/components/ui/sonner";

export const metadata = {
  title: "iCrud",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider>
          <nav className="mb-5 flex flex-col items-center border-b px-5 py-4">
            <div className="w-full max-w-6xl">
              <Header />
            </div>
          </nav>

          <main className="flex flex-col items-center">
            <div className="w-full max-w-6xl">{children}</div>
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
