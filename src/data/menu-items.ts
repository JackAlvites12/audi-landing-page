import type { MenuItem } from '../interfaces/navbar.interface'

export const defaultMenuItems: string[] = ['Historia', 'Agenda tu servicio', 'Tienda de repuestos']

export const menuItems: MenuItem[] = [
  {
    name: 'Modelos',
    subItems: ['Sedán', 'Coupé', 'Hatchback', 'Familia R/RS', 'Todos los modelos'],
  },
  {
    name: 'Concesionarios',
  },
  {
    name: 'Cotizar un vehículo',
  },
  {
    name: 'Mundo Audi',
    subItems: ['Historia', 'Noticias', 'Blog', 'Experiencias']
  },
  {
    name: 'Servicio al cliente',
  },
]