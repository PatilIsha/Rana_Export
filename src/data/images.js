// Real, freely-licensed photography sourced from Wikimedia Commons (Special:FilePath — stable,
// hotlink-friendly redirects to the original file). Each entry was visually verified before use.
const commons = (file, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

export const IMAGES = {
  heroFarm: commons("Aerial view of agricultural fields in Punjab, India.jpg", 2200),
  ruralRoad: commons("State Highway 15 Rural Punjab India.jpg"),
  wheatFieldSunset: commons("Acker-bei Sonnenuntergang-July2006.JPG"),
  riceFields: commons("GREEN RICE FIELDS PICHATUR ap - panoramio.jpg"),
  truckFleet: commons("Livestock transport Mercedes-Benz Actros.jpg"),
  cargoShip: commons("Cargo ship Susan Borchard at Port of Barcelona container terminal - 6 Oct. 2011.jpg"),
  portAerial: commons("Aerial photograph of the Port of Miami Container Port.jpg"),
  farmerPortrait: commons("An Indian farmer spreading fertilizer over a crop.jpg"),
  greenHills: commons("Panoramic View of the Landscape from a Hilltop in Rajasthan, India.jpg"),
  sunriseField: commons("Sunrise over harvested rice field in Ershui.jpg"),
  tradeRoutes: commons("Global Air and Sea Routes (17650139495).jpg"),
  tractorAerial: commons("Tractor New Holland T6.165 plowing (Zadobrova, Ljubljana).jpg"),
};
