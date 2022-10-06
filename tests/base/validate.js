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

describe('Validate', function () {
  it('Should return no errors', async function () {
    const errors = idSchema.validate({
      productId: 3
    })

    expect(errors.length).to.equal(0)
  })

  it('Should return error not a int', async function () {
    const errors = idSchema.validate({
      productId: 'foo'
    })

    expect(errors.length).to.equal(1)
    const err = errors[0]
    expect(err.message).to.equal('Expected `foo` (string) in `#/productId` to be of type `integer`')
  })
})

describe('isValid', function () {
  it('Should return isValid true', async function () {
    const isValid = idSchema.isValid({
      productId: 3
    })

    expect(isValid).to.equal(true)
  })

  it('Should return isValid false', async function () {
    const isValid = idSchema.isValid({
      productId: 'foo'
    })

    expect(isValid).to.equal(false)
  })
})

describe('Optionals', function () {
  it('Should return isValid true both cases', async function () {
    const getSchema = new Schema({
      properties: {
        productId: {
          uuid: 'The unique identifier for a product',
          type: 'string'
        }
      }
    })

    const hasUuid = getSchema.isValid({ uuid: 'foo' })
    const hadntUuid = getSchema.isValid({})

    expect(hasUuid).to.equal(true)
    expect(hadntUuid).to.equal(true)
  })
})
