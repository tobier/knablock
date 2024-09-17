import type { Component, JSX } from "solid-js";

import styles from "./App.module.css";
import { Navbar } from "./components";

const App: Component = (props: { children?: JSX.Element }) => {
  return (
    <div class={styles.App}>
      <div style={{ flex: 1 }}>{props.children}</div>
      <Navbar />
    </div>
  );
};

export default App;
