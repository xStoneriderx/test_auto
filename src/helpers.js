import queryString from 'query-string';
import { mapValues } from 'lodash';

export const pathnameToQuery = pathname => {
  const replacedPathname = pathname.replace(/-/g, '=').replace(/\//g, '&');
  const query = queryString.parse(replacedPathname);
  return mapValues(query, value => value && value.replace(/=/g, '-'));
};

export const queryToPathname = query => {
  const pathname = queryString.stringify(query);
  return pathname.replace(/=/g, '-').replace(/[&?]/g, '/');
};
