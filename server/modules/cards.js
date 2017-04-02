import { shuffle } from '@src/utils/collection'
import { CARDS } from '@src/constants/constants'

export const getCardsForGame = (gameId) => (
  shuffle(getCardNames(20).reduce((acc, name, index) => {
    let team = ''
    if (index < 6) {
      team = 'RED'
    } else if (index < 12) {
      team = 'BLUE'
    } else if (index < 19) {
      team = 'NEUTRAL'
    } else {
      team = 'DEATH'
    }

    return [...acc, getCard(gameId, team, name)]
  }, []))
)

export const getCardNames = (amount) => {
  return shuffle(CARDS).slice(0, amount)
}

const getCard = (gameId, team, name) => ({
  name,
  game_id: gameId,
  team: team,
  selected: false
})
