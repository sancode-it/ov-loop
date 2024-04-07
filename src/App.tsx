import './App.css'

import { useActions, useAppState } from './overmind'

import React from 'react'
import styled from 'styled-components'

export function App() {
  const { current, sweetLoopValue } = useAppState()
  const { changeToBar, changeToFoo } = useActions()

  return (
    <div className="app">
      <Wrapper className="content">
        <Title>Test Overmind</Title>
        <div>current state: {current}</div>
        <div>my sweet loop value: {sweetLoopValue} </div>
        <button onClick={changeToFoo}> To FOO</button>
        <button onClick={changeToBar}>to BAR</button>
      </Wrapper>
    </div>
  )
}

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: turquoise;
  margin-bottom: 45px;
  margin-top: 15px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
