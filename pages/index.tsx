import { Flex, Heading, Stack, Image, Text, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Flex w={"100vw"} h={"95vh"} top={"50%"} alignItems={"center"} justifyContent={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
          <Image src="logo.png" h="192px" w="192px" />
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Heading>
              Be right back.
            </Heading>
            <Text textAlign={"center"} color="#8F9094">
              nordstud.io is under maintenance. <br /> Please check back later.
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Text textAlign={"center"} color="#8F9094">
        <Link href="https://twitter.com/wearenordstudio" isExternal>Twitter</Link>
        {" "}•{" "}
        <Link href="https://instagram.com/wearenordstudio" isExternal>Instagram</Link>
      </Text>
    </>
  )
}

export default Home;
