import Header from "@/components/shared/header";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className='flex h-screen flex-col'
      >
        <Header />
        <main className="flex-1 wrapper">{children}</main>
      </html>
    );
  }