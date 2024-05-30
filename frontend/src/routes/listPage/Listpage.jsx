import { listData } from "../../components/lib/dummydata";
import "./listpage.scss";

export default function Listpage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">List</div>
      <div className="mapContainer">Map</div>
    </div>
  );
}
