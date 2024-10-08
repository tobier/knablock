export type Comm = {
    Agency: string;
    Callsign: string;
    UHF: string;
    VHF: string;
}

// this is just a test ladder
export const commsLadder: Comm[] = [
    {
        "Agency": "Intra-Flight",
        "Callsign": "Hammer2",
        "UHF": "--",
        "VHF": "140.550 MHz [18]"
    },
    {
        "Agency": "Guard",
        "Callsign": "None",
        "UHF": "243.000 MHz ",
        "VHF": "121.500 MHz [13]"
    },
    {
        "Agency": "Common",
        "Callsign": "None",
        "UHF": "339.750 MHz [14]",
        "VHF": "123.500 MHz [14]"
    },
    {
        "Agency": "Base Ops",
        "Callsign": "None",
        "UHF": "234.950 MHz [1]",
        "VHF": "--"
    },
    {
        "Agency": "Check-In",
        "Callsign": "Magic4",
        "UHF": "376.675 MHz [5]",
        "VHF": "--"
    },
    {
        "Agency": "Tactical",
        "Callsign": "Magic4",
        "UHF": "386.925 MHz [6]",
        "VHF": "--"
    },
    {
        "Agency": "Tanker / Aar",
        "Callsign": "Copper5",
        "UHF": "381.975 MHz [13]",
        "VHF": "--"
    },
    {
        "Agency": "Dep Atis",
        "Callsign": "Choongwon ATIS",
        "UHF": "--",
        "VHF": "135.600 MHz"
    },
    {
        "Agency": "Dep Ground",
        "Callsign": "Choongwon Ground",
        "UHF": "275.900 MHz [2]",
        "VHF": "--"
    },
    {
        "Agency": "Dep Tower",
        "Callsign": "Choongwon Tower",
        "UHF": "230.150 MHz [3]",
        "VHF": "126.200 MHz [3]"
    },
    {
        "Agency": "Dep Departure",
        "Callsign": "Choongwon Departure",
        "UHF": "306.700 MHz [4]",
        "VHF": "--"
    },
    {
        "Agency": "Arr Atis",
        "Callsign": "Choongwon ATIS",
        "UHF": "--",
        "VHF": "135.600 MHz"
    },
    {
        "Agency": "Arr Approach",
        "Callsign": "Choongwon Approach",
        "UHF": "306.700 MHz [4]",
        "VHF": "--"
    },
    {
        "Agency": "Arr Tower",
        "Callsign": "Choongwon Tower",
        "UHF": "230.150 MHz [3]",
        "VHF": "126.200 MHz [3]"
    },
    {
        "Agency": "Arr Ground",
        "Callsign": "Choongwon Ground",
        "UHF": "275.900 MHz [2]",
        "VHF": "--"
    },
    {
        "Agency": "Alt Atis",
        "Callsign": "R605 ATIS",
        "UHF": "--",
        "VHF": "--"
    },
    {
        "Agency": "Alt Approach",
        "Callsign": "R605 Approach",
        "UHF": "233.800 MHz [10]",
        "VHF": "--"
    },
    {
        "Agency": "Alt Tower",
        "Callsign": "R605 Tower",
        "UHF": "233.800 MHz [10]",
        "VHF": "122.800 MHz [11]"
    },
    {
        "Agency": "Alt Ground",
        "Callsign": "R605 Ground",
        "UHF": "233.800 MHz [10]",
        "VHF": "--"
    }
];