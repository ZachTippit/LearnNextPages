import elemFamily from "utils/elementFamilyStyling";
import { PeriodicElement } from "utils/types";

interface ElementCardProps {
    element: PeriodicElement;
    elementSelect: (element: PeriodicElement) => void;
    isHighlighted: boolean;
}

const ElementCard = ({element, elementSelect, isHighlighted}: ElementCardProps) => {

    const { number, symbol, name, molarMass } = element;

    const isElement = element.name !== undefined;

    return (
        <div 
            className={`
                relative rounded-md w-16 h-16 
                ${isElement ? elemFamily(element.family as string) : 'bg-none'} 
                ${isHighlighted ? 'border-2 border-gray-800' : 'border-0 border-white'}
            `}
            onClick={() => element.name === undefined ? null : elementSelect(element as PeriodicElement)}
        >
            <div className="absolute top-0 left-0 m-1 text-sm font-bold text-gray-700">
                <p>{number}</p>
            </div>

            <div className="flex justify-center mt-2 h-full">
                <span className="text-l font-bold text-gray-700">{symbol}</span>
            </div>

            <div className="absolute inset-x-0 bottom-5 flex justify-center">
                <span className="text-xs font-medium text-gray-700">{name}</span>
            </div>

            {typeof molarMass === 'number' &&
                <div className="absolute inset-x-0 bottom-1 flex items-center justify-center">
                    <span className="text-xs text-gray-700">{typeof molarMass === 'number' ? molarMass.toFixed(2) : molarMass}</span>
                </div>
            }
        </div>
    )
}

export default ElementCard;
