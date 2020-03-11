import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FootballList } from "./ChapterList";

const chapterQuery = gql`
  query chapters4($offset: String) {
    chapters4(limit: 20, offset: $offset) @client {
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

const FootballListQuery = () => {
  return (
    <Query query={chapterQuery}>
      {({ data, fetchMore }) =>
        data && (
          <FootballList
            chapters4={data.chapters4 || []}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  offset: data.chapters4.length
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

export default FootballListQuery;
