import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query movies {
    movies {
      name
      cover
      poster
      description
      genres
      trailer
      released
      rating
      runtime
      score {
        imdb
      }
    }
  }
`;

export const GET_MOVIE = gql`
  query GetMovie($name: String!) {
    getMovie(name: $name) {
      name
      cover
      poster
      description
      genres
      trailer
      released
      rating
      runtime
      score {
        imdb
      }
    }
  }
`;
