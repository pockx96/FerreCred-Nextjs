import { CreateProvider } from "./create-provider";
import { OrderSale } from "./order-sales";

export default function SelectMenu({ menuSelect }: { menuSelect: string }) {
  const renderContent = () => {
    switch (menuSelect) {
      case "provedor":
        return <CreateProvider />;
      case "compras":
        return <OrderSale />;
    }
  };
  return <div>{renderContent()}</div>;
}
