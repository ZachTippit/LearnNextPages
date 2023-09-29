import { PeriodicElement } from '../utils/types';
import Chat from "./periodic-table/Chat";
import ElementData from './ElementData';

interface SubjectModalProps {
    subject: string;
    subjectData: PeriodicElement | string;
    closeModal: () => void;
}

const SubjectModal = ({subject, subjectData, closeModal}: SubjectModalProps) => {

    const displayContents = () => {
        switch(subject) {
            case 'chemistry':
                return <ElementData element={subjectData as PeriodicElement} />
            case 'geography':
                return <h2>{subjectData as string}</h2>
            default:
                return <p>There was an error loading this page.</p>
        }
    }

  return (
    <div className="absolute inset-0">
        <div className='relative w-full h-full flex items-center justify-center'>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent via-gray-100 opacity-50 z-10' onClick={() => closeModal()}></div>
            <div className="absolute top-0 left-0 right-0 w-100 h-100 m-4 border bg-white rounded-lg shadow-md p-4 z-30">
                <button className="absolute top-0 right-0 p-2 bg-gray-200 rounded-md" onClick={closeModal}>X</button>
                <div className='relative flex w-full h-full'>
                <div className="flex w-2/3 flex-col pr-4">
                    {displayContents()}
                </div>

                <div className="flex w-1/3 h-full justify-center items-center">
                    <Chat />
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SubjectModal