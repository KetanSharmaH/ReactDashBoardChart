function generateSampleData(
  valueRange = { min: 0, max: 100 },
  randomModifier = 1
) {
  const now = new Date();
  const dataPoints = [];

  const intervals = [
    { interval: 30 * 60 * 1000, numPoints: 6 }, // 3 hours
    { interval: 60 * 60 * 1000, numPoints: 24 }, // 24 hours
    { interval: 24 * 60 * 60 * 1000, numPoints: 7 }, // 7 days
    { interval: 24 * 60 * 60 * 1000, numPoints: 30 }, // 30 days
  ];

  intervals.forEach((period) => {
    for (let i = 0; i < period.numPoints; i++) {
      const timestamp = new Date(now - i * period.interval);
      const value =
        (Math.random() * (valueRange.max - valueRange.min) + valueRange.min) *
        randomModifier;

      dataPoints.push({
        datetime: timestamp.toISOString(),
        value: parseFloat(value.toFixed(2)),
      });
    }
  });

  dataPoints.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

  return dataPoints;
}

const internetSensorData = generateSampleData({ min: 0, max: 100 }, 2);

const motionSensorData = generateSampleData({ min: 0, max: 25 }, 2);
const latencySensorData = generateSampleData({ min: 0, max: 200 }, 2);
const batterySensorData = generateSampleData({ min: 3.5, max: 0.5 }, 2);

export {
  internetSensorData,
  motionSensorData,
  latencySensorData,
  batterySensorData,
};
