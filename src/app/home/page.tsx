import { getServerAuthSession } from "~/server/auth";
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";
import { SellCart } from "../_components/sell-car/sell-cart";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <AdminPanelLayout>
      <p className="text-center text-2xl text-orange-500">
        {session && (
          <span>
            Logged in as <br></br>
            {session.user?.name}
          </span>
        )}
      </p>
      <SellCart />
    </AdminPanelLayout>
  );
}
