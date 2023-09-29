const elements = [
    {
        "name": "Hydrogen",
        "symbol": "H",
        "number": 1,
        "protons": 1,
        "neutrons": 0,
        "electronConfigurations": "1s1",
        "liquidTemperature": {
        "F": -434.45,
        "C": -259.16,
        "K": 14.01,
        "R": 25.22
        },
        "gasTemperature": {
        "F": -423.67,
        "C": -252.87,
        "K": 20.28,
        "R": 36.50
        },
        "standardCharge": 1,
        "molarMass": 1.008,
        "family": "Hydrogen"
    },
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
    {
        "name": "Helium",
        "symbol": "He",
        "number": 2,
        "protons": 2,
        "neutrons": 2,
        "electronConfigurations": "1s2",
        "liquidTemperature": {
        "F": -457.87,
        "C": -272.20,
        "K": 1.00,
        "R": 1.80
        },
        "gasTemperature": {
        "F": -450.45,
        "C": -268.93,
        "K": 4.22,
        "R": 7.60
        },
        "standardCharge": 0,
        "molarMass": 4.003,
        "family": "Noble Gas"
    },
    {
        "name": "Lithium",
        "symbol": "Li",
        "number": 3,
        "protons": 3,
        "neutrons": 4,
        "electronConfigurations": "[He] 2s1",
        "liquidTemperature": {
        "F": 1119.02,
        "C": 454.00,
        "K": 727.00,
        "R": 1308.60
        },
        "gasTemperature": {
        "F": 2441.00,
        "C": 1331.00,
        "K": 1604.00,
        "R": 2887.20
        },
        "standardCharge": 1,
        "molarMass": 6.941,
        "family": "Alkali"
    },
    {
        "name": "Beryllium",
        "symbol": "Be",
        "number": 4,
        "protons": 4,
        "neutrons": 5,
        "electronConfigurations": "1s2 2s2",
        "liquidTemperature": {
        "F": 2344.6,
        "C": 1287,
        "K": 1560,
        "R": 2808
        },
        "gasTemperature": {
        "F": 4473.4,
        "C": 2469.85,
        "K": 2743,
        "R": 4937.4
        },
        "standardCharge": 2,
        "molarMass": 9.012,
        "family": "Alkaline Earth Metal"
    },
    {},{},{},{},{},{},{},{},{},{},
    {
        "name": "Boron",
        "symbol": "B",
        "number": 5,
        "protons": 5,
        "neutrons": 6,
        "electronConfigurations": "1s2 2s2 2p1",
        "liquidTemperature": {
        "F": 3927,
        "C": 2162,
        "K": 2435,
        "R": 4383
        },
        "gasTemperature": {
        "F": 7101,
        "C": 3927,
        "K": 4200,
        "R": 7560
        },
        "standardCharge": 3,
        "molarMass": 10.811,
        "family": "Metalloid"
    },
    {
        "name": "Carbon",
        "symbol": "C",
        "number": 6,
        "protons": 6,
        "neutrons": 6,
        "electronConfigurations": "1s2 2s2 2p2",
        "liquidTemperature": {
        "F": "Sublimation",
        "C": "Sublimation",
        "K": "Sublimation",
        "R": "Sublimation"
        },
        "gasTemperature": {
        "F": 6917,
        "C": 3825,
        "K": 4098,
        "R": 7376.4
        },
        "standardCharge": 4,
        "molarMass": 12.011,
        "family": "Metalloid"
    },
    {
        "name": "Nitrogen",
        "symbol": "N",
        "number": 7,
        "protons": 7,
        "neutrons": 7,
        "electronConfigurations": "1s2 2s2 2p3",
        "liquidTemperature": {
        "F": -346,
        "C": -210,
        "K": 63,
        "R": 113.4
        },
        "gasTemperature": {
        "F": -320.44,
        "C": -195.8,
        "K": 77.4,
        "R": 139.3
        },
        "standardCharge": -3,
        "molarMass": 14.007,
        "family": "Pnictogen"
    },
    {
        "name": "Oxygen",
        "symbol": "O",
        "number": 8,
        "protons": 8,
        "neutrons": 8,
        "electronConfigurations": "1s2 2s2 2p4",
        "liquidTemperature": {
        "F": -361.82,
        "C": -218.79,
        "K": 54.36,
        "R": 97.85
        },
        "gasTemperature": {
        "F": -297.33,
        "C": -183.0,
        "K": 90.20,
        "R": 162.36
        },
        "standardCharge": -2,
        "molarMass": 15.999,
        "family": "Chalcogen"
    },
    {
        "name": "Fluorine",
        "symbol": "F",
        "number": 9,
        "protons": 9,
        "neutrons": 10,
        "electronConfigurations": "1s2 2s2 2p5",
        "liquidTemperature": {
        "F": -361.82,
        "C": -219.67,
        "K": 53.48,
        "R": 96.26
        },
        "gasTemperature": {
        "F": -306.62,
        "C": -188.12,
        "K": 85.03,
        "R": 153.05
        },
        "standardCharge": -1,
        "molarMass": 18.998,
        "family": "Halogen"
    },
    {
        "name": "Neon",
        "symbol": "Ne",
        "number": 10,
        "protons": 10,
        "neutrons": 10,
        "electronConfigurations": "1s2 2s2 2p6",
        "liquidTemperature": {
        "F": -410.66,
        "C": -246.04,
        "K": 27.11,
        "R": 48.80
        },
        "gasTemperature": {
        "F": -410.89,
        "C": -246.08,
        "K": 27.07,
        "R": 48.73
        },
        "standardCharge": 0,
        "molarMass": 20.180,
        "family": "Noble Gas"
    },
    {
        "name": "Sodium",
        "symbol": "Na",
        "number": 11,
        "protons": 11,
        "neutrons": 12,
        "electronConfigurations": "1s2 2s2 2p6 3s1",
        "liquidTemperature": {
        "F": 1616,
        "C": 880.37,
        "K": 1153.52,
        "R": 2076.34
        },
        "gasTemperature": {
        "F": 1656.8,
        "C": 892.8,
        "K": 1165.8,
        "R": 2101.4
        },
        "standardCharge": 1,
        "molarMass": 22.990,
        "family": "Alkali"
    },
    {
        "name": "Magnesium",
        "symbol": "Mg",
        "number": 12,
        "protons": 12,
        "neutrons": 12,
        "electronConfigurations": "1s2 2s2 2p6 3s2",
        "liquidTemperature": {
        "F": 1201.6,
        "C": 650.9,
        "K": 924.05,
        "R": 1663.3
        },
        "gasTemperature": {
        "F": 1994,
        "C": 1091,
        "K": 1364,
        "R": 2455.2
        },
        "standardCharge": 2,
        "molarMass": 24.305,
        "family": "Alkaline Earth Metal"
    },
    {},{},{},{},{},{},{},{},{},{},
    {
        "name": "Aluminum",
        "symbol": "Al",
        "number": 13,
        "protons": 13,
        "neutrons": 14,
        "electronConfigurations": "1s2 2s2 2p6 3s2 3p1",
        "liquidTemperature": {
        "F": 1220.6,
        "C": 660.32,
        "K": 933.47,
        "R": 1680.25
        },
        "gasTemperature": {
        "F": 4566.8,
        "C": 2519,
        "K": 2792,
        "R": 5025.6
        },
        "standardCharge": 3,
        "molarMass": 26.982,
        "family": "Post-Transition Metal"
    },
    {
        "name": "Silicon",
        "symbol": "Si",
        "number": 14,
        "protons": 14,
        "neutrons": 14,
        "electronConfigurations": "1s2 2s2 2p6 3s2 3p2",
        "liquidTemperature": {
        "F": 2577,
        "C": 1414,
        "K": 1687,
        "R": 3036.6
        },
        "gasTemperature": {
        "F": 5909.4,
        "C": 3265,
        "K": 3538,
        "R": 6368.4
        },
        "standardCharge": 4,
        "molarMass": 28.086,
        "family": "Metalloid"
    },
    {
    "name": "Phosphorus",
    "symbol": "P",
    "number": 15,
    "protons": 15,
    "neutrons": 16,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p3",
    "liquidTemperature": {
        "F": 111.2,
        "C": 44,
        "K": 317.15,
        "R": 570.87
    },
    "gasTemperature": {
        "F": 553.4,
        "C": 280,
        "K": 553,
        "R": 995.4
    },
    "standardCharge": -3,
    "molarMass": 30.974,
    "family": "Pnictogen"
    },
    {
    "name": "Sulfur",
    "symbol": "S",
    "number": 16,
    "protons": 16,
    "neutrons": 16,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p4",
    "liquidTemperature": {
        "F": 239,
        "C": 115.21,
        "K": 388.36,
        "R": 698.85
    },
    "gasTemperature": {
        "F": 832.3,
        "C": 444.6,
        "K": 717.8,
        "R": 1292.04
    },
    "standardCharge": -2,
    "molarMass": 32.065,
    "family": "Chalcogen"
    },
    {
    "name": "Chlorine",
    "symbol": "Cl",
    "number": 17,
    "protons": 17,
    "neutrons": 18,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p5",
    "liquidTemperature": {
        "F": -149.8,
        "C": -101,
        "K": 172.15,
        "R": 309.87
    },
    "gasTemperature": {
        "F": -29,
        "C": -34,
        "K": 239.11,
        "R": 430.4
    },
    "standardCharge": -1,
    "molarMass": 35.453,
    "family": "Halogen"
    },
    {
    "name": "Argon",
    "symbol": "Ar",
    "number": 18,
    "protons": 18,
    "neutrons": 22,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6",
    "liquidTemperature": {
        "F": -302.6,
        "C": -185.85,
        "K": 87.3,
        "R": 157.14
    },
    "gasTemperature": {
        "F": -302.5,
        "C": -185.7,
        "K": 87.45,
        "R": 157.41
    },
    "standardCharge": 0,
    "molarMass": 39.948,
    "family": "Noble Gas"
    },
    {
    "name": "Potassium",
    "symbol": "K",
    "number": 19,
    "protons": 19,
    "neutrons": 20,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s1",
    "liquidTemperature": {
        "F": 145.4,
        "C": 63,
        "K": 336.15,
        "R": 604.67
    },
    "gasTemperature": {
        "F": 1418,
        "C": 770,
        "K": 1043,
        "R": 1877.4
    },
    "standardCharge": 1,
    "molarMass": 39.098,
    "family": "Alkali"
    },
    {
    "name": "Calcium",
    "symbol": "Ca",
    "number": 20,
    "protons": 20,
    "neutrons": 20,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2",
    "liquidTemperature": {
        "F": 1547.6,
        "C": 842,
        "K": 1115.15,
        "R": 2007.27
    },
    "gasTemperature": {
        "F": 2705,
        "C": 1484,
        "K": 1757,
        "R": 3162.6
    },
    "standardCharge": 2,
    "molarMass": 40.078,
    "family": "Alkaline Earth Metal"
    },
    {
    "name": "Scandium",
    "symbol": "Sc",
    "number": 21,
    "protons": 21,
    "neutrons": 24,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    "liquidTemperature": {
        "F": 2807,
        "C": 1541,
        "K": 1814,
        "R": 3265.2
    },
    "gasTemperature": {
        "F": 5017,
        "C": 2831,
        "K": 3104,
        "R": 5587.2
    },
    "standardCharge": 3,
    "molarMass": 44.956,
    "family": "Transition Metal"
    },
    {
    "name": "Titanium",
    "symbol": "Ti",
    "number": 22,
    "protons": 22,
    "neutrons": 26,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    "liquidTemperature": {
        "F": 3034,
        "C": 1668,
        "K": 1941,
        "R": 3493.8
    },
    "gasTemperature": {
        "F": 5941.4,
        "C": 3287,
        "K": 3560,
        "R": 6408
    },
    "standardCharge": 4,
    "molarMass": 47.867,
    "family": "Transition Metal"
    },
    {
    "name": "Vanadium",
    "symbol": "V",
    "number": 23,
    "protons": 23,
    "neutrons": 28,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    "liquidTemperature": {
        "F": 3469,
        "C": 1910,
        "K": 2183,
        "R": 3930.4
    },
    "gasTemperature": {
        "F": 6158,
        "C": 3407,
        "K": 3680,
        "R": 6624
    },
    "standardCharge": 5,
    "molarMass": 50.942,
    "family": "Transition Metal"
    },
    {
    "name": "Chromium",
    "symbol": "Cr",
    "number": 24,
    "protons": 24,
    "neutrons": 28,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
    "liquidTemperature": {
        "F": 3465,
        "C": 1907,
        "K": 2180,
        "R": 3924
    },
    "gasTemperature": {
        "F": 4840,
        "C": 2671,
        "K": 2944,
        "R": 5303.2
    },
    "standardCharge": 6,
    "molarMass": 51.996,
    "family": "Transition Metal"
    },
    {
    "name": "Manganese",
    "symbol": "Mn",
    "number": 25,
    "protons": 25,
    "neutrons": 30,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    "liquidTemperature": {
        "F": 2795,
        "C": 1534,
        "K": 1807,
        "R": 3252.6
    },
    "gasTemperature": {
        "F": 4370.6,
        "C": 2413,
        "K": 2686,
        "R": 4834.8
    },
    "standardCharge": 7,
    "molarMass": 54.938,
    "family": "Transition Metal"
    },
    {
    "name": "Iron",
    "symbol": "Fe",
    "number": 26,
    "protons": 26,
    "neutrons": 30,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    "liquidTemperature": {
        "F": 2800,
        "C": 1538,
        "K": 1811,
        "R": 3259.8
    },
    "gasTemperature": {
        "F": 5185.6,
        "C": 2861,
        "K": 3134,
        "R": 5641.2
    },
    "standardCharge": 3,
    "molarMass": 55.845,
    "family": "Transition Metal"
    },
    {
    "name": "Cobalt",
    "symbol": "Co",
    "number": 27,
    "protons": 27,
    "neutrons": 32,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    "liquidTemperature": {
        "F": 3143,
        "C": 1728,
        "K": 2001,
        "R": 3601.8
    },
    "gasTemperature": {
        "F": 5271,
        "C": 2913,
        "K": 3186,
        "R": 5734.8
    },
    "standardCharge": 3,
    "molarMass": 58.933,
    "family": "Transition Metal"
    },
    {
    "name": "Nickel",
    "symbol": "Ni",
    "number": 28,
    "protons": 28,
    "neutrons": 31,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    "liquidTemperature": {
        "F": 2650.6,
        "C": 1455,
        "K": 1728.15,
        "R": 3109.67
    },
    "gasTemperature": {
        "F": 5071.4,
        "C": 2795,
        "K": 3068,
        "R": 5522.4
    },
    "standardCharge": 2,
    "molarMass": 58.693,
    "family": "Transition Metal"
    },
    {
    "name": "Copper",
    "symbol": "Cu",
    "number": 29,
    "protons": 29,
    "neutrons": 35,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
    "liquidTemperature": {
        "F": 2357.4,
        "C": 1295,
        "K": 1568.15,
        "R": 2822.67
    },
    "gasTemperature": {
        "F": 4643,
        "C": 2562,
        "K": 2835,
        "R": 5103
    },
    "standardCharge": 2,
    "molarMass": 63.546,
    "family": "Coinage"
    },
    {
    "name": "Zinc",
    "symbol": "Zn",
    "number": 30,
    "protons": 30,
    "neutrons": 35,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    "liquidTemperature": {
        "F": 787.6,
        "C": 419.53,
        "K": 692.68,
        "R": 1246.82
    },
    "gasTemperature": {
        "F": 1665,
        "C": 907,
        "K": 1180,
        "R": 2124
    },
    "standardCharge": 2,
    "molarMass": 65.380,
    "family": "Transition Metal"
    },
    {
    "name": "Gallium",
    "symbol": "Ga",
    "number": 31,
    "protons": 31,
    "neutrons": 39,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    "liquidTemperature": {
        "F": 85.576,
        "C": 29.76,
        "K": 302.91,
        "R": 544.24
    },
    "gasTemperature": {
        "F": 4351.6,
        "C": 2403,
        "K": 2676,
        "R": 4816.8
    },
    "standardCharge": 3,
    "molarMass": 69.723,
    "family": "Post-Transition Metal"
    },
    {
    "name": "Germanium",
    "symbol": "Ge",
    "number": 32,
    "protons": 32,
    "neutrons": 41,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    "liquidTemperature": {
        "F": 1685,
        "C": 938,
        "K": 1211,
        "R": 2179.8
    },
    "gasTemperature": {
        "F": 4829,
        "C": 2659,
        "K": 2932,
        "R": 5277.6
    },
    "standardCharge": 4,
    "molarMass": 72.64,
    "family": "Metalloid"
    },
    {
    "name": "Arsenic",
    "symbol": "As",
    "number": 33,
    "protons": 33,
    "neutrons": 42,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    "liquidTemperature": {
        "F": 1479,
        "C": 814,
        "K": 1087,
        "R": 1956.6
    },
    "gasTemperature": {
        "F": 1148,
        "C": 887,
        "K": 1160,
        "R": 2088
    },
    "standardCharge": 3,
    "molarMass": 74.922,
    "family": "Pnictogen"
    },
    {
    "name": "Selenium",
    "symbol": "Se",
    "number": 34,
    "protons": 34,
    "neutrons": 45,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    "liquidTemperature": {
        "F": 958,
        "C": 490,
        "K": 763,
        "R": 1373.4
    },
    "gasTemperature": {
        "F": 1274,
        "C": 685,
        "K": 958,
        "R": 1724.4
    },
    "standardCharge": -2,
    "molarMass": 78.971,
    "family": "Chalcogen"
    },
    {
    "name": "Bromine",
    "symbol": "Br",
    "number": 35,
    "protons": 35,
    "neutrons": 44,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    "liquidTemperature": {
        "F": 19,
        "C": -7.2,
        "K": 265.95,
        "R": 478.71
    },
    "gasTemperature": {
        "F": 137.8,
        "C": 58.8,
        "K": 331.95,
        "R": 597.51
    },
    "standardCharge": -1,
    "molarMass": 79.904,
    "family": "Halogen"
    },
    {
    "name": "Krypton",
    "symbol": "Kr",
    "number": 36,
    "protons": 36,
    "neutrons": 48,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    "liquidTemperature": {
        "F": -251.5,
        "C": -157.5,
        "K": 115.65,
        "R": 208.17
    },
    "gasTemperature": {
        "F": -243.9,
        "C": -153.3,
        "K": 119.85,
        "R": 215.73
    },
    "standardCharge": 0,
    "molarMass": 83.798,
    "family": "Noble Gas"
    },
    {
    "name": "Rubidium",
    "symbol": "Rb",
    "number": 37,
    "protons": 37,
    "neutrons": 48,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    "liquidTemperature": {
        "F": 102.5,
        "C": 39.3,
        "K": 312.45,
        "R": 562.41
    },
    "gasTemperature": {
        "F": 1384,
        "C": 750,
        "K": 1023,
        "R": 1841.4
    },
    "standardCharge": 1,
    "molarMass": 85.468,
    "family": "Alkali"
    },
    {
    "name": "Strontium",
    "symbol": "Sr",
    "number": 38,
    "protons": 38,
    "neutrons": 50,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    "liquidTemperature": {
        "F": 1436,
        "C": 777,
        "K": 1050,
        "R": 1890
    },
    "gasTemperature": {
        "F": 4531,
        "C": 2500,
        "K": 2773,
        "R": 4991.4
    },
    "standardCharge": 2,
    "molarMass": 87.620,
    "family": "Alkaline Earth Metal"
    },
    {
        "name": "Yttrium",
        "symbol": "Y",
        "number": 39,
        "protons": 39,
        "neutrons": 50,
        "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        "liquidTemperature": {
            "F": 3337,
            "C": 1830,
            "K": 2103,
            "R": 3785.4
        },
        "gasTemperature": {
            "F": 6101,
            "C": 3377,
            "K": 3650,
            "R": 6570
        },
        "standardCharge": 3,
        "molarMass": 88.906,
        "family": "Transition Metal"
    },
    {
    "name": "Zirconium",
    "symbol": "Zr",
    "number": 40,
    "protons": 40,
    "neutrons": 51,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
    "liquidTemperature": {
        "F": 3566.8,
        "C": 1855,
        "K": 2128.15,
        "R": 3830.67
    },
    "gasTemperature": {
        "F": 7879.6,
        "C": 4375,
        "K": 4648,
        "R": 8366.4
    },
    "standardCharge": 4,
    "molarMass": 91.224,
    "family": "Transition Metal"
    },
    {
    "name": "Niobium",
    "symbol": "Nb",
    "number": 41,
    "protons": 41,
    "neutrons": 52,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    "liquidTemperature": {
        "F": 4745,
        "C": 2477,
        "K": 2750,
        "R": 4950
    },
    "gasTemperature": {
        "F": 8633,
        "C": 4742,
        "K": 5015,
        "R": 9027
    },
    "standardCharge": 5,
    "molarMass": 92.906,
    "family": "Transition Metal"
    },
    {
    "name": "Molybdenum",
    "symbol": "Mo",
    "number": 42,
    "protons": 42,
    "neutrons": 54,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "liquidTemperature": {
        "F": 4751,
        "C": 2623,
        "K": 2896,
        "R": 5208.8
    },
    "gasTemperature": {
        "F": 8372,
        "C": 4612,
        "K": 4885,
        "R": 8793
    },
    "standardCharge": 6,
    "molarMass": 95.950,
    "family": "Transition Metal"
    },
    {
    "name": "Technetium",
    "symbol": "Tc",
    "number": 43,
    "protons": 43,
    "neutrons": 55, // most stable isotope
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "liquidTemperature": {
        "F": 4100,
        "C": 2250,
        "K": 2523,
        "R": 4541.4
    },
    "gasTemperature": {
        "F": 7860,
        "C": 4300,
        "K": 4573,
        "R": 8231.4
    },
    "standardCharge": 7,
    "molarMass": 98.000,
    "family": "Transition Metal"
    },
    {
    "name": "Ruthenium",
    "symbol": "Ru",
    "number": 44,
    "protons": 44,
    "neutrons": 57,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    "liquidTemperature": {
        "F": 4154,
        "C": 2286,
        "K": 2559,
        "R": 4606.2
    },
    "gasTemperature": {
        "F": 7502,
        "C": 4095,
        "K": 4368,
        "R": 7862.4
    },
    "standardCharge": 8,
    "molarMass": 101.070,
    "family": "Transition Metal"
    },
    {
    "name": "Rhodium",
    "symbol": "Rh",
    "number": 45,
    "protons": 45,
    "neutrons": 58,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    "liquidTemperature": {
        "F": 4007,
        "C": 2207,
        "K": 2480,
        "R": 4464
    },
    "gasTemperature": {
        "F": 6680,
        "C": 3668,
        "K": 3941,
        "R": 7093.8
    },
    "standardCharge": 3,
    "molarMass": 102.906,
    "family": "Transition Metal"
    },
    {
    "name": "Palladium",
    "symbol": "Pd",
    "number": 46,
    "protons": 46,
    "neutrons": 60,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s0 4d10",
    "liquidTemperature": {
        "F": 2830,
        "C": 1554,
        "K": 1827,
        "R": 3288.6
    },
    "gasTemperature": {
        "F": 6171,
        "C": 3390,
        "K": 3663,
        "R": 6593.4
    },
    "standardCharge": 2,
    "molarMass": 106.420,
    "family": "Transition Metal"
    },    
    {
    "name": "Silver",
    "symbol": "Ag",
    "number": 47,
    "protons": 47,
    "neutrons": 60,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
    "liquidTemperature": {
        "F": 1763.2,
        "C": 961.8,
        "K": 1235,
        "R": 2223
    },
    "gasTemperature": {
        "F": 4017.6,
        "C": 2212,
        "K": 2485,
        "R": 4473
    },
    "standardCharge": 1,
    "molarMass": 107.868,
    "family": "Coinage"
    },
    {
    "name": "Cadmium",
    "symbol": "Cd",
    "number": 48,
    "protons": 48,
    "neutrons": 64,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    "liquidTemperature": {
        "F": 609.8,
        "C": 321,
        "K": 594.15,
        "R": 1069.47
    },
    "gasTemperature": {
        "F": 1418,
        "C": 770,
        "K": 1043,
        "R": 1877.4
    },
    "standardCharge": 2,
    "molarMass": 112.411,
    "family": "Transition Metal"
    },
    {
    "name": "Indium",
    "symbol": "In",
    "number": 49,
    "protons": 49,
    "neutrons": 66,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
    "liquidTemperature": {
        "F": 313.6,
        "C": 156.6,
        "K": 429.75,
        "R": 773.55
    },
    "gasTemperature": {
        "F": 3761,
        "C": 2072,
        "K": 2345,
        "R": 4221
    },
    "standardCharge": 3,
    "molarMass": 114.818,
    "family": "Post-Transition Metal"
    },
    {
    "name": "Tin",
    "symbol": "Sn",
    "number": 50,
    "protons": 50,
    "neutrons": 69,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    "liquidTemperature": {
        "F": 449.4,
        "C": 231.9,
        "K": 505.05,
        "R": 909.09
    },
    "gasTemperature": {
        "F": 4648.6,
        "C": 2562,
        "K": 2835,
        "R": 5103
    },
    "standardCharge": 4,
    "molarMass": 118.710,
    "family": "Post-Transition Metal"
    },
    {
    "name": "Antimony",
    "symbol": "Sb",
    "number": 51,
    "protons": 51,
    "neutrons": 71,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    "liquidTemperature": {
        "F": 1167,
        "C": 630.63,
        "K": 903.78,
        "R": 1626.8
    },
    "gasTemperature": {
        "F": 2900,
        "C": 1587,
        "K": 1860,
        "R": 3348
    },
    "standardCharge": 3,
    "molarMass": 121.760,
    "family": "Pnictogen"
    },
    {
    "name": "Tellurium",
    "symbol": "Te",
    "number": 52,
    "protons": 52,
    "neutrons": 76,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    "liquidTemperature": {
        "F": 1813,
        "C": 988,
        "K": 1261,
        "R": 2270
    },
    "gasTemperature": {
        "F": 1981.6,
        "C": 1083,
        "K": 1356,
        "R": 2437
    },
    "standardCharge": 2,
    "molarMass": 127.600,
    "family": "Chalcogen"
    },
    {
    "name": "Iodine",
    "symbol": "I",
    "number": 53,
    "protons": 53,
    "neutrons": 74,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    "liquidTemperature": {
        "F": 239.3,
        "C": 113.5,
        "K": 386.65,
        "R": 696
    },
    "gasTemperature": {
        "F": 363.2,
        "C": 184,
        "K": 457.15,
        "R": 823
    },
    "standardCharge": -1,
    "molarMass": 126.904,
    "family": "Halogen"
    },
    {
    "name": "Xenon",
    "symbol": "Xe",
    "number": 54,
    "protons": 54,
    "neutrons": 77,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    "liquidTemperature": {
        "F": -162.6,
        "C": -108.1,
        "K": 165.05,
        "R": 297.09
    },
    "gasTemperature": {
        "F": -162,
        "C": -108,
        "K": 165.1,
        "R": 297.18
    },
    "standardCharge": 0,
    "molarMass": 131.293,
    "family": "Noble Gas"
    },
    {
    "name": "Cesium",
    "symbol": "Cs",
    "number": 55,
    "protons": 55,
    "neutrons": 78,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    "liquidTemperature": {
        "F": 83.3,
        "C": 28.5,
        "K": 301.65,
        "R": 542.97
    },
    "gasTemperature": {
        "F": 1340,
        "C": 727,
        "K": 1000,
        "R": 1800
    },
    "standardCharge": 1,
    "molarMass": 132.905,
    "family": "Alkali"
    },
    {
    "name": "Barium",
    "symbol": "Ba",
    "number": 56,
    "protons": 56,
    "neutrons": 82,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    "liquidTemperature": {
        "F": 1341,
        "C": 727,
        "K": 1000,
        "R": 1800
    },
    "gasTemperature": {
        "F": 3446,
        "C": 1897,
        "K": 2170,
        "R": 3906
    },
    "standardCharge": 2,
    "molarMass": 137.327,
    "family": "Alkaline Earth Metal"
    }, {} ,
    {
    "name": "Lanthanum",
    "symbol": "La",
    "number": 57,
    "protons": 57,
    "neutrons": 82,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1",
    "liquidTemperature": {
        "F": 3464,
        "C": 1903,
        "K": 2176,
        "R": 3916.8
    },
    "gasTemperature": {
        "F": 6173,
        "C": 3403,
        "K": 3676,
        "R": 6616.8
    },
    "standardCharge": 3,
    "molarMass": 138.905,
    "family": "Lanthanide",
    isSeparate: true
    },
    {
    "name": "Cerium",
    "symbol": "Ce",
    "number": 58,
    "protons": 58,
    "neutrons": 82,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1 5d1",
    "liquidTemperature": {
        "F": 3464,
        "C": 1903,
        "K": 2176,
        "R": 3916.8
    },
    "gasTemperature": {
        "F": 6200,
        "C": 3416,
        "K": 3689,
        "R": 6640.2
    },
    "standardCharge": 4,
    "molarMass": 140.116,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Praseodymium",
    "symbol": "Pr",
    "number": 59,
    "protons": 59,
    "neutrons": 82,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    "liquidTemperature": {
        "F": 3304,
        "C": 1818,
        "K": 2091,
        "R": 3763.8
    },
    "gasTemperature": {
        "F": 6398,
        "C": 3534,
        "K": 3807,
        "R": 6852.6
    },
    "standardCharge": 3,
    "molarMass": 140.908,
    "family": "Lanthanide",
    isSeparate: true
    },
    {
    "name": "Neodymium",
    "symbol": "Nd",
    "number": 60,
    "protons": 60,
    "neutrons": 84,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    "liquidTemperature": {
        "F": 3097.4,
        "C": 1694,
        "K": 1967,
        "R": 3540.6
    },
    "gasTemperature": {
        "F": 5668.6,
        "C": 3127,
        "K": 3400,
        "R": 6120
    },
    "standardCharge": 3,
    "molarMass": 144.242,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Promethium",
    "symbol": "Pm",
    "number": 61,
    "protons": 61,
    "neutrons": 84,  // This is theoretical as all isotopes are radioactive
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 145,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Samarium",
    "symbol": "Sm",
    "number": 62,
    "protons": 62,
    "neutrons": 88,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    "liquidTemperature": {
        "F": 2358.6,
        "C": 1294,
        "K": 1567,
        "R": 2820.6
    },
    "gasTemperature": {
        "F": 5426,
        "C": 2990,
        "K": 3263,
        "R": 5873.4
    },
    "standardCharge": 3,
    "molarMass": 150.36,
    "family": "Lanthanide",
    isSeparate: true,
    },  
    {
    "name": "Europium",
    "symbol": "Eu",
    "number": 63,
    "protons": 63,
    "neutrons": 89,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    "liquidTemperature": {
        "F": 1569,
        "C": 852,
        "K": 1125,
        "R": 2025
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 151.964,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Gadolinium",
    "symbol": "Gd",
    "number": 64,
    "protons": 64,
    "neutrons": 93,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    "liquidTemperature": {
        "F": 2720,
        "C": 1484,
        "K": 1757,
        "R": 3162.6
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 157.25,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Terbium",
    "symbol": "Tb",
    "number": 65,
    "protons": 65,
    "neutrons": 94,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    "liquidTemperature": {
        "F": 2530.4,
        "C": 1385,
        "K": 1658,
        "R": 2984.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 158.925,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Dysprosium",
    "symbol": "Dy",
    "number": 66,
    "protons": 66,
    "neutrons": 97,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    "liquidTemperature": {
        "F": 2579.6,
        "C": 1411,
        "K": 1684,
        "R": 3031.2
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 162.500,
    "family": "Lanthanide",
    isSeparate: true,
    },  
    {
    "name": "Holmium",
    "symbol": "Ho",
    "number": 67,
    "protons": 67,
    "neutrons": 98,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    "liquidTemperature": {
        "F": 2705.6,
        "C": 1481,
        "K": 1754,
        "R": 3157.2
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 164.930,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Erbium",
    "symbol": "Er",
    "number": 68,
    "protons": 68,
    "neutrons": 99,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    "liquidTemperature": {
        "F": 2869.6,
        "C": 1574,
        "K": 1847,
        "R": 3324.6
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 167.259,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Thulium",
    "symbol": "Tm",
    "number": 69,
    "protons": 69,
    "neutrons": 100,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    "liquidTemperature": {
        "F": 3213.2,
        "C": 1765,
        "K": 2038,
        "R": 3668.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 168.934,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Ytterbium",
    "symbol": "Yb",
    "number": 70,
    "protons": 70,
    "neutrons": 103,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    "liquidTemperature": {
        "F": 2621,
        "C": 1445,
        "K": 1718,
        "R": 3092.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 173.045,
    "family": "Lanthanide",
    isSeparate: true,
    },     
    {
    "name": "Lutetium",
    "symbol": "Lu",
    "number": 71,
    "protons": 71,
    "neutrons": 104,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    "liquidTemperature": {
        "F": 3319.4,
        "C": 1827,
        "K": 2100,
        "R": 3780
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 3,
    "molarMass": 174.967,
    "family": "Lanthanide",
    isSeparate: true,
    },
    {
    "name": "Hafnium",
    "symbol": "Hf",
    "number": 72,
    "protons": 72,
    "neutrons": 106,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    "liquidTemperature": {
        "F": 7058,
        "C": 3905,
        "K": 4178,
        "R": 7520.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 4,
    "molarMass": 178.490,
    "family": "Transition Metal"
    },
    {
    "name": "Tantalum",
    "symbol": "Ta",
    "number": 73,
    "protons": 73,
    "neutrons": 108,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    "liquidTemperature": {
        "F": 6171,
        "C": 3419,
        "K": 3692,
        "R": 6645.6
    },
    "gasTemperature": {
        "F": 9872,
        "C": 5458,
        "K": 5731,
        "R": 10315.8
    },
    "standardCharge": 5,
    "molarMass": 180.948,
    "family": "Transition Metal"
    },
    {
    "name": "Tungsten",
    "symbol": "W",
    "number": 74,
    "protons": 74,
    "neutrons": 110,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    "liquidTemperature": {
        "F": 6171,
        "C": 3419,
        "K": 3692,
        "R": 6645.6
    },
    "gasTemperature": {
        "F": 11084,
        "C": 6125,
        "K": 6398,
        "R": 11516.4
    },
    "standardCharge": 6,
    "molarMass": 183.840,
    "family": "Transition Metal"
    },  
    {
    "name": "Rhenium",
    "symbol": "Re",
    "number": 75,
    "protons": 75,
    "neutrons": 111,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    "liquidTemperature": {
        "F": 6450.8,
        "C": 3567,
        "K": 3840,
        "R": 6912
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 7,
    "molarMass": 186.207,
    "family": "Transition Metal"
    },
    {
    "name": "Osmium",
    "symbol": "Os",
    "number": 76,
    "protons": 76,
    "neutrons": 114,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    "liquidTemperature": {
        "F": 5631.6,
        "C": 3109,
        "K": 3382,
        "R": 6087.6
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 8,
    "molarMass": 190.230,
    "family": "Transition Metal"
    },
    {
    "name": "Iridium",
    "symbol": "Ir",
    "number": 77,
    "protons": 77,
    "neutrons": 115,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    "liquidTemperature": {
        "F": 4691.6,
        "C": 2585,
        "K": 2858,
        "R": 5144.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 4,
    "molarMass": 192.217,
    "family": "Transition Metal"
    },
    {
    "name": "Platinum",
    "symbol": "Pt",
    "number": 78,
    "protons": 78,
    "neutrons": 117,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
    "liquidTemperature": {
        "F": 4100.4,
        "C": 2257,
        "K": 2530,
        "R": 4554
    },
    "gasTemperature": {
        "F": 7351.6,
        "C": 4057,
        "K": 4330,
        "R": 7784
    },
    "standardCharge": 4,
    "molarMass": 195.084,
    "family": "Transition Metal"
    },   
    {
    "name": "Gold",
    "symbol": "Au",
    "number": 79,
    "protons": 79,
    "neutrons": 118,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
    "liquidTemperature": {
        "F": 2807.6,
        "C": 1557,
        "K": 1830,
        "R": 3294
    },
    "gasTemperature": {
        "F": 5171.6,
        "C": 2857,
        "K": 3130,
        "R": 5634
    },
    "standardCharge": 3,
    "molarMass": 196.967,
    "family": "Coinage"
    },
    {
    "name": "Mercury",
    "symbol": "Hg",
    "number": 80,
    "protons": 80,
    "neutrons": 121,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    "liquidTemperature": {
        "F": -37.9,
        "C": -38.9,
        "K": 234.1,
        "R": 421.3
    },
    "gasTemperature": {
        "F": 674,
        "C": 356.6,
        "K": 629.6,
        "R": 1133.3
    },
    "standardCharge": 2,
    "molarMass": 200.592,
    "family": "Transition Metal"
    },
    {
    "name": "Thallium",
    "symbol": "Tl",
    "number": 81,
    "protons": 81,
    "neutrons": 123,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    "liquidTemperature": {
        "F": 577,
        "C": 303,
        "K": 576,
        "R": 1036.8
    },
    "gasTemperature": {
        "F": 2543.6,
        "C": 1391,
        "K": 1664,
        "R": 2995.2
    },
    "standardCharge": 3,
    "molarMass": 204.383,
    "family": "Post-Transition Metal"
    },
    {
    "name": "Lead",
    "symbol": "Pb",
    "number": 82,
    "protons": 82,
    "neutrons": 125,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    "liquidTemperature": {
        "F": 621.2,
        "C": 327.5,
        "K": 600.5,
        "R": 1081.2
    },
    "gasTemperature": {
        "F": 3186.2,
        "C": 1749,
        "K": 2022,
        "R": 3639.6
    },
    "standardCharge": 4,
    "molarMass": 207.200,
    "family": "Post-Transition Metal"
    },           
    {
    "name": "Bismuth",
    "symbol": "Bi",
    "number": 83,
    "protons": 83,
    "neutrons": 126,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    "liquidTemperature": {
        "F": 1172.6,
        "C": 544,
        "K": 817,
        "R": 1470.6
    },
    "gasTemperature": {
        "F": 2840.2,
        "C": 1564,
        "K": 1837,
        "R": 3306.6
    },
    "standardCharge": 3,
    "molarMass": 208.980,
    "family": "Post-Transition Metal"
    },
    {
    "name": "Polonium",
    "symbol": "Po",
    "number": 84,
    "protons": 84,
    "neutrons": 125,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    "liquidTemperature": {
        "F": 482.6,
        "C": 254,
        "K": 527,
        "R": 948.6
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 4,
    "molarMass": 209,
    "family": "Chalcogen"
    },
    {
    "name": "Astatine",
    "symbol": "At",
    "number": 85,
    "protons": 85,
    "neutrons": 125,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    "liquidTemperature": {
        "F": 575.6,
        "C": 302,
        "K": 575,
        "R": 1035
    },
    "gasTemperature": {
        "F": 610,
        "C": 321,
        "K": 594,
        "R": 1070
    },
    "standardCharge": 1,
    "molarMass": 210,
    "family": "Halogen"
    },
    {
    "name": "Radon",
    "symbol": "Rn",
    "number": 86,
    "protons": 86,
    "neutrons": 136,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    "liquidTemperature": {
        "F": -130.2,
        "C": -89,
        "K": 184,
        "R": 331.2
    },
    "gasTemperature": {
        "F": -96.1,
        "C": -71.2,
        "K": 202,
        "R": 363.6
    },
    "standardCharge": 0,
    "molarMass": 222,
    "family": "Noble Gas"
    },
    {
    "name": "Francium",
    "symbol": "Fr",
    "number": 87,
    "protons": 87,
    "neutrons": 136,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    "liquidTemperature": {
        "F": 80,
        "C": 27,
        "K": 300,
        "R": 540
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 1,
    "molarMass": 223,
    "family": "Alkali"
    },
    {
    "name": "Radium",
    "symbol": "Ra",
    "number": 88,
    "protons": 88,
    "neutrons": 138,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    "liquidTemperature": {
        "F": 1292,
        "C": 700,
        "K": 973,
        "R": 1751.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 2,
    "molarMass": 226,
    "family": "Alkaline Earth Metal"
    }, {},
    {
    "name": "Actinium",
    "symbol": "Ac",
    "number": 89,
    "protons": 89,
    "neutrons": 138,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    "liquidTemperature": {
        "F": 2246.2,
        "C": 1227,
        "K": 1500,
        "R": 2700
    },
    "gasTemperature": {
        "F": 5654.6,
        "C": 3127,
        "K": 3400,
        "R": 6120
    },
    "standardCharge": 3,
    "molarMass": 227,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Thorium",
    "symbol": "Th",
    "number": 90,
    "protons": 90,
    "neutrons": 142,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    "liquidTemperature": {
        "F": 3186,
        "C": 1750,
        "K": 2023,
        "R": 3641.4
    },
    "gasTemperature": {
        "F": 8311.4,
        "C": 4598,
        "K": 4871,
        "R": 8767.8
    },
    "standardCharge": 4,
    "molarMass": 232.038,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Protactinium",
    "symbol": "Pa",
    "number": 91,
    "protons": 91,
    "neutrons": 140,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    "liquidTemperature": {
        "F": 2549.2,
        "C": 1395,
        "K": 1668,
        "R": 3002.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": 5,
    "molarMass": 231.036,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Uranium",
    "symbol": "U",
    "number": 92,
    "protons": 92,
    "neutrons": 146,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    "liquidTemperature": {
        "F": 2072,
        "C": 1132.8,
        "K": 1406,
        "R": 2531.6
    },
    "gasTemperature": {
        "F": 7460,
        "C": 4138,
        "K": 4411,
        "R": 7940
    },
    "standardCharge": 6,
    "molarMass": 238.029,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Neptunium",
    "symbol": "Np",
    "number": 93,
    "protons": 93,
    "neutrons": 144,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 237,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Plutonium",
    "symbol": "Pu",
    "number": 94,
    "protons": 94,
    "neutrons": 145,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    "liquidTemperature": {
        "F": 1355.6,
        "C": 737,
        "K": 910,
        "R": 1638
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 244,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Americium",
    "symbol": "Am",
    "number": 95,
    "protons": 95,
    "neutrons": 148,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    "liquidTemperature": {
        "F": 2017.6,
        "C": 1103,
        "K": 1376,
        "R": 2476.8
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 243,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Curium",
    "symbol": "Cm",
    "number": 96,
    "protons": 96,
    "neutrons": 151,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    "liquidTemperature": {
        "F": 2441.4,
        "C": 1340,
        "K": 1613,
        "R": 2903.4
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 247,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Berkelium",
    "symbol": "Bk",
    "number": 97,
    "protons": 97,
    "neutrons": 150,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 247,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Californium",
    "symbol": "Cf",
    "number": 98,
    "protons": 98,
    "neutrons": 153,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 251,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Einsteinium",
    "symbol": "Es",
    "number": 99,
    "protons": 99,
    "neutrons": 153,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 252,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Fermium",
    "symbol": "Fm",
    "number": 100,
    "protons": 100,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 257,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Mendelevium",
    "symbol": "Md",
    "number": 101,
    "protons": 101,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 258,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Nobelium",
    "symbol": "No",
    "number": 102,
    "protons": 102,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 259,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Lawrencium",
    "symbol": "Lr",
    "number": 103,
    "protons": 103,
    "neutrons": 159,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d1",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 262,
    "family": "Actinide",
    isSeparate: true,
    },
    {
    "name": "Rutherfordium",
    "symbol": "Rf",
    "number": 104,
    "protons": 104,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 267,
    "family": "Transactinide"
    },
    {
    "name": "Dubnium",
    "symbol": "Db",
    "number": 105,
    "protons": 105,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 268,
    "family": "Transactinide"
    },
    {
    "name": "Seaborgium",
    "symbol": "Sg",
    "number": 106,
    "protons": 106,
    "neutrons": 157,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 271,
    "family": "Transactinide"
    },
    {
    "name": "Bohrium",
    "symbol": "Bh",
    "number": 107,
    "protons": 107,
    "neutrons": 155,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 270,
    "family": "Transactinide"
    },
    {
    "name": "Hassium",
    "symbol": "Hs",
    "number": 108,
    "protons": 108,
    "neutrons": 155,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": 269,
    "family": "Transactinide"
    },
    {
    "name": "Meitnerium",
    "symbol": "Mt",
    "number": 109,
    "protons": 109,
    "neutrons": 159,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Darmstadtium",
    "symbol": "Ds",
    "number": 110,
    "protons": 110,
    "neutrons": 159,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Roentgenium",
    "symbol": "Rg",
    "number": 111,
    "protons": 111,
    "neutrons": 161,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Copernicium",
    "symbol": "Cn",
    "number": 112,
    "protons": 112,
    "neutrons": 165,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Nihonium",
    "symbol": "Nh",
    "number": 113,
    "protons": 113,
    "neutrons": 165,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Flerovium",
    "symbol": "Fl",
    "number": 114,
    "protons": 114,
    "neutrons": 173,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Moscovium",
    "symbol": "Mc",
    "number": 115,
    "protons": 115,
    "neutrons": 173,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Pnictogen"
    },
    {
    "name": "Livermorium",
    "symbol": "Lv",
    "number": 116,
    "protons": 116,
    "neutrons": 176,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Tennessine",
    "symbol": "Ts",
    "number": 117,
    "protons": 117,
    "neutrons": 177,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    },
    {
    "name": "Oganesson",
    "symbol": "Og",
    "number": 118,
    "protons": 118,
    "neutrons": 176,
    "electronConfigurations": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    "liquidTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "gasTemperature": {
        "F": "Unknown",
        "C": "Unknown",
        "K": "Unknown",
        "R": "Unknown"
    },
    "standardCharge": "Unknown",
    "molarMass": "Unknown",
    "family": "Transactinide"
    } 
];

export default elements;