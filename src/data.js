const internetSensorData = {
  labels: ["22:14", "22:34", "22:54", "23:14", "23:34", "23:54", "00:14"],
  height: 50,
  datasets: [
    {
      label: "Internet Speed (Mbps)",
      data: [30, 50, 40, 60, 50, 70, 60],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
  options: {
    scales: {
      y: {
        ticks: {
          stepSize: 10, // Step size for the y-axis
        },
      },
    },
  },
};

const motionSensorData = {
  labels: ["22:14", "22:34", "22:54", "23:14", "23:34", "23:54", "00:14"],
  height: 50,
  datasets: [
    {
      label: "Velocity (M/S)",
      data: [1.2, 2.5, 1.8, 3.0, 2.2, 3.5, 2.8],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.5, // Step size for the y-axis
        },
      },
    },
  },
};

const latencySensorData = {
  labels: ["22:14", "22:34", "22:54", "23:14", "23:34", "23:54", "00:14"],
  height: 50,
  datasets: [
    {
      label: "Temperature (°C)",
      data: [22.5, 23.0, 22.8, 23.5, 23.2, 23.8, 23.4],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: false, // Since temperature typically doesn't start at 0
        ticks: {
          stepSize: 0.5, // Step size for the y-axis
        },
      },
    },
  },
};

const batterySensorData = {
  labels: ["22:14", "22:34", "22:54", "23:14", "23:34", "23:54", "00:14"],
  height: 50,
  datasets: [
    {
      label: "Voltage (V)",
      data: [3.7, 3.8, 3.6, 3.9, 3.7, 4.0, 3.8],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: false, // Voltage typically doesn't start at 0V
        ticks: {
          stepSize: 0.1, // Step size for the y-axis
        },
      },
    },
  },
};

export {
  internetSensorData,
  motionSensorData,
  latencySensorData,
  batterySensorData,
};
