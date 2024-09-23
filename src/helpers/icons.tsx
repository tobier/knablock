import { VsRadioTower, VsTable } from "solid-icons/vs";

const default_class =
  "w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500";

export const asIcon = (icon: string) => {
  switch (icon) {
    case "radio-tower":
      return <VsRadioTower class={default_class} />;
    case "table":
      return <VsTable class={default_class} />;
    default:
      throw new Error("unknown icon: " + icon);
  }
};
