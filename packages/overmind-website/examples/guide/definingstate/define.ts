export const js = [
  {
    fileName: 'app/state.js',
    code: `
export let isLoading = false

export let user = null
  `,
  },
]

export const ts = [
  {
    fileName: 'app/state.ts',
    code: `
export type User = {
  username: string
  bio: string
}

export let isLoading: boolean = false

export let user: User = null
  `,
  },
]
