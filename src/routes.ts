import { Component } from "solid-js";

import { Flightplan, Radio } from "./pages";

type Route = {
    path: string;
    text: string;
    icon: string;
    component: Component;
};

export const routes: Route[] = [
    {
        component: Radio,
        path: "/radio",
        text: "Comms",
        icon: "radio-tower",
    },
    {
        component: Flightplan,
        path: "/flightplan",
        text: "Flightplan",
        icon: "table",
    }
];
