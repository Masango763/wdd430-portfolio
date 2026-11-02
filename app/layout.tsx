import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between bg-white text-gray-900">
        <Header />
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
