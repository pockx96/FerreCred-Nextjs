
import AdminPanelLayout from "./_components/admin-panel/admin-panel-layout";


export default async function Home({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
