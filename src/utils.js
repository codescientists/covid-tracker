import { Circle, CircleMarker, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const showDataOnMap = (data, casesType = "cases") => {
  const center = [51.505, -0.09];
  const fillBlueOptions = { fillColor: "blue" };
  const redOptions = { color: "red" };

  data.map((country) => (
    <>
      <layerGroup>
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          pathOptions={redOptions}
          radius={200}
        />
        <CircleMarker
          center={[country.countryInfo.lat, country.countryInfo.long]}
          pathOptions={redOptions}
          radius={
            Math.sqrt(country[casesType]) *
            casesTypeColors[casesType].multiplier
          }
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      </layerGroup>
    </>
  ));
};
