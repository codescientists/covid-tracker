import React from "react";
import {
  Circle,
  MapContainer,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import millify from "millify";

const WorldMap = ({ countries }) => {

  const center = [19.076, 72.8777];

  return (
    <div id="map" className="h-72 md:h-96 border drop-shadow-md p-3">
      <MapContainer
        center={center}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countries.map((country, index) => (
          <div key={index}>
            <Circle
              center={[country.countryInfo.lat, country.countryInfo.long]}
              pathOptions={{ color: "red" }}
              radius={
                Math.sqrt(country["cases"]) * 200
              }
            >
              <Popup>
                <div
                  class="bg-origin-content bg-center bg-cover h-28 w-48"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
                ></div>
                <h1 className="text-xl font-bold">{country.country}</h1>
                <div className="info">
                  <h1 className="text-md">Cases : {millify(country.cases)}</h1>
                  <h1 className="text-md">
                    Recovered : {millify(country.recovered)}
                  </h1>
                  <h1 className="text-md">
                    Deaths : {millify(country.deaths)}
                  </h1>
                </div>
              </Popup>
            </Circle>
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
