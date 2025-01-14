import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/fonts"
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: {
    template: '%s | Budget Fixer 2.0',
    default: 'Budget Fixer 2.0',
  },
  description: 'The Official Budget Management for salaried employee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
