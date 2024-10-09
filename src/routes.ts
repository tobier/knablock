import { Component } from "solid-js";

import { Radio } from "./pages";

type Route = {
    path: string;
    text: string;
    icon: string;
    component: Component;
};

export const routes: Route[] = [
    {
        component: Radio,
        path: "/",
        text: "Comms",
        icon: "radio-tower",
    },
];
