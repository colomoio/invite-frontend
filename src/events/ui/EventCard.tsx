import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  Image,
  Flex,
  Button,
  Avatar,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

import dayjs from "dayjs";
import { Input } from "../../core/ui/Input";

export type EventCardProps = {
  eventName: string;
  imgSrc: string;
  location: string;
  timestamp: number;
  guests: number;
  description?: string;
};

export function EventCard(props: EventCardProps) {
  const { eventName, imgSrc, location, timestamp, guests } = props;
  const description = props?.description;

  let unixTime = dayjs(timestamp);

  let date = `${unixTime.format("D/M/YYYY")}`;
  let time = `${unixTime.format("HH:mm a")}`;
  return (
    <>
      <Card
        maxW="25rem"
        padding="1rem"
        margin="auto"
        borderRadius="2rem"
        backgroundColor="#EBD5D8"
      >
        <Flex>
          <Flex direction="column" align="center" justify="flex-start">
            <Image
              borderRadius="full"
              boxSize="7rem"
              src={imgSrc}
              alt="image of the event"
              marginBottom="0.7rem"
              objectPosition="center"
              objectFit="cover"
              fallbackSrc="https://images.unsplash.com/photo-1616095818012-c386cf5a4c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80"
            />
            <Flex>
              <Tag
                height="2.5rem"
                backgroundColor="#F2E3E5"
                borderRadius="full"
                padding=".5rem"
              >
                <Avatar boxSize="7" mr="1rem" />
                <TagLabel>{guests}</TagLabel>
              </Tag>
            </Flex>
          </Flex>
          <CardBody padding="0 1rem">
            <CardHeader padding=".4rem 0 0">
              <Heading size="lg" textAlign="center">
                {eventName}
              </Heading>
            </CardHeader>

            <Box textAlign="center" textColor="#4F10A8">
              <Text marginTop=".25rem" fontSize="xs">
                {date}
              </Text>
              <Text fontSize="xs">{time}</Text>
            </Box>
            <Box textAlign="center" marginTop="2.5rem">
              <Heading size="xs">Ubicacion</Heading>
              <Text marginTop=".25rem" fontSize="sm">
                {location}
              </Text>
            </Box>
          </CardBody>
        </Flex>
        {description ? (
          <Box margin="1rem 0 .5rem">
            <Heading size="xs">Descripcion</Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        ) : null}

        <Input label="Name" Inputvalue="value" InputonChange={() => {}} />

        <Button
          h="3rem"
          fontSize="sm"
          marginTop="1rem"
          border="2px solid #8B44EE"
          backgroundColor="#8B44EE"
          borderRadius="1rem"
          textColor="#F2E3E5"
          _hover={{
            backgroundColor: "#F2E3E5",
            textColor: "#8B44EE",
          }}
        >
          Siguiente
        </Button>
      </Card>
    </>
  );
}
