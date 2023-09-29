export interface PeriodicElement {
    name?: string;
    symbol?: string;
    number?: number;
    protons?: number;
    neutrons?: number;
    electronConfigurations?: string;
    liquidTemperature?: {
        F: number | string | undefined;
        C: number | string | undefined;
        K: number | string | undefined;
        R: number | string | undefined;
    };
    gasTemperature?: {
        F: number | string | undefined;
        C: number | string | undefined;
        K: number | string | undefined;
        R: number | string | undefined;
    };
    standardCharge?: number | string | undefined;
    molarMass?: number | string | undefined;
    family?: string;
    isSeparate?: boolean;
}

export enum ElementFamily {
    HYDROGEN = 'Hydrogen',
    ALKALI = "Alkali",
    ALKALINE_EARTH = 'Alkaline Earth Metal',
    TRANSITION = 'Transition Metal',
    LANTHANIDE = 'Lanthanide',
    ACTINIDE = 'Actinide',
    PNICTOGEN = 'Pnictogen',
    CHALCOGEN = 'Chalcogen',
    HALOGEN = 'Halogen',
    NOBLE = 'Noble Gas',
    COINAGE = 'Coinage',
    POST_TRANSITION = 'Post-Transition Metal',
    METALLOID = 'Metalloid',
    TRANSACTINIDE = 'Transactinide'
}