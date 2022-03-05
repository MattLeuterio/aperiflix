import { remapContent } from './utils/remapContent';

const contentful = require("contentful");

const client = contentful.createClient({
  space: "gbsv5yv1ob8g",
  accessToken: "uG0JRSDHYTLmIJ92TCwndEMZDQIij9vZIYXJZ8oDRMM",
})

const getContent = (contentType, set) => {
  const data = client.getEntries({ content_type: `${contentType}` }).then((response) => {
    const res = response.items;
    console.log('res', res);
    const data = res.map(obj => {
      return remapContent(contentType, obj);
    })
    console.log('data', data);
    set(data);
  }, []);
  set(data);
  return data;
};

export {getContent};