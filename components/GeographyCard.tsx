import React, { useEffect } from 'react'
import Chat from './periodic-table/Chat'
import { Cell, Pie, PieChart } from 'recharts';

interface GeographyCardProps {
    closeModal: () => void;
    location: string
    stateData: any
    queryDone: boolean
}

const GeographyCard = ({location, stateData, queryDone, closeModal}: GeographyCardProps) => {

    // const filterBy = (key: string, value: any) => {
    //     const filteredIndex = key === 'race' ? 2 : 3;

    //     return stateData.filter((d: any) => d[filteredIndex] === value);
    // }
    
    // const fetchStateData = async () => {
    //     const res = await fetch("http://localhost:3000/geography?state=05");
    //     const data = await res.json();
    //     return data.text;
    // };

    //   useEffect(() => {
    //     fetchStateData().then((data) => {
    //         console.log(data);
    //     });
    //     }, []);

    // const filterByRace = () => {
    //     let filteredArray = queryDone ? filterBy('race', '0') : null;
    //     let data = [];
    //     return filteredArray.map((d: any) => {
    //         data.push({name: d[1], value: d[4]})
    //     })
    // }

    const testData = [
        {
            name: 'White',
            value: 150
        },
        {
            name: 'Black',
            value: 100
        },
        {
            name: 'Asian',
            value: 200
        },
        {
            name: 'Hispanic',
            value: 275
        },
    ]

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const population = 12345678;
    const area = 12345678;
  return (
    <div className="absolute inset-y-20 right-0 w-1/3 h-5/6 m-4 border bg-white rounded-lg shadow-md p-4 z-30">
        <button className="absolute top-0 right-0 p-2 bg-gray-200 rounded-md" onClick={closeModal}>X</button>
        <div className='relative flex w-full h-full'>
        <div className="flex w-full flex-col">
        <h1 className="text-2xl font-bold mb-4">State Information</h1>
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="font-semibold">State:</span>
                <span>{location}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-semibold">Capital:</span>
                <span>{location}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-semibold">Population:</span>
                <span>{population.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-semibold">Area (sq mi):</span>
                <span>{area.toLocaleString()}</span>
            </div>
            <div className='w-full '>
                <PieChart width={300} height={300}>
                    <Pie data={testData} dataKey='value' nameKey='name' cx='50%' cy='50%' label>
                    {
                        testData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} onClick={() => console.log(entry)}/>
                    ))}
                    </Pie>
                </PieChart>
            </div>
            
            </div>
            {/* <div className="flex w-1/2 h-full justify-center items-center">
                <Chat />
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default GeographyCard