import { useState } from 'react'
import PeriodicTable from 'components/periodic-table/PeriodicTable'
import { PeriodicElement } from 'utils/types';
import ElementModal from 'components/periodic-table/ElementModal';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs'

const Page = () => {

    const [ selectedElement, setSelectedElement ] = useState<PeriodicElement | null>(null);
    const [ isCardModalOpen , setIsCardModalOpen ] = useState<boolean>(false);

    const onElementSelect = (element: PeriodicElement) => {
        setSelectedElement(element);
        setIsCardModalOpen(true);
    }
    
    const onModalClose = () => {
        setSelectedElement(null);
        setIsCardModalOpen(false);
    }

    return (
        <div className='pt-8 chemistry'> 
            <SignedIn>
                <PeriodicTable elementSelect={onElementSelect}/>
                {isCardModalOpen && selectedElement !== null &&
                    <ElementModal element={selectedElement} closeModal={onModalClose} />
                }
            </SignedIn>
            <SignedOut>
                <SignIn />
            </SignedOut>
        </div>
    )
}

export default Page