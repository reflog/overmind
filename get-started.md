# Get started

### 1. Install

`npm install overmind@next`

### 2. Initialize the app

Your initialize your application related to your chosen view, this being **react**, **vue**, **inferno**, **preact** or **angular**.

{% code-tabs %}
{% code-tabs-item title="app/index.js" %}
```javascript
import App from 'overmind/$VIEW'
import state from './state'
import actions from './actions'

const app = new App({
  state,
  actions
})

export const connect = app.connect
```
{% endcode-tabs-item %}

{% code-tabs-item title="app/index.ts" %}
```typescript
import App, { TEffects, TAction, TConnect } from 'overmind/$VIEW'
import state from './state'
import actions from './actions'
import * as effects from './effects'

export type Effects = TEffects<typeof state, typeof effects>

export type Action = TAction<typeof state, Effects>

const app = new App({
  state,
  actions
})

export type Connect = TConnect<typeof app.state, typeof app.actions>

export const connect = app.connect
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="info" %}
You can also implement your own custom UI library using the direct "overmind" import. Read the API section for more information.
{% endhint %}

### 3. Define the state

{% code-tabs %}
{% code-tabs-item title="app/state.js" %}
```javascript
export default {
  title: 'Overmind App'
}
```
{% endcode-tabs-item %}

{% code-tabs-item title="app/state.ts" %}
```typescript
type State = {
  title: string
}

const state: State = {
  title: 'Overmind App'
}

export default state
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### 4. Define the logic

{% code-tabs %}
{% code-tabs-item title="app/actions.ts" %}
```javascript
export default action => ({
  changeTitle: action()
    .map((_, event) => event.target.value)
    .mutation((state, title) => state.title = title)
})
```
{% endcode-tabs-item %}

{% code-tabs-item title="app/actions.ts" %}
```typescript
import { Action } from './'

export default (action: Action) => ({
  changeTitle: action()
    .map(event => event.target.value)
    .mutation((state, title) => state.title = title)
})

```
{% endcode-tabs-item %}
{% endcode-tabs %}

### 5. Define the effects


{% code-tabs %}
{% code-tabs-item title="app/actions.ts" %}
```javascript
export const say = {
  hello: (name: string) => ({ hello: `Hello ${name}` }),
}

export const api = {
  getPosts: () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
      response.json()
    ),
}
```
{% endcode-tabs-item %}

{% code-tabs-item title="app/actions.ts" %}
```typescript
export const say = {
  hello: (name: string) => ({ hello: `Hello ${name}` }),
}

export const api = {
  getPosts: () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
      response.json()
    ),
}

```
{% endcode-tabs-item %}
{% endcode-tabs %}

### 6. Connect to views

{% tabs %}
{% tab title="React" %}
{% code-tabs %}
{% code-tabs-item title="Title.js" %}
```javascript
import React from 'react'
import { connect } from '../app'

const Title = ({ appState, actions }) =>
  <div>
    <h1>{appState.title}</h1>
    <input value={appState.title} onChange={actions.changeTitle} />
  </div>
  
export default connect(Title)

```
{% endcode-tabs-item %}

{% code-tabs-item title="Title.tsx" %}
```typescript
import React from 'react'
import { connect, Connect } from '../app'

const Title: React.SFC<Connect> = ({ app }) =>
  <div>
    <h1>{app.state.title}</h1>
    <input value={app.state.title} onChange={actions.changeTitle} />
  </div>
  
export default connect(Title)
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}

{% tab title="Vue" %}
```javascript

```
{% endtab %}
{% endtabs %}



