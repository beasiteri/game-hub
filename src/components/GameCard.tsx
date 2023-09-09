import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import PlatormIconList from "./PlatormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <VStack alignItems={"left"}>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
