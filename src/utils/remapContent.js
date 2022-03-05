export const remapContent = (type, obj) => {
  let res;
  switch (type) {
    case 'movie':
      res = {
        id: obj.sys.id,
        idTmdb: obj.fields.idTmdb,
        title: obj.fields.title,
        productType: obj.fields.productType,
        genre: obj.fields.genre,
        cover: obj.fields.image.fields.file.url,
        mVote: obj.fields.mVote,
        iVote: obj.fields.iVote,
      }
      break;
    default: {}
  }
  return res;
};