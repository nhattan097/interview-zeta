import {
  HStack,
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { memo } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface Props {
  stroke: string;
}

const CardLineChart = ({ stroke }: Props) => {
  return (
    <HStack w="full" h="full">
      <Flex h="full" align="start" flex={1}>
        <StatGroup>
          <Stat textAlign="left">
            <StatLabel
              fontSize="xs"
              fontWeight="semibold"
              color="#000000b3"
              textTransform="uppercase"
            >
              Chart Title
            </StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              1.10% Since yesterday
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
      <Flex flex={1} h="full">
        <ResponsiveContainer width="99%" height="100%" minWidth="0">
          <LineChart data={data}>
            <Line
              dot={false}
              type="monotone"
              dataKey="pv"
              stroke={stroke}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </HStack>
  );
};

export default memo(CardLineChart);
