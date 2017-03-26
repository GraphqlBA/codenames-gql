import { Model } from 'objection'
import path from 'path'

export default class Card extends Model {
  static tableName = 'cards'

  static relationMappings = {
    game: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '/Game'),
      join: {
        from: 'cards.game_id',
        to: 'games.id'
      }
    }
  }
}
