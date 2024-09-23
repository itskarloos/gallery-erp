import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
