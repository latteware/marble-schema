/* global describe, expect, it */
const Schema = require('../../index')

describe('Sample', function () {
  it('Simple test', async function () {
    const schema = new Schema({
      name: 'Product',
      description: "A product from Acme's catalog",
      properties: {
        productId: {
          description: 'The unique identifier for a product',
          type: 'integer'
        }
      },
      required: ['productId']
    })

    const errors = schema.validate({
      productId: 3
    })

    expect(errors.length).to.equal(0)
  })

  it('Simple test', async function () {
    const schema = new Schema({
      name: 'Product',
      description: "A product from Acme's catalog",
      properties: {
        productId: {
          description: 'The unique identifier for a product',
          type: 'integer'
        }
      },
      required: ['productId']
    })

    const isValid = schema.isValid({
      productId: 3
    })

    expect(isValid).to.equal(true)
  })
})
