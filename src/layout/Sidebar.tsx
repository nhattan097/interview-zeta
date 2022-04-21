import {
  Box,
  Center,
  Icon,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "../components/NavLink";
import { Logo } from "../Logo";
import { _nav } from "../_nav";

const Sidebar = () => {
  return (
    <Box>
      <VStack spacing={0} divider={<StackDivider borderColor="gray.200" />}>
        <Center w="full" h="72px" bg="#ECECEC">
          <Icon w="84px" h="22px" as={Logo} />
        </Center>
        {_nav.map((nav, index) => {
          if (nav.url && nav.icon) {
            return <NavLink key={nav.url} {...nav} />;
          }
          return (
            <React.Fragment key={index}>
              <Box w="full" px={4} py={5} pb={0}>
                <Text textAlign="left" textColor="#a4a4a4">
                  {nav.name}
                </Text>
                {nav.child &&
                  nav.child.map((item) => <NavLink key={item.url} {...item} />)}
              </Box>
              <StackDivider borderWidth="1px" borderColor="gray.200" />
            </React.Fragment>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar;
