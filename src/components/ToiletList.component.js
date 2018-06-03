import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({toilets}) => ({toilets})

const ListComponent = function({toilets}) {
  return (
    <div>
      {
        toilets.map(toilet => <p key={toilet.id}>{toilet.queue_time}</p>)
      }
    </div>
  )
}

export const ToiletList = connect(mapStateToProps)(ListComponent)
