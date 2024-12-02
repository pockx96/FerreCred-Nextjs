"use client";
import { useState } from "react";
import AdminPanelLayout from "../_components/admin-panel/admin-panel-layout";
import { CreateProduct } from "../_components/products/create-products";
import { NavigationMenuProduct } from "../_components/products/menu-navigation";
import SelectMenu from "../_components/products/selectmenu";
import { Menu } from "../_components/admin-panel/menu";

const LoginPage = () => {
  const [menu, setMenu] = useState("");
  const handleSelectProduct = (menuSelect: string) => {
    setMenu(menuSelect);
  };

  return (
    <AdminPanelLayout>
      <main className="w-full">
        <NavigationMenuProduct onSelectMenu={handleSelectProduct} />
        <SelectMenu menuSelect={menu} />
      </main>
    </AdminPanelLayout>
  );
};
export default LoginPage;
