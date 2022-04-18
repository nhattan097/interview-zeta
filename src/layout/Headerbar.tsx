import {
  Box,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoMdExit, IoMdPerson } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Notification from "../assets/svg/new.svg";

const Headerbar = () => {
  return (
    <Box boxShadow="0px 2px 2px rgba(163, 171, 185, 0.26)" px={12} py={4}>
      <HStack spacing={0}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="#B5B7B9" />}
          />
          <Input
            maxW={260}
            bg="#ECECEC"
            borderRadius="3xl"
            placeholder="Search"
          />
        </InputGroup>
        <HStack w="full" justify="flex-end" spacing="22px">
          <Image src={Notification} />
          <Divider
            h="38px"
            borderWidth="1px"
            orientation="vertical"
            borderColor="gray.200"
          />
          <Menu>
            <MenuButton>
              <HStack spacing="22px">
                <Text as="span" fontSize="sm">
                  Ethan Hunt
                </Text>
                <Avatar w="40px" h="40px" src="https://picsum.photos/100/100" />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<IoMdPerson />} command="⌘P">
                Profile
              </MenuItem>
              <MenuItem icon={<IoMdExit />} command="⌘E">
                Exit
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Headerbar;
