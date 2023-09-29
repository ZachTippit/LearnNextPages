import Chemistry from 'assets/chemistry.svg'
import Physics from 'assets/physics.svg'
import Geography from 'assets/geography.svg'
import Astronomy from 'assets/astronomy.svg'
import Image from 'next/image'
import Link from 'next/link'

const iconSwitcher = (icon: string) => {
    switch(icon) {
        case 'chemistry':
            return Chemistry;
        case 'physics':
            return Physics;
        case 'geography':
            return Geography;
        case 'astronomy':
            return Astronomy;
        default:
            return Chemistry;
    }
}

const Button = ({icon, buttonStyle}: any) => {
    return (
        <Link href={`./${icon}`} className='w-100 flex justify-center items-center'>
            <div className={buttonStyle}>
                <Image src={iconSwitcher(icon)} alt={`${icon} icon`}/>
            </div>
        </Link>
       
    )
}


const iconStyle = `h-20 w-20 transition ease-in-out delay-50 hover:scale-110 duration-300`

const iconGrid = [
    {},
    {
        name: 'chemistry',
        style: `${iconStyle} hover:-translate-y-2`,
    },
    {},
    {
        name: 'geography',
        style: `${iconStyle} hover:-translate-x-2`,
    },
    {},
    {
        name: 'physics',
        style: `${iconStyle} hover:translate-x-2`,
    },
    {},
    {
        name: 'astronomy',
        style: `${iconStyle} hover:translate-y-2`,
    },
    {}
]

const lineGrid = [
    {
        
    },
    {
        style: 'border-b-2 border-l-2 border-black'
    },
    {
        style: 'border-r-2 border-t-2 border-black'
    },
    {
        
    }
]   

const Pick = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
        <div className='relative flex w-96 h-96 items-center justify-center text-black'>
            <div className='absolute grid grid-rows-3 grid-cols-3 w-full h-full z-10'>
                {iconGrid.map((cell, i) => (
                    cell.name ? 
                        <Button icon={cell.name} buttonStyle={cell.style} />
                        :
                        <div className={cell.style || ''} />
                ))}
            </div>
            <div className='absolute grid grid-rows-2 grid-cols-2 w-full h-full p-16'>
                {lineGrid.map((cell, i) => (
                    <div className={cell.style || ''} />
                ))}
            </div>
            {/* <Button /> */}
                <div className='diamond-shape' />
            
        </div>
    </div>
  )
}

export default Pick