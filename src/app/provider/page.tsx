"use client";
import { useState } from "react";
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";
import SelectMenu from "../_components/provider/select-menu";
import { NavigationMenuProvider } from "../_components/provider/menu-navigation-provider";

const ProviderPage = () => {
  const [menu, setMenu] = useState("provedor");
  const handleSelectProvider = (menuSelect: string) => {
    setMenu(menuSelect);
  };

  return (
    <AdminPanelLayout>
      <main className="w-full">
        <NavigationMenuProvider onSelectMenu={handleSelectProvider} />
        <SelectMenu menuSelect={menu} />
      </main>
    </AdminPanelLayout>
  );
};
export default ProviderPage;
