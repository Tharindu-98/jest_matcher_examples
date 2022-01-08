//@ts-check
//! For jest test plz definetly use @type/jest  - it will give method suggestions & test() error.
//! test title cannot be the same.

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);              //toBe is better for single value ,but not for collections (eg: object literal, Array)
});

test('Object assignment', () => {           
    const obj = {one: 1};
    obj['two'] = 2;
    expect(obj).toEqual({one: 1, two: 2});      //toEqual is checking all values one by one in Object literals & Array
});

test('a + b not 0', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a+ b).not.toBe(0);
        }
    }
});


/** 
Result:

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.518 s, estimated 1 s
Ran all test suites.
 */