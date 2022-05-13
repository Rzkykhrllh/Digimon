import { useRouter } from 'next/router';
import { useMemo } from 'react';

import id from './id.js';
import en from './en.js';

const dictByLocale = {
  en,
  id,
};

const RGX = /{{(.*?)}}/g;

function get(obj, propsArg, defaultValue) {
  if (!obj) {
    return defaultValue;
  }
  var props, prop;
  if (Array.isArray(propsArg)) {
    props = propsArg.slice(0);
  }
  if (typeof propsArg == 'string') {
    props = propsArg.split('.');
  }
  if (typeof propsArg == 'symbol') {
    props = [propsArg];
  }
  if (!Array.isArray(props)) {
    throw new Error('props arg must be an array, a string or a symbol');
  }
  while (props.length) {
    prop = props.shift();
    if (!obj) {
      return defaultValue;
    }
    // @ts-ignore
    obj = obj[prop];
    if (obj === undefined) {
      return defaultValue;
    }
  }
  return obj;
}

export function isValidLocale(localeStr) {
  return /^(id|en)$/.test(localeStr);
}

export const i18n = (dict) => (key, params) => {
  // get the string or function
  const value = get(dict, key, '');

  if (typeof value === 'function') {
    return value(params);
  }

  if (typeof value === 'string') {
    return templite(value, params);
  }

  return value;
}

export function useI18n() {
  const router = useRouter();
  const locale = 'wkwkwkwk';
  
  // console.log('dictByLocale', dictByLocale['en']);

  const dict = useMemo(() => {
    return isValidLocale(locale) ? dictByLocale[locale] : id;
  }, [locale]);

  // console.log('dict', dict);

  const temp = i18n(dict)(`common.i`);
  // console.log('temp', temp);

  return i18n(dict);
}

function templite(str, mix) {
  // @ts-ignore
  return str.replace(RGX, (x, key, y) => {
    x = 0;
    y = mix;
    key = key.trim().split('.');
    while (y && x < key.length) {
      y = y[key[x++]];
    }
    return y != null ? y : '';
  });
}
