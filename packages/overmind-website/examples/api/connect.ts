export const react = [
  {
    fileName: 'SomeComponent.js',
    code: `
import React from 'react'
import app from '../app'

const SomeComponent = ({ app }) => {
  return (
    <div onClick={app.actions.onClick}>
      {app.state.foo}
    </div>
  )
}

export default app.connect(SomeComponent)
  `,
  },
]

export const reactTs = [
  {
    fileName: 'SomeComponent.tsx',
    code: `
import * as React from 'react'
import app, { Connect } from '../app'

const SomeComponent: React.SFC<Connect> = ({ app }) => {
  return (
    <div onClick={app.actions.onClick}>
      {app.state.foo}
    </div>
  )
}

export default app.connect(SomeComponent)
  `,
  },
]

export const vue = [
  {
    fileName: 'SomeComponent.vue (template)',
    code: `
<div v-on:click="app.actions.onClick">
  {{app.state.foo}}
</div>
  `,
  },
  {
    fileName: 'SomeComponent.vue (script)',
    code: `
import app from '../app'

export default app.connect({})
`,
  },
]

export const vueTs = vue
