import { Marker, Popup } from "react-leaflet";

function pin({ item }) {
  const position = [item.latitute, item.longitute]; // Denver, Colorado
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default pin;
