// Type definitions for js-worker-search 1.2
// Project: https://github.com/bvaughn/js-worker-search#readme
// Definitions by: Julia Kieserman <https://github.com/juliakieserman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SearchApi {
    constructor(caseSensitive?: boolean, indexMode?: INDEX_MODES, tokenizePattern?: RegExp);

    indexMode: INDEX_MODES;
    tokenizePattern: RegExp;
    caseSensitive: boolean;

    indexDocument: (uid: any, token: string) => void;
    search: (query: string) => SearchApiPromise<any[]>;
}

interface INDEX_MODES {
    ALL_SUBSTRINGS: "ALL_SUBSTRINGS";
    EXACT_WORDS: "EXACT_WORDS";
    PREFIXES: "PREFIXES";
}

interface SearchApiPromise<T> {
    isResolved(): boolean;
    isRejected(): boolean;
    resolve(value: T): void;
    reject(reason: string): void;
    then<U>(onResolve: (promise: T) => U, onReject?: (reason: string) => void): SearchApiPromise<U[]>;
}