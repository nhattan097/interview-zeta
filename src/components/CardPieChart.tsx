import {
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
} from "@chakra-ui/react";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const CardPieChart = () => {
  return (
    <Flex flexDirection="column" flex={1} h="full">
      <StatGroup>
        <Stat
          css={{
            dl: {
              display: "flex",
              justifyContent: "space-between",
            },
          }}
          textAlign="left"
        >
          <StatLabel fontSize="md" fontWeight="semibold" textAlign="left">
            Chart Title
          </StatLabel>
          <StatHelpText>
            <StatArrow type="increase" />
            1.10% Since yesterday
          </StatHelpText>
        </Stat>
      </StatGroup>
      <ResponsiveContainer width="99%" height="100%">
        <PieChart>
          <Pie
            width={140}
            data={data}
            innerRadius="90%"
            outerRadius="100%"
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default CardPieChart;
