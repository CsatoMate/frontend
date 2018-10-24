import deviceData from "../DeviceData";



export const createDataPoint = (time = Date.now(), magnitude = 1000, offset = 0) => {
  return [
    time + offset * magnitude,
    Math.round((Math.random() * 100) * 2) / 2
  ];
};

export const createRandomData = (time, magnitude, points = 100) => {
  const data = [];
  const log = deviceData;
  log.map(item =>{
    data.push( [new Date(item.update).getTime(), item.value]);
  });
  return data;
};

export const addDataPoint = (data, toAdd) => {
  if (!toAdd) toAdd = createDataPoint();
  const newData = data.slice(0); // Clone
  newData.push(toAdd);
  return newData;
};
