import { type SchemaTypeDefinition } from 'sanity'
import popularcar from '../popularcar'
import recommendedcar from '../recommendedcar'
import cars from './cars'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,popularcar , recommendedcar],
}
