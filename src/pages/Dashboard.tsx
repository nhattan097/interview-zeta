import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardLineChart from "../components/CardLineChart";
import CardPieChart from "../components/CardPieChart";
import CardSimpleChart from "../components/CardSimpleChart";
import CardTinyChart from "../components/CardTinyChart";
import Welcome from "../components/Welcome";

const Dashboard = () => {
  return (
    <Box p={12}>
      <Grid
        minH="100vh"
        gridTemplateColumns={{
          base: "0.8fr 0.8fr 1fr",
        }}
        gridTemplateRows={{
          base: "300px 0.3fr 1fr",
        }}
        gap="6"
      >
        <GridItem borderRadius="lg" bg="#2BEBC8" colSpan={2}>
          <Welcome />
        </GridItem>
        <GridItem p={6} borderRadius="lg" bg="white">
          <CardTinyChart />
        </GridItem>
        <GridItem p={6} borderRadius="lg" bg="white">
          <CardLineChart stroke="#FF7777" />
        </GridItem>
        <GridItem p={6} borderRadius="lg" bg="white">
          <CardLineChart stroke="#F3C522" />
        </GridItem>
        <GridItem p={6} borderRadius="lg" bg="white">
          <CardLineChart stroke="#06AA8D" />
        </GridItem>
        <GridItem p={6} borderRadius="lg" colSpan={2} bg="white">
          <CardSimpleChart />
        </GridItem>
        <GridItem p={6} borderRadius="lg" bg="white">
          <CardPieChart />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
