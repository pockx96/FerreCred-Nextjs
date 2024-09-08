import { AccountClient } from "../_components/accounts/accounts-client";
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";

const AccountsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminPanelLayout>
      <AccountClient />
    </AdminPanelLayout>
  );
};

export default AccountsPage;
