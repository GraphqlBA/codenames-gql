import React from 'react'
import { gql, graphql } from 'react-apollo'
import './Home.css'
import Button from '../components/Button'

class Home extends React.Component {
  state = {
    gameId: ''
  }

  render () {
    const { history, createGame } = this.props

    function onSubmit(e) {
      e.preventDefault()
      createGame().then(({ data }) => history.push(`/${data.gameCreate.id}`))
    }

    return (
      <div className="container">
        <h1>⭐️ Codenames ⭐️</h1>
        <form onSubmit={onSubmit}>
          <Button type='submit' size='big'>Comenzar a jugar</Button>
        </form>
      </div>
    )
  }
}

const Mutation = gql`
  mutation CreateGame {
    gameCreate {
      id
    }
  }
`

export default graphql(Mutation, {
  props: ({ mutate }) => ({ createGame: mutate })
})(Home)
