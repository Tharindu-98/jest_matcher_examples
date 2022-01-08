//@ts-check

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding decimal numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);
    //expect(value).toEqual(0.3);
    expect(value).toBeCloseTo(0.3);
});