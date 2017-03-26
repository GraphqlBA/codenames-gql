import React from 'react'
import { gql, graphql } from 'react-apollo'

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

    return <form onSubmit={onSubmit}>
      <button type='submit'>Start a new game</button>
    </form>
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
