
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";
import { SellCart } from "../_components/sell-car/sell-cart";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminPanelLayout>
      <SellCart/>
    </AdminPanelLayout>
  );
};

export default HomePage;
