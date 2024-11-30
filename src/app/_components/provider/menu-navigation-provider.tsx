"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuProvider({
  onSelectMenu,
}: {
  onSelectMenu: (menuSelect: string) => void;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => onSelectMenu("provedor")}>
            Proveedores
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => onSelectMenu("compras")}>
          <NavigationMenuTrigger>Ordenes de Compras</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
