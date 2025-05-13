import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { PiPlusSquare } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Container maxW={"1140px"} px={4}> 
      <Flex
        h={6}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row"
        }}
      >
        <Text>
          <Link to={'/'}>Product Store 🛒</Link>
        </Text>

        <HStack spaceX={2} alignItems={"center"}>
          <Button>
            <PiPlusSquare />
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default NavBar