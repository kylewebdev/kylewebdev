import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page mx-6">
      <Navigation />

      <div className="flex flex-col md:flex-row gap-16 theme-container mx-auto pb-16 sm:pb-32">
        <Sidebar />
        <div className="basis-2/3 order-1 md:order-2">{children}</div>
      </div>
    </div>
  );
}
