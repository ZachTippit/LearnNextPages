import ElementCard from './ElementCard'
import elements from 'utils/elementData';
import { PeriodicElement } from 'utils/types.js';
import PeriodicTableLegend from './PeriodicTableLegend';
import { useState } from 'react';

interface PeriodicTableProps {
  elementSelect: (element: PeriodicElement) => void;
}

const PeriodicTable = ({ elementSelect }: PeriodicTableProps) => {
  // const tableRef = useRef(null);
  // const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [highlightedFamily, setHighlightedFamily] = useState<string>('');

  // let initialX: number, initialY: number, offsetX: number, offsetY: number;

  // const handleZoom = (event: WheelEvent) => {
  //   event.preventDefault();
  //   const table = tableRef.current as any;
  //   const container = table.parentElement;
  
  //   if (!table || !container) return;
  
  //   const containerRect = container.getBoundingClientRect();
  //   const tableRect = table.getBoundingClientRect();
  //   const scaleIncrement = event.deltaY > 0 ? -0.1 : 0.1;
  //   const newScale = Math.min(Math.max(transform.scale + scaleIncrement, 0.5), 5); // max scale increased to 5
  
  //   const futureTableWidth = tableRect.width * newScale;
  //   const futureTableHeight = tableRect.height * newScale;
  
  //   if (
  //     futureTableWidth >= containerRect.width &&
  //     futureTableHeight >= containerRect.height
  //   ) {
  //     setTransform((prevTransform) => ({ ...prevTransform, scale: newScale }));
  //   }
  // };
  

  // const handleDragStart = (event: MouseEvent) => {
  //   initialX = event.clientX;
  //   initialY = event.clientY;
  //   window.addEventListener('mousemove', handleDragMove);
  //   window.addEventListener('mouseup', handleDragEnd);
  // };

  // const handleDragMove = (event: MouseEvent) => {
  //   const table = tableRef.current as any;
  //   const container = table.parentElement;
  
  //   if (!table || !container) return;
  
  //   const containerRect = container.getBoundingClientRect();
  //   const tableRect = table.getBoundingClientRect();
  //   const scale = transform.scale;
  
  //   offsetX = event.clientX - initialX;
  //   offsetY = event.clientY - initialY;
  
  //   const maxX = (tableRect.width * scale - containerRect.width) / 2;
  //   const maxY = (tableRect.height * scale - containerRect.height) / 2;
  
  //   const minX = -maxX;
  //   const minY = -maxY;
  
  //   const newX = Math.min(Math.max(offsetX, minX), maxX);
  //   const newY = Math.min(Math.max(offsetY, minY), maxY);
  
  //   setTransform((prevTransform) => ({ ...prevTransform, x: newX, y: newY }));
  // };
  

  // const handleDragEnd = () => {
  //   window.removeEventListener('mousemove', handleDragMove);
  //   window.removeEventListener('mouseup', handleDragEnd);
  // };

  // useEffect(() => {
  //   if (tableRef.current) {
  //     (tableRef.current as any).addEventListener('mousedown', handleDragStart);
  //     (tableRef.current as any).addEventListener('wheel', handleZoom);
  //   }

  //   return () => {
  //     if (tableRef.current) {
  //       (tableRef.current as any).removeEventListener('mousedown', handleDragStart);
  //       (tableRef.current as any).removeEventListener('wheel', handleZoom);
  //       window.removeEventListener('mousemove', handleDragMove);
  //       window.removeEventListener('mouseup', handleDragEnd);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (tableRef.current) {
  //     (tableRef.current as any).style.transform = `scale(${transform.scale}) translate(${transform.x}px, ${transform.y}px)`;
  //   }
  // }, [transform]);

  const highlight = (family: string) => {
    setHighlightedFamily(family);
  };

  return (
    // ref={tableRef}
    <div className='w-full px-4'>
        <div className="grid grid-cols-18 gap-px">
            {elements.map((element: PeriodicElement) => (
                !element?.isSeparate && 
                  <ElementCard 
                    key={element.number}
                    element={element} 
                    elementSelect={elementSelect}
                    isHighlighted={highlightedFamily === element.family}
                  />
            ))}  
        </div>

        <div className='grid grid-cols-18 grid-row-3 gap-px mt-12'>
          <div className='col-span-3 row-span-3'>
            <PeriodicTableLegend highlight={highlight}/>
          </div>
          <>
            {elements.map((element: PeriodicElement) => (
              element.isSeparate && 
                <ElementCard 
                  key={element.number} 
                  element={element} 
                  elementSelect={elementSelect} 
                  isHighlighted={highlightedFamily === element.family}
                />  
            ))} 
          </> 
        </div>  
    </div>
  )
}

export default PeriodicTable