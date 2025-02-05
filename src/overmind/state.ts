import { statemachine } from 'overmind'

type State =
  | {
      current: 'FOO'
    }
  | { current: 'BAR' }

type Events =
  | {
      type: 'CHANGED_TO_FOO'
    }
  | {
      type: 'CHANGED_TO_BAR'
    }
  | { type: 'INCREASE_SWEET_LOOP_VALUE' }

type BaseState = {
  sweetLoopValue: number
}

const fooStateMachine = statemachine<State, Events, BaseState>({
  FOO: {
    CHANGED_TO_BAR: () => ({ current: 'BAR' }),
    INCREASE_SWEET_LOOP_VALUE: (_, state) => {
      state.sweetLoopValue++
    },
  },
  BAR: {
    CHANGED_TO_FOO: () => ({ current: 'FOO' }),

    INCREASE_SWEET_LOOP_VALUE: (_, state) => {
      state.sweetLoopValue++
    },
  },
})

export const state = fooStateMachine.create(
  {
    current: 'FOO',
  },
  { sweetLoopValue: 0 }
)
