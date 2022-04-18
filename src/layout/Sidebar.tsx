import {
  Box,
  Center,
  Icon,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
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
            <>
              <Box w="full" px={4} py={5} pb={0} key={index}>
                <Text textAlign="left" textColor="#a4a4a4">
                  {nav.name}
                </Text>
                {nav.child &&
                  nav.child.map((item) => <NavLink key={item.url} {...item} />)}
              </Box>
              <StackDivider borderWidth="1px" borderColor="gray.200" />
            </>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar;
