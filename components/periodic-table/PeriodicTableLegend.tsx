import { ElementFamily } from "../../utils/types"
import elemFamily from "../../utils/elementFamilyStyling"

interface PeriodicTableLegendProps {
    highlight: (family: string) => void;
}

const PeriodicTableLegend = ({highlight}: PeriodicTableLegendProps) => {

    console.log(Object.values(ElementFamily))
  return (
    <div className='grid grid-cols-2 m-1'>
        <div className='col-span-2 flex justify-center items-center bg-gray-400'>
            <span className='text-xs font-medium text-gray-700'>Legend</span>
        </div>
        {Object.values(ElementFamily).map((family: string) => (
            <div 
                className={`${elemFamily(family as string)} flex justify-center items-center`}
                onMouseOver={() => highlight(family)}
                onMouseLeave={() => highlight('')}
            >
                <span className='text-xs font-medium text-gray-700'>{family}</span>
            </div>
        ))}
    </div>
  )
}

export default PeriodicTableLegend