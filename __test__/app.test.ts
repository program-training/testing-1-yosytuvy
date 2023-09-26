import { describe, expect, test } from "vitest";
import {
    acsSortNumArr,
    fetchUserData,
    isPalindrom,
    nextFib,
    sqrt,
    strLen,
    sumArray,
} from "../src/app";

describe("strLen function testing", () => {
    test("test regular", () => {
        expect(strLen("hello")).toBe(5);
    });

    test("test zero", () => {
        expect(strLen("")).toBe(0);
    });
});

describe("isPalindrom function testing", () => {
    test("test true", () => {
        expect(isPalindrom("abba")).toBe(true);
    });

    test("test false", () => {
        expect(isPalindrom("asdfjdsa")).toBe(false);
    });

    test("test zero", () => {
        expect(isPalindrom("")).toBe(true);
    });
});

describe("acsSortNumArr function testing", () => {
    test("test regular", () => {
        const arr = [5, 4, 3, 2, 1];
        const expectArr = [1, 2, 3, 4, 5];

        expect(acsSortNumArr(arr)).toEqual(expectArr);
    });

    test("test empty", () => {
        const arr = [];
        const expectArr = [];

        expect(acsSortNumArr(arr)).toEqual(expectArr);
    });
});

describe("sqrt function testing", () => {
    test("test regular", () => {
        expect(sqrt(9)).toBe(3);
    });

    test("test zero", () => {
        expect(sqrt(0)).toBe(0);
    });

    test("test error", () => {
        expect(() => sqrt(-4)).toThrow();
    });
});

describe("sumArray function testing", () => {
    test("test regular", () => {
        const arr = [1, 2, 3, 4];
        const expectRes = 10;

        expect(sumArray(arr)).toBe(expectRes);
    });

    test("test empty", () => {
        expect(sumArray([])).toBe(0);
    });

    test("test greater", () => {
        const arr = [1, 2, 3, 4];

        expect(sumArray(arr)).toBeGreaterThan(9);
    });
});

describe("fetchUserData function testing", () => {
    test("test get user", async () => {
        const expectUser = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
            },
        };

        expect(await fetchUserData(1)).toEqual(expectUser);
    });

    test("test invalid ID", async () => {

        await expect(fetchUserData(11)).rejects.toThrow();
    });
});


describe("nextFib function testing", () => {

    test("test regular", () => {
        const arr = [1, 1, 2];
        expect(nextFib(arr)).toBe(3);
    });

    test("test emtpty", () => {
        const arr = [];
        expect(nextFib(arr)).toBe(1);
    })

    test("test one", () => {
        const arr = [1];
        expect(nextFib(arr)).toBe(1);
    })

    test("test error", () => {
        const arr = [1, 1, 2, 4];
        expect(() => nextFib(arr)).toThrow();
    })

})