export class Maps {
  constructor(coords) {
    //this.coordinates = coords;
    this.render(coords);
  }
  render(coordinates) {
    if (!google) {
      alert("Could not load google library - please try again later!");
      return;
    }
    const map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 15,
    });
    new google.maps.Marker({ position: coordinates, map: map });
  }
}
