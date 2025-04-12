"use client";
import * as React from "react";
import { MenuItem } from "./MenuItem";

export interface MenuItemData {
  id: string;
  icon: string;
  label: string;
}

interface MenuProps {
  items: MenuItemData[];
}

function Menu({ items }: MenuProps) {
  return (
    <nav className="border-solid border-[color:var(--sds-color-border-default-default)] border-[length:var(--sds-size-stroke-border)] rounded-[var(--sds-size-radius-200)] shadow-[var(--sds-size-depth-0)_var(--sds-size-depth-100)_var(--sds-size-depth-100)_var(--sds-size-depth-negative-025)_var(--sds-color-black-100)] bg-[color:var(--sds-color-background-default-default)] mx-auto max-w-[320px] w-full px-2 pt-2 pb-[712px] overflow-hidden">
        <header className="overflow-hidden px-4 pt-2 pb-1 w-full text-base font-semibold leading-snug text-stone-900">
            <h2>My Games</h2>
        </header>
        <div className="flex flex-col justify-center px-4 py-2 w-full">
            <hr className="flex w-full bg-zinc-300 min-h-px" />
        </div>
      <section className="overflow-hidden w-full text-base leading-snug rounded-lg text-stone-900 flex flex-col gap-1">
        {items.map((item) => (
          <MenuItem key={item.id} icon={item.icon} label={item.label} />
        ))}
      </section>
    </nav>
  );
}

export default Menu;
