import { getCardsForGame, getCardNames } from './cards'

describe('getCardsForGame', () => {
  it('returns 20 cards', () => {
    const cards = getCardsForGame()
    expect(cards.length).toBe(20)
  })

  it('has the proper amount of cards for each team', () => {
    const cards = getCardsForGame()
    const redCards = cards.filter(card => card.team === 'RED')
    const blueCards = cards.filter(card => card.team === 'BLUE')
    const neutralCards = cards.filter(card => card.team === 'NEUTRAL')
    const deathCards = cards.filter(card => card.team === 'DEATH')

    expect(redCards.length).toBe(6)
    expect(blueCards.length).toBe(6)
    expect(neutralCards.length).toBe(7)
    expect(deathCards.length).toBe(1)
  })
})

describe('getCardNames', () => {
  it('returns the given amount of cards', () => {
    const names = getCardNames(20)
    expect(names.length).toBe(20)
  })
})
