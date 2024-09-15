import type { Component } from "solid-js";
import "flowbite";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
