import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types
function Chart({ title, icon, data, datasetLabel }) {
  const [timePeriod, setTimePeriod] = useState("3h");
  const [filteredData, setFilteredData] = useState({
    labels: [],
    datasets: [
      {
        label: datasetLabel,
        data: [],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  useEffect(() => {
    const filterData = (timePeriod) => {
      const now = new Date();
      const parsedData = data.map((point) => ({
        datetime: new Date(point.datetime),
        value: point.value,
      }));

      let filteredLabels = [];
      let filteredData = [];

      switch (timePeriod) {
        case "3h":
          filteredData = parsedData.filter(
            (point) => now - point.datetime <= 3 * 60 * 60 * 1000
          ); // Last 3 hours
          filteredLabels = filteredData.map((point) =>
            point.datetime.toLocaleTimeString()
          ); // Hours
          filteredData = filteredData.map((point) => point.value);
          break;
        case "24h":
          filteredData = parsedData.filter(
            (point) => now - point.datetime <= 24 * 60 * 60 * 1000
          ); // Last 24 hours
          filteredLabels = filteredData.map((point) =>
            point.datetime.toLocaleTimeString()
          ); // Hours
          filteredData = filteredData.map((point) => point.value);
          break;
        case "7d":
        case "30d":
          // Group by date and calculate average value for each date
          const groupedByDate = parsedData.reduce((acc, point) => {
            const dateKey = point.datetime.toISOString().split("T")[0];
            if (!acc[dateKey]) {
              acc[dateKey] = { totalValue: 0, count: 0 };
            }
            acc[dateKey].totalValue += point.value;
            acc[dateKey].count += 1;
            return acc;
          }, {});

          const periodStartDate =
            timePeriod === "7d"
              ? new Date(now - 7 * 24 * 60 * 60 * 1000)
              : new Date(now - 30 * 24 * 60 * 60 * 1000);

          filteredLabels = Object.keys(groupedByDate).filter((date) => {
            const dateObj = new Date(date);
            return dateObj >= periodStartDate;
          });

          filteredData = filteredLabels.map(
            (date) => groupedByDate[date].totalValue / groupedByDate[date].count
          );
          break;
        default:
          break;
      }

      return {
        labels: filteredLabels,
        datasets: [
          {
            label: datasetLabel,
            data: filteredData,
            fill: false,
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
          },
        ],
      };
    };

    setFilteredData(filterData(timePeriod));
  }, [timePeriod, data]);

  return (
    <Card className="mb-4 bg-dark text-white">
      <Card.Header className="fw-medium text-secondary pt-3 border-0">
        {title}
      </Card.Header>
      <Card.Body className="pt-0">
        <div className="h3 fw-normal">
          {icon}
          <span>{title}</span>
        </div>
        <ButtonGroup className="mb-3 float-end">
          <Button
            size="sm"
            variant={timePeriod === "3h" ? "primary" : "outline-primary"}
            onClick={() => setTimePeriod("3h")}
          >
            Last 3 hours
          </Button>
          <Button
            size="sm"
            variant={timePeriod === "24h" ? "primary" : "outline-primary"}
            onClick={() => setTimePeriod("24h")}
          >
            Last 24 hours
          </Button>
          <Button
            size="sm"
            variant={timePeriod === "7d" ? "primary" : "outline-primary"}
            onClick={() => setTimePeriod("7d")}
          >
            Last 7 days
          </Button>
          <Button
            size="sm"
            variant={timePeriod === "30d" ? "primary" : "outline-primary"}
            onClick={() => setTimePeriod("30d")}
          >
            Last 30 days
          </Button>
        </ButtonGroup>
        <Line
          data={filteredData}
          options={{
            aspectRatio: 4,
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default Chart;
