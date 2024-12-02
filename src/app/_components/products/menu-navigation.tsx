"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

export function NavigationMenuProduct({
  onSelectMenu,
}: {
  onSelectMenu: (menuSelect: string) => void;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => onSelectMenu("nuevo")}>
            Nuevo
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => onSelectMenu("modificar")}>
          <NavigationMenuTrigger>Modificar</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => onSelectMenu("kardex")}>
            Kardex
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => onSelectMenu("inventario")}>
            Inventario
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => onSelectMenu("nuevo")}>
            test
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
