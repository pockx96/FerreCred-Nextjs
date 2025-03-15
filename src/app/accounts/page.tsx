import { AccountClient } from "../_components/accounts/accounts-client";
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";

export default function AccountsPage() {
  return (
    <AdminPanelLayout>
      <AccountClient />
    </AdminPanelLayout>
  );
}
