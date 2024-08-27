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
function Chart({ title, icon, data }) {
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
          <Button size="sm" variant="primary">
            Last 3 hours
          </Button>
          <Button size="sm" variant="outline-primary">
            Last 24 hours
          </Button>
          <Button size="sm" variant="outline-primary">
            Last 7 days
          </Button>
          <Button size="sm" variant="outline-primary">
            Last 30 days
          </Button>
        </ButtonGroup>
        <Line
          data={data}
          options={{
            // maintainAspectRatio: false,
            aspectRatio: 4,
            ...data.options,
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default Chart;
