import React from 'react'
import { PeriodicElement } from '../utils/types';

interface ElementDataProps{
    element: PeriodicElement;
}

const ElementData = ({element}: ElementDataProps) => {
  return (
    <div>
        <div className="flex w-2/3 flex-col pr-4">
                    <h1 className="text-2xl font-bold mb-2 text-blue-600">{element.name} ({element.symbol})</h1>
                    <div className="grid grid-cols-2 gap-2">
                    {/* Basic Information */}
                    <div className="col-span-2 bg-blue-100 p-2 rounded-lg">
                        <h2 className="text-lg font-medium mb-2">Basic Information</h2>
                        <p className="text-md mb-2">Number: <span className="font-semibold">{element.number}</span></p>
                        <p className="text-md mb-2">Protons: <span className="font-semibold">{element.protons}</span></p>
                        <p className="text-md mb-2">Neutrons: <span className="font-semibold">{element.neutrons}</span></p>
                        <p className="text-md mb-2">Standard Charge: <span className="font-semibold">{element.standardCharge}</span></p>
                    </div>

                    {/* Electron Configuration */}
                    <div className="col-span-1 bg-green-100 p-2 rounded-lg">
                        <h2 className="text-lg font-medium mb-2">Electron Configuration</h2>
                        <p className="text-md">{element.electronConfigurations}</p>
                    </div>

                    {/* Temperature */}
                    <div className="col-span-1 bg-yellow-100 p-4 rounded-lg">
                        <h2 className="text-lg font-medium mb-4">Temperature</h2>
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="py-2 px-2 border-b border-gray-200 text-center">Unit</th>
                                <th className="py-2 px-2 border-b border-gray-200 text-center">Liquid</th>
                                <th className="py-2 px-2 border-b border-gray-200 text-center">Gas</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-2 px-2 border-b border-gray-200">Fahrenheit</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.liquidTemperature?.F}°F</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.gasTemperature?.F}°F</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-b border-gray-200">Celsius</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.liquidTemperature?.C}°C</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.gasTemperature?.C}°C</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-b border-gray-200">Kelvin</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.liquidTemperature?.K}K</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.gasTemperature?.K}K</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 border-b border-gray-200">Rankine</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.liquidTemperature?.R}R</td>
                                <td className="py-2 px-2 border-b border-gray-200">{element?.gasTemperature?.R}R</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default ElementData