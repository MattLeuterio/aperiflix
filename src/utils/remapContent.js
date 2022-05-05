export const remapContent = (type, obj) => {
  let res;
  switch (type) {
    case 'movie':
      res = {
        id: obj.sys.id,
        idTmdb: obj.fields.idTmdb,
        title: obj.fields.title,
        originalLanguage: obj.fields.originalLanguage,
        originalTitle: obj.fields.originalTitle,
        releaseDate: obj.fields.releaseDate,
        summary: obj.fields.summary,
        trailerId: obj.fields.trailerUrl,
        productType: obj.fields.productType,
        posterPath: obj.fields.posterPath?.fields?.file?.url,
        runtime: obj.fields.runtime,
        genre: obj.fields.genre,
        cover: obj.fields.image.fields.file.url,
        mVote: obj.fields.mVote,
        iVote: obj.fields.iVote,
      };
      break;
    default: {}
  }
  return res;
};