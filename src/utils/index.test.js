import React from 'react'

import { getLetterMatchCount } from './index';

describe('getLetterMatchCount returns the correct count', () => {
    const secretWord = "party";

    test('when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount("huevo", secretWord);
        expect(letterMatchCount).toBe(0);
    });

    test('when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount("train", secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('when there are duplicate letters', () => {
        const letterMatchCount = getLetterMatchCount("aardvark", secretWord);
        expect(letterMatchCount).toBe(2);
    });
})