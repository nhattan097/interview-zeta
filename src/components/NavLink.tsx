import { LinkBox, Text, LinkOverlay, HStack } from "@chakra-ui/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { INavLink } from "../interfaces/nav";

const NavLink = ({ url, name, icon: IconRoute }: INavLink) => {
  const resolved = useResolvedPath(url);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <LinkBox
      _hover={{
        color: "#3A36DB",
      }}
      color={match ? "#3A36DB" : "#000"}
      width="full"
    >
      <Link to={url}>
        <LinkOverlay px={4} py={5} as={HStack} spacing="8px">
          <IconRoute />
          <Text fontWeight={match ? "medium" : "normal"}>{name}</Text>
        </LinkOverlay>
      </Link>
    </LinkBox>
  );
};

export default NavLink;
