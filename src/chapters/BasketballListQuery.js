import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BasketballList } from "./ChapterList";

const chapterQuery = gql`
  query chapters3($offset: String) {
    chapters3(limit: 20, offset: $offset) @client {
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
          <BasketballList
            chapters3={data.chapters3 || []}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  offset: data.chapters3.length
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
