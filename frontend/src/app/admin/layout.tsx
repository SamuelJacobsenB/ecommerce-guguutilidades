'use client';
import './layout.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="admin_content">{children}</div>
      </body>
    </html>
  );
}
