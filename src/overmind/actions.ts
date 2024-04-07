import { Context } from '.'

export const changeToFoo = ({ state }: Context) => {
  state.send('CHANGED_TO_FOO')
}

export const changeToBar = ({ state }: Context) => {
  state.send('CHANGED_TO_BAR')
}

export const increaseSweetLoopValue = ({ state }: Context) => {
  state.send('INCREASE_SWEET_LOOP_VALUE')
}

export const onInitializeOvermind = (overmindInstance: Context) => {
  overmindInstance.reaction(
    (state) => [state.current] as const,
    ([current]) => {
      if (current === 'FOO') {
        overmindInstance.actions.increaseSweetLoopValue()
        console.log('FOO')
      }
      if (current === 'BAR') {
        overmindInstance.actions.increaseSweetLoopValue()
        console.log('BAR')
      }
    }
  )
}
