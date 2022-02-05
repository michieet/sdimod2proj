import ShowRates from "./components/ShowRates";

// Toggle the index value to cover the 3 cases.
// 0 - LTA, 1 - URA, 2 - HDB

function JaniceTest() {

  let index = 0;

  const testVarArray = [
    {
      "CarParkID": "24",
      "Area": "Orchard",
      "Development": "313@Somerset",
      "Location": "1.30084 103.83872",
      "AvailableLots": 98,
      "LotType": "C",
      "Agency": "LTA"
    },
    {
      "CarParkID": "A0007",
      "Area": "",
      "Development": "ANGULLIA PARK OFF STREET",
      "Location": "1.3053280313212745 103.82957069514487",
      "AvailableLots": 42,
      "LotType": "C",
      "Agency": "URA"
    },
    {
      "CarParkID": "A39",
      "Area": "",
      "Development": "BLK 401/405 ANG MO KIO AVE 10",
      "Location": "1.361151022 103.8540722",
      "AvailableLots": 58,
      "LotType": "C",
      "Agency": "HDB"
    }      
  ];

  return (
    <div className="App">
      <ShowRates carparkInfo={testVarArray[index]} />
    </div>
  );
}

export default JaniceTest;
