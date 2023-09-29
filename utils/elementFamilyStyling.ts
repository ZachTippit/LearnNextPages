import { ElementFamily } from "./types";

const elemFamily = (family: string) => {
    switch(family){
        case ElementFamily.HYDROGEN:
            return 'bg-green-200';
        case ElementFamily.ALKALI:
            console.log(family)
            return 'bg-red-400';
        case ElementFamily.ALKALINE_EARTH:
            return 'bg-yellow-400';
        case ElementFamily.LANTHANIDE:
            return 'bg-green-400';
        case ElementFamily.ACTINIDE:
            return 'bg-blue-400';
        case ElementFamily.TRANSITION:
            return 'bg-indigo-400';
        case ElementFamily.POST_TRANSITION:
            return 'bg-purple-400';
        case ElementFamily.METALLOID:
            return 'bg-pink-400';
        case ElementFamily.NOBLE:
            return 'bg-gray-400';
        case ElementFamily.HALOGEN:
            return 'bg-red-200';
        case ElementFamily.COINAGE:
            return 'bg-yellow-200';
        case ElementFamily.PNICTOGEN:
            return 'bg-green-600';
        case ElementFamily.CHALCOGEN:
            return 'bg-blue-200';
        case ElementFamily.TRANSACTINIDE:
            return 'bg-indigo-200';
        default:
            return 'bg-gray-200';
    }
}

export default elemFamily;