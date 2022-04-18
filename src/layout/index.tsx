import { Box, Grid, GridItem } from "@chakra-ui/react";
import Headerbar from "./Headerbar";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Layout = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid
      minH="100vh"
      gridTemplateColumns={{
        base: "200px 1fr",
      }}
      gridTemplateRows={{
        base: "72px 1fr",
      }}
      gridTemplateAreas={{
        base: `'sidebar headerbar' 'sidebar content'`,
      }}
    >
      <GridItem gridArea="sidebar">
        <Sidebar />
      </GridItem>
      <GridItem gridArea="headerbar">
        <Headerbar />
      </GridItem>
      <GridItem gridArea="content" bg="#F5F5F5">
        <Content />
      </GridItem>
    </Grid>
  </Box>
);

export default Layout;
