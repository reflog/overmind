export const js = [
  {
    code: `
export const doThis = action => 
  action()
    .map(operations.getUser)
    .mutate(mutations.setUser)
  `,
  },
]

export const ts = [
  {
    code: `
import { Action } from 'overmind'

export const doThis: Action<number> = action =>
  action()
    .map(operations.getUser)
    .mutate(mutations.setUser)
  `,
  },
]
