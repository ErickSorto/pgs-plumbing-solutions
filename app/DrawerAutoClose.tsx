"use client";

import { useEffect } from "react";

const drawerIds = ["pgs-menu", "pgs-translate"];

export default function DrawerAutoClose() {
  useEffect(() => {
    const closeDrawers = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest(".mobile-drawer a, .language-drawer a")) {
        return;
      }

      drawerIds.forEach((id) => {
        const drawer = document.getElementById(id);

        if (drawer instanceof HTMLInputElement) {
          drawer.checked = false;
        }
      });
    };

    document.addEventListener("click", closeDrawers);

    return () => {
      document.removeEventListener("click", closeDrawers);
    };
  }, []);

  return null;
}
