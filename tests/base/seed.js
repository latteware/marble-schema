/* global describe, expect, it */
const Schema = require('../../index')
const { types } = Schema

const idSchema = new Schema({
  productId: types.string
})

const seed = '{"productId":{"type":"string"}}'

describe('To string', function () {
  it('Should return seed', async function () {
    const str = idSchema.toString()

    expect(str).to.equal(seed)
  })
})

describe('From string', function () {
  it('Should return no errors', async function () {
    const schema = Schema.fromString(seed)

    const error = schema.validate({
      productId: 'foo'
    })

    expect(error).to.equal(undefined)
  })

  it('Should return error not a int', async function () {
    const schema = Schema.fromString(seed)

    const error = schema.validate({
      productId: 5
    })

    expect(error).to.not.equal(undefined)
    const err = error.details[0]
    expect(err.message).to.equal('"productId" must be a string')
  })
})
