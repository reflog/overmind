import App, { TConnect } from 'react-overmind'
import * as effects from './effects'
import * as actions from './actions'
import * as state from './state'

const config = {
  effects,
  actions,
  state,
}

declare module 'overmind' {
  interface IState extends TState<typeof config> {}
  interface IEffects extends TEffects<typeof config> {}
}

const app = new App(config, {
  devtools: 'localhost:1234',
})

export type Connect = TConnect<typeof app>

export const connect = app.connect

export default app
