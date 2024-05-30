import { listData } from "../../components/lib/dummydata";
import "./listpage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

export default function Listpage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}
