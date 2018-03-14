// Type definitions for js-worker-search
// Project: https://github.com/bvaughn/js-worker-search
// Definitions by: Julia Kieserman <https://github.com/juliakieserman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SearchApiIndex extends SearchApi {
    indexDocument: (uid: any, text: string) => void;
    search: (searchTerm: string) => SearchApiPromise<SearchApiResults>;
}

interface SearchApiPromise<T> {
    isResolved(): boolean;
    isRejected(): boolean;
    resolve(value: T): void;
    reject(reason: string): void;
    then<U>(onResolve: (promise: T) => U, onReject?: (reason: string) => void): SearchApiPromise<U>;
}

interface SearchApi {
    indexMode?: IndexModes;
    tokenizePattern?: RegExp;
    caseSensitive?: boolean;
}

interface SearchApiResults {
    matches: string[];
}

declare enum IndexModes {
    ALL_SUBSTRINGS,
    EXACT_WORDS,
    PREFIXES,
}