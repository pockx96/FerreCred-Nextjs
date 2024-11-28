import { CreateProduct } from "./create-products";
import { EditProduct } from "./edit-product";
import { InventoryProduct } from "./inventory-product";
import { KardexProduct } from "./kardex-product";

export default function SelectMenu({ menuSelect }: { menuSelect: string }) {
  const renderContent = () => {
    switch (menuSelect) {
      case "nuevo":
        return <CreateProduct />;
      case "modificar":
        return <EditProduct />;
      case "kardex":
        return <KardexProduct />;
      case "inventario":
        return <InventoryProduct />;
    }
  };
  return <div>{renderContent()}</div>;
}
