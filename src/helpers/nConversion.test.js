const { test } = require('@jest/globals')
import nConversion from './nConversion'

test('testing number words', () => {
    expect(nConversion(7)).toBe("seven")
    expect(nConversion(42)).toBe("forty-two")
    expect(nConversion(2001)).toBe("two thousand and one")
    expect(nConversion(1999)).toBe("nineteen hundred and ninety-nine")
    expect(nConversion(17999)).toBe("seventeen thousand nine hundred and ninety-nine")
    expect(nConversion(342251)).toBe("three hundred and forty-two thousand two hundred and fifty-one")
    expect(nConversion(1300420)).toBe("one million three hundred thousand four hundred and twenty")
})