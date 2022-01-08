test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeUndefined();
});


test('zero', () => {
    const z = 0;
    expect(z).toBeFalsy();
    expect(z).toBeDefined();
    expect(z).not.toBeNull();
    expect(z).not.toBeTruthy();
    expect(z).not.toBeUndefined();
});

//use   @types/jest