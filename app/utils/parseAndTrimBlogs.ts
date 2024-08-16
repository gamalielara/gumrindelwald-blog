import { Article, ArticleFirestoreResponse, TrimmedArticle } from "./types";

const getFireStoreProp = (value: ArticleFirestoreResponse) => {
  const props = {
    arrayValue: 1,
    bytesValue: 1,
    booleanValue: 1,
    doubleValue: 1,
    geoPointValue: 1,
    integerValue: 1,
    mapValue: 1,
    nullValue: 1,
    referenceValue: 1,
    stringValue: 1,
    timestampValue: 1,
  };

  return Object.keys(value).find((v) => props[v as keyof typeof props] === 1);
};

/**
 *
 * @description recursively parse firebase blog response
 */
const FireStoreParser = (value: ArticleFirestoreResponse): TrimmedArticle => {
  let replicatedValue = JSON.parse(JSON.stringify(value));

  const prop = getFireStoreProp(value);
  if (prop === "doubleValue" || prop === "integerValue") {
    replicatedValue = Number(replicatedValue[prop]);
  } else if (prop === "arrayValue") {
    replicatedValue = (
      (replicatedValue[prop] && replicatedValue[prop].values) ||
      []
    ).map((v: ArticleFirestoreResponse) => FireStoreParser(v));
  } else if (prop === "mapValue") {
    replicatedValue = FireStoreParser(
      (replicatedValue[prop] && replicatedValue[prop].fields) || {}
    );
  } else if (prop === "geoPointValue") {
    replicatedValue = { latitude: 0, longitude: 0, ...replicatedValue[prop] };
  } else if (prop) {
    replicatedValue = replicatedValue[prop];
  } else if (typeof replicatedValue === "object") {
    Object.keys(replicatedValue).forEach(
      (k) => (replicatedValue[k] = FireStoreParser(replicatedValue[k]))
    );
  }

  return replicatedValue;
};

const parseAndTrimBlogs = (value: ArticleFirestoreResponse): Article[] => {
  const parsedBlogs = FireStoreParser(value);

  const trimmedArticles = parsedBlogs.documents.map((article) => {
    const { fields, createTime, updateTime } = article;
    return {
      ...fields,
      createTime,
      updateTime,
    };
  });

  return trimmedArticles;
};

export default parseAndTrimBlogs;
