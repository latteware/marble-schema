/* global describe, expect, it */
const Schema = require('../../index')

const idSchema = new Schema({
  properties: {
    productId: {
      description: 'The unique identifier for a product',
      type: 'integer'
    }
  },
  required: ['productId']
})

const seed = '{"properties":{"productId":{"description":"The unique identifier for a product","type":"integer"}},"required":["productId"]}'

describe('To string', function () {
  it('Should return seed', async function () {
    const str = idSchema.toString()

    expect(str).to.equal(seed)
  })
})

describe('From string', function () {
  it('Should return no errors', async function () {
    const schema = Schema.fromString(seed)

    const errors = schema.validate({
      productId: 5
    })

    expect(errors.length).to.equal(0)
  })

  it('Should return error not a int', async function () {
    const schema = Schema.fromString(seed)
    const errors = schema.validate({
      productId: 'foo'
    })

    expect(errors.length).to.equal(1)
    const err = errors[0]
    expect(err.message).to.equal('Expected `foo` (string) in `#/productId` to be of type `integer`')
  })
})
