import React from 'react'
import glamorous from 'glamorous'

export const ToiletCard = function ToiletCard ({
  type,
  waitingTime,
  queueLength,
  where
}) {
  return (
    <Wrapper>
      <p>
        <strong>Type: </strong>
        <span>{type}</span>
      </p>
      <p>
        <strong>People waiting: </strong>
        <span>{queueLength}</span>
      </p><p>
        <strong>Approx. waiting time: </strong>
        <span>{waitingTime}</span>
      </p><p>
        <strong>Where is it: </strong>
        <span>{where}</span>
      </p>
    </Wrapper>
  )
}

const Wrapper = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '1em',
  margin: '1em',
  border: '1px solid rgba(150, 150, 150, 0.5)',
  borderRadius: '5px'
})
