import { Model } from 'objection'
import Card from './Card'

export default class Game extends Model {
  static tableName = 'games'

  static relationMappings = {
    cards: {
      relation: Model.HasManyRelation,
      modelClass: Card,
      join: {
        from: 'games.id',
        to: 'cards.game_id'
      }
    }
  }
}
