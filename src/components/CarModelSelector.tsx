import { useState } from "react"
import { carList } from "../data/car-list"
import type { CarModel } from "../interfaces/car-model-selector.interface"


export const CarModelSelector = () => {

    const [ selectedModel, setSelectedModel ] = useState<CarModel>('Todos los modelos')

    const filteredCars = carList.find(({ model }) => selectedModel === model )?.carsByModel || []


    return(
        <>
            <nav className="mt-4 overflow-x-auto scrollbar">
                <ul className="p-2 flex gap-x-4 w-max">
                    {
                        carList.map(({ model }) => (
                            <li key={ model } onClick={() => setSelectedModel( model ) } className={`text-lg ${ selectedModel === model ? 'border-b-2 border-black' : '' }`}>
                                <a>{ model }</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <ul className="pt-10 p-4 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    filteredCars.map(({ name, img }) => (
                        <li key={ name }>
                            <figure>
                                <img src={ img } width={ 350 } height={ 213 } alt="Logo auto" loading="lazy" decoding="async"/>
                                <figcaption className="mt-2 text-center text-sm">{ name }</figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}