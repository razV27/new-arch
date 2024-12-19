import ReactQueryProvider from "@/shared/providers/QueryClientProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProvider from "@/shared/providers/NextUIProvider";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Welcome to the App Router in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <NextUIProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
