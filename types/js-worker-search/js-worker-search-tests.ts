import { SearchApi } from "js-worker-search";

const searchApi = new SearchApi(true);

searchApi.index(123, "sample string");
searchApi.search("sample"); // $EpectType SearchApi.SearchApiPromise<T>