import { test, it, expect } from 'vitest'
import {value, isZero } from "./value"

it('returns true if parameter is zero', () => {
    expect( isZero(0) ).toBe( true )
})
//it('returns false if parameter is zero')


