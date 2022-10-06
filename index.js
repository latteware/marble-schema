const { Draft07 } = require('json-schema-library')

const $schema = 'https://json-schema.org/draft/2020-12/schema'
const $id = 'https://example.com/product.schema.json'
const type = 'object'

const Schema = class {
  constructor ({ properties, required }) {
    this._base = { properties, required }

    const jsonSchema = new Draft07({ $schema, $id, type, ...this._base })
    this._schema = jsonSchema
  }

  setTitle (title) {
    this._base = { title, ...this._base }
    const jsonSchema = new Draft07({ $schema, $id, type, ...this._base })
    this._schema = jsonSchema
  }

  setDescription (description) {
    this._base = { description, ...this._base }

    const jsonSchema = new Draft07({ $schema, $id, type, ...this._base })
    this._schema = jsonSchema
  }

  toString () {
    return JSON.stringify(this._base)
  }

  validate (data) {
    const isValid = this._schema.validate(data)

    return isValid
  }

  isValid (data) {
    const isValid = this._schema.isValid(data)

    return isValid
  }
}

Schema.fromString = function (seed) {
  return new Schema(JSON.parse(seed))
}

module.exports = Schema
