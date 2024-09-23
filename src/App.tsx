import { For, type Component, type JSX } from "solid-js";
import { A } from "@solidjs/router";

import styles from "./App.module.css";

import { asIcon } from "./helpers";
import { routes } from "./routes";

const NavItem: Component<{ path: string; text: string; icon: string }> = (
  props
) => {
  return (
    <A
      href={props.path}
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {asIcon(props.icon)}
      <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        {props.text}
      </span>
    </A>
  );
};

const Navbar: Component = () => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
        <For each={routes}>
          {(route) => (
            <NavItem path={route.path} text={route.text} icon={route.icon} />
          )}
        </For>
      </div>
    </div>
  );
};

const App: Component = (props: { children?: JSX.Element }) => {
  return (
    <div class={styles.App}>
      <div style={{ flex: 1 }}>{props.children}</div>
      <Navbar />
    </div>
  );
};

export default App;
