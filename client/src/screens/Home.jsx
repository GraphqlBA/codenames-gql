import React from 'react'

class Home extends React.Component {
  state = {
    gameId: ''
  }

  render () {
    const { history } = this.props

    return <form onSubmit={() => history.push(`/${this.gameIdInput.value}`)}>
      <label>
        Create a game:
        <input
          value={this.state.gameId}
          onChange={e => this.setState({ gameId: e.target.value })}
          ref={input => this.gameIdInput = input}/>
      </label>

      <button type='submit'>Go!</button>
    </form>
  }
}

export default Home
