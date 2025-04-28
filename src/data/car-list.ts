import type { CarList } from "../interfaces/car-model-selector.interface";
import Auto from '../assets/auto.webp'

export const carList: CarList[] = [
    {
        model: 'Todos los modelos',
        carsByModel: [
            {
                name: 'Modelo 1',
                img: Auto.src
            },
            {
                name: 'Modelo 2',
                img: Auto.src
            },
            {
                name: 'Modelo 3',
                img: Auto.src
            },
            {
                name: 'Modelo 4',
                img: Auto.src
            },
            {
                name: 'Modelo 5',
                img: Auto.src
            },
        ]
    },
    {
        model: 'Sedán',
        carsByModel: [
            {
                name: 'Sedan 1',
                img: Auto.src
            },
            {
                name: 'Sedan 2',
                img: Auto.src
            }
        ]
    },
    {
        model: 'Coupé',
        carsByModel: [
            {
                name: 'Coupe 1',
                img: Auto.src
            }
        ]
    },
    {
        model: 'Hatchback',
        carsByModel: [
            {
                name: 'Hatchback 1',
                img: Auto.src
            }
        ]
    },
    {
        model: 'Familia R/RS',
        carsByModel: [
            {
                name: 'Familia 1',
                img: Auto.src
            }
        ]
    },
]