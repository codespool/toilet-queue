import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestList, setFilter } from '../actions'
import glamorous from 'glamorous'
import { ToiletCard } from './ToiletCard.component'

const mapStateToProps = ({ toilets }) => ({ toilets })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestList, setFilter }, dispatch)
class ListComponent extends Component {
  componentDidMount () {
    this.props.requestList()
  }
  render () {
    const { toilets, requestList, setFilter } = this.props
    return (
      <div>
        <ButtonWrapper>
          <a
            className={`button is-link ${toilets.isLoading ? 'is-loading' : ''}`}
            onClick={requestList}
          >
            Reload list
          </a>
          <a
            className='button is-primary'
            disabled={toilets.filter === 'male'}
            onClick={() => setFilter('male')}
          >
            Male only
          </a>
          <a
            className='button is-primary'
            disabled={toilets.filter === 'female'}
            onClick={() => setFilter('female')}
          >
            Female only
          </a>
          <a
            className='button is-primary'
            disabled={toilets.filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Show all
          </a>
        </ButtonWrapper>
        <ListWrapper>
          {toilets.filteredList.map(toilet => (
            <ToiletCard
              key={toilet.id}
              waitingTime={toilet.queue_time}
              queueLength={toilet.queue_level}
              where={toilet.location}
              type={toilet.type}
            />
          ))}
        </ListWrapper>

      </div>
    )
  }
}

const ButtonWrapper = glamorous.div({
  width: '30vw',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '2em'
})
const ListWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const ToiletList = connect(mapStateToProps, mapDispatchToProps)(
  ListComponent
)
