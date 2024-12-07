import Header from "./header";


export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      
      {children}
      
    </section>
  );
}