
export interface CarList {
    model: CarModel
    carsByModel: Car[]
}

export interface Car {
    img: string,
    name: string
}

export type CarModel = 'Todos los modelos' | 'Sedán' | 'Coupé' | 'Hatchback' | 'Familia R/RS'
