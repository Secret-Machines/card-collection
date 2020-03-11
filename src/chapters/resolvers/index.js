import mockBaseball from "../data/baseball";
import mockAstros from "../data/Astros";
import mockBasketball from "../data/basketball";
import mockFootball from "../data/football";

const getChapters = ({ limit = 10, offset = 0 }) =>
  mockBaseball
    .slice(offset, offset + limit)
    .map(chapter => ({ ...chapter, __typename: "Chapter" }));

const getAstros = ({ limit = 10, offset = 0 }) =>
  mockAstros
    .slice(offset, offset + limit)
    .map(chapter => ({ ...chapter, __typename: "Chapter" }));
const getBasketball = ({ limit = 10, offset = 0 }) =>
  mockBasketball
    .slice(offset, offset + limit)
    .map(chapter => ({ ...chapter, __typename: "Chapter" }));
const getFootball = ({ limit = 10, offset = 0 }) =>
  mockFootball
    .slice(offset, offset + limit)
    .map(chapter => ({ ...chapter, __typename: "Chapter" }));

export default {
  defaults: {
    chapters: getChapters({}),
    chapters2: getAstros({}),
    chapters3: getBasketball({}),
    chapters4: getFootball({})
  },
  resolvers: {
    Query: {
      chapters: (_, variables) => getChapters(variables),
      chapters2: (_, variables) => getAstros(variables),
      chapters3: (_, variables) => getBasketball(variables),
      chapters4: (_, variables) => getFootball(variables)
    }
  }
};
