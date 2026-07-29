function App() {

  const office = {
    name: "Smart Office",
    rent: 55000,
    address: "Bangalore"
  };

  const officeSpaces = [
    {
      name: "Smart Office",
      rent: 55000,
      address: "Bangalore",
      image: "https://via.placeholder.com/300x200"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Hyderabad",
      image: "https://via.placeholder.com/300x200"
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>

      <img
        src={office.image || "https://via.placeholder.com/300x200"}
        alt="Office Space"
        width="300"
        height="200"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.name}</p>
      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> {office.rent}
      </p>
      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {officeSpaces.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            alt={item.name}
            width="300"
            height="200"
          />

          <p><b>Name:</b> {item.name}</p>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green"
            }}
          >
            <b>Rent:</b> {item.rent}
          </p>

          <p><b>Address:</b> {item.address}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;