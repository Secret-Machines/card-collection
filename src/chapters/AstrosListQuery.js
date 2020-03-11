import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { AstroList } from "./ChapterList";

const chapterQuery = gql`
  query chapters2($offset: String) {
    chapters2(limit: 20, offset: $offset) @client {
      id
      player
      company
      card_type
      year
      notable
      url
    }
  }
`;

const AstrosListQuery = () => {
  return (
    <Query query={chapterQuery}>
      {({ data, fetchMore }) =>
        data && (
          <AstroList
            chapters2={data.chapters2 || []}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  offset: data.chapters2.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    chapters: [...prev.chapters, ...fetchMoreResult.chapters]
                  });
                }
              })
            }
          />
        )
      }
    </Query>
  );
};

export default AstrosListQuery;
