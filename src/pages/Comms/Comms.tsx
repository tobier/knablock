import { For, type Component } from "solid-js";

import styles from "./Comms.module.css";

import { commsLadder } from "../../types/comms";

export const Comms: Component = () => {
  return (
    <div class={styles.Wrapper}>
      <table class="w-full text-2xl text-left rtl:text-right text-black dark:text-black border-collapse border border-spacing-10">
        <thead class="text-white dark:text-white">
          <tr class="text-center bg-black uppercase">
            <th scope="rowgroup" colSpan={4} class="px-6 py-1">
              Comm Ladder
            </th>
          </tr>
          <tr class="text-white dark:text-white bg-black">
            <th scope="col" class="px-6 py-1">
              Agency
            </th>
            <th scope="col" class="px-6 py-1">
              Callsign
            </th>
            <th scope="col" class="px-6 py-1">
              UHF [Ch]
            </th>
            <th scope="col" class="px-6 py-1">
              VHF [Ch]
            </th>
          </tr>
        </thead>
        <tbody>
          <For each={commsLadder}>
            {(comm) => (
              <tr class="odd:bg-gray-light even:bg-gray-dark">
                <td class="px-5 py-1">{comm.Agency}</td>
                <td class="px-5 py-1">{comm.Callsign}</td>
                <td class="px-5 py-1">{comm.UHF}</td>
                <td class="px-5 py-1">{comm.VHF}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
