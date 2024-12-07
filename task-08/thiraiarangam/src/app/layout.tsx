import Footer from "@/components/footer";
import NavBar from "@/components/header";
import "@/styles/globals.css"; // Tailwind CSS styles

export const metadata = {
  title: "Thiraiarangam",
  description: "Developed by Sivabharathi V S",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSignedIn = true; 
  const username = "Sivabharathi"; 

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        {/* Header */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <hr className="my-6 mx-12 border-t-6 border-yellow-500" />
        <Footer />
      </body>
    </html>
  );
}
