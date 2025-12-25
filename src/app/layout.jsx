import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-red-100">{children}</body>
    </html>
  );
}
