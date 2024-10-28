export const baseurl = 'https://socialimagesize.com';
export const apihyBaseUrl = 'https://www.apihy.com';
// export const scraperBaseUrl = 'http://45.77.124.113:8000';
export const scraperBaseUrl = 'http://127.0.0.1:8000';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
