const { Draft07 } = require('json-schema-library')

const $schema = 'https://json-schema.org/draft/2020-12/schema'
const $id = 'https://example.com/product.schema.json'
const type = 'object'

const Schema = class {
  constructor ({ name: title, properties, required }) {
    const jsonSchema = new Draft07({ $schema, $id, type, title, properties, required })
    this._schema = jsonSchema
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

module.exports = Schema