import { Flex } from "@chakra-ui/layout";
import { Movie } from "../../types";
import NewSection from "../NewSection";
import MovieCard from "./MovieCard";

const MoviesList = ({ data }: MlProps) => {
  return (
    <NewSection w={["full", "90", "83%"]} title="Trending">
      <Flex wrap="wrap" justifyContent="space-evenly" alignItems="center">
        {data?.map((movie) => (
          <MovieCard key={movie.name} movieData={movie} />
        ))}
      </Flex>
    </NewSection>
  );
};

export default MoviesList;

interface MlProps {
  data: Movie[];
}
