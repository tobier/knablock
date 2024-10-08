import { Component } from "solid-js";

import { Comms } from "./pages";

type Route = {
    path: string;
    text: string;
    icon: string;
    component: Component;
};

export const routes: Route[] = [
    {
        component: Comms,
        path: "/comms",
        text: "Comm Ladder",
        icon: "radio-tower",
    },
];
