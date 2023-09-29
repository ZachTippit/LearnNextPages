import { useState } from "react";
import {routes} from "./routes";
import { User } from "@clerk/nextjs/server";

interface SideMenuProps {
    user: User | null;
    isOpen: boolean;
}

const SideMenu = ({user, isOpen = true}: SideMenuProps) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='absolute inset-0'>
            <div className='relative w-full h-full flex flex-col items-center justify-center'>
                <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-transparent via-gray-100 opacity-50 z-10'></div>
                <div 
                    className={`fixed top-0 left-0 h-screen 
                                flex flex-col justify-between w-64 bg-gray-200 
                                transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                                transition-transform duration-300 ease-in-out z-10`}>
                    <div className="p-4 border-b"><Link href='/'>Home</Link></div>         
                    <ul>
                        <li className="p-4 border-b">
                            { Object.entries(routes).map(([subjectKey, subjectLinks]: any, index: number) => (
                                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                                        <Typography sx={{ flexShrink: 0 }}>
                                            {subjectKey}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        { subjectKey === "Chemistry" || subjectKey === "Geography" ? 
                                            <ul>
                                                { subjectLinks.map((topic: any) => (
                                                    <li className="p-4 border-b text-sm hover:bg-slate-50 hover:text-blue-800"><Link href={topic.path}>{topic.name}</Link></li>
                                                ))}
                                            </ul>
                                        :
                                            <p className='text-xs'>Coming soon!</p>
                                        }
                                    </AccordionDetails>
                                </Accordion>
                                ))}
                        </li>
                    </ul>
                    <div className='grow'/>
                    {Boolean(user) && (
                        <div className='w-11/12 h-20 mx-auto mb-4 grid grid-rows-2 bg-slate-50 p-3 rounded drop-shadow-md'>
                            <div className='flex flex-row justify-between items-center'>
                                <img src={user?.profileImageUrl ?? ''} id='userLogo'/>
                                <p className='text-center'>{user?.firstName} {user?.lastName}</p>
                                <p>L2</p>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='w-5/6 items-center'>
                                    <LinearProgress variant="determinate" value={50} />
                                </div>
                                <p className='text-xs ml-2'>50/100</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default SideMenu