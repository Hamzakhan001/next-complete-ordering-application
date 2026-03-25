import Header from "@/components/shared/header";
import Footer from "@/components/footer";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return (
        <>
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        <Footer />
    </>
    )
  }