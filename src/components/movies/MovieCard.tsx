import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { AspectRatio, Box, Flex } from "@chakra-ui/layout";
import { Movie } from "../../data";

const MovieCard = ({ movieData }: MovieCardProps) => {
  return (
    <Box
      as="article"
      w="240px"
      cursor="pointer"
      boxShadow=" 0 0 80px 10px rgba(0, 0, 0, 0.9) inset"
      pos="relative"
    >
      <Flex
        pos="absolute"
        width="full"
        justifyContent="flex-end"
        alignItems="end"
        p="3"
      >
        <InfoOutlineIcon boxSize={4} />
      </Flex>
      <AspectRatio w="full" ratio={2 / 3}>
        <Image
          zIndex={-1}
          src={movieData.poster}
          alt={movieData.name}
          fit="cover"
          loading="lazy"
        />
      </AspectRatio>
    </Box>
  );
};

export default MovieCard;

interface MovieCardProps {
  movieData: Movie;
}
