export const getCardsForGame = (gameId) => (
  new Array(20).fill().reduce((acc, _, index) => {
    if (index < 6) {
      return [...acc, getCard(gameId, 'RED')]
    } else if (index < 12) {
      return [...acc, getCard(gameId, 'BLUE')]
    } else if (index < 19) {
      return [...acc, getCard(gameId, 'NEUTRAL')]
    } else {
      return [...acc, getCard(gameId, 'DEATH')]
    }
  }, [])
)

const getCard = (gameId, team) => ({
  name: getRandomCardName(),
  game_id: gameId,
  team: team,
  selected: false
})

export const getRandomCardName = () => 'Lorem'
