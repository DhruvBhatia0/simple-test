import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pawnder - Tinder for Dogs",
  description: "Find the perfect playmate for your pup!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
