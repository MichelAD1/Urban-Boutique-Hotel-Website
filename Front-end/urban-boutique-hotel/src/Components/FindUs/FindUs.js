import Footer from "../../Global/Components/Footer";
import Slideshow from "../../Global/Components/Slideshow";

// Images
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";
import att_3 from "../../assets/images/att-3.jpg";
import att_4 from "../../assets/images/att-4.jpg";
import att_5 from "../../assets/images/att-5.jpg";
import map from "../../assets/images/map.jpg";

function FindUs() {
	const data = [
		{
			id: 1,
			title: "Schönbrunn Palace",
			description:
				"Schönbrunn Palace is a Baroque palace in Vienna, Austria built as a summer residence for the Habsburgs. It has over 1,400 rooms, luxurious furnishings, and intricate decorations showcasing Habsburg opulence. The palace gardens feature lawns, flower beds, fountains, and landmarks such as the Neptune Fountain and Gloriette. It is a popular tourist attraction and a UNESCO World Heritage Site.",
			image: att_1,
		},
		{
			id: 2,
			title: "The Hofburg",
			description:
				"The Hofburg is a large palace complex in the center of Vienna, Austria. It has served as the residence of the Habsburg dynasty and the Austrian government for over 700 years. The palace features impressive Baroque and Gothic architecture and is home to several museums, including the Imperial Apartments, the Sisi Museum, and the Austrian National Library. Today, it is one of Vienna's most popular tourist attractions, offering a glimpse into Austria's rich history and culture.",
			image: att_2,
		},
		{
			id: 3,
			title: "Belvedere Palace",
			description:
				"Belvedere Palace is a Baroque-style building complex in Vienna, Austria, built as a summer residence for Prince Eugene of Savoy in the 18th century. It consists of the Upper and Lower Belvedere palaces, connected by a beautiful garden. Today, it is a popular tourist attraction and art museum, displaying works by famous Austrian artists such as Gustav Klimt and Egon Schiele.",
			image: att_3,
		},
		{
			id: 4,
			title: "St. Stephen's Cathedral",
			description:
				"St. Stephen's Cathedral, or Stephansdom, is a Gothic-style cathedral in Vienna, Austria. Its iconic spire stands at 136 meters tall, and it boasts intricate stained glass windows, vaulted ceilings, and ornate altarpieces. The cathedral has a rich history as a religious and cultural landmark and remains a popular destination for visitors today.",
			image: att_4,
		},
		{
			id: 5,
			title: "Vienna Operahouse",
			description:
				"The Vienna Opera House is a world-famous opera house located in Vienna, Austria. It opened in 1869 and is home to the Vienna State Opera and Vienna Philharmonic Orchestra. The Neo-Renaissance building has a seating capacity of over 2,200 and is known for its ornate architecture.",
			image: att_5,
		},
	];
	return (
		<>
			<Slideshow data={data} />
			<div className='find-info'>
				<div className='find-title'>
					<h2>Arrival </h2>
					<div />
				</div>
				{/* S-Bahn (S7) */}
				<div className='arrival-info'>
					<div className='section-title no-mg'>
						<h3>S-Bahn (S7)</h3>
					</div>
					<div className='arrival-description'>
						<p>
							The S-Bahn offers the cheapest fare to the airport. Several
							stopovers allow easy entry and exit across the city, most of them
							with suburban and subway connections. Trains leave between about
							04.00 and 00.00. A ride takes about 23 minutes from Wien Mitte and
							costs 4.10 €
						</p>
					</div>
				</div>
				{/* End of S-Bahn (S7) */}
				{/* CAT - City Airport Train */}
				<div className='arrival-info'>
					<div className='section-title no-mg'>
						<h3>CAT - City Airport Train</h3>
					</div>
					<div className='arrival-description'>
						<p>
							The City Airport Train is perhaps the most comfortable travel
							option, but also one of the most expensive. Every 30 minutes there
							is a fast train between Wien-Mitte and the airport. <br />
							<br />
							From / to: Wien-Mitte (U3, U4 + S) - Flughafen Wien, Bahnhof{" "}
							<br />
							<br />
							Cost: when buying online 11 € (single), 19 € (return); when buying
							at machines 12 € (single), 21 € (return) <br />
							<br />
							Interval: 30 minutes
						</p>
					</div>
				</div>
				{/* End of CAT - City Airport Train */}
				{/* Vienna Airport Lines (Postbus ÖBB) */}
				<div className='arrival-info'>
					<div className='section-title no-mg'>
						<h3>Vienna Airport Lines (Postbus ÖBB)</h3>
					</div>
					<div className='arrival-description'>
						<p>
							The Vienna Airport Lines connect important transport hubs with the
							airport. And most bus stops are directly connected to subway
							stations. Buses from Morzinplatz / Schwedenplatz and Westbahnhof
							leave every 30 minutes. <br />
							<br />
							Cost: 8 € (single), 13 € (return) <br />
							<br />
							Interval: 30 minutes or 1 hour (line VAL3) <br />
							<br />
							Duration: 20-40 minutes
						</p>
					</div>
				</div>
				{/* End of Vienna Airport Lines (Postbus ÖBB) */}
				{/* TAXI */}
				<div className='arrival-info'>
					<div className='section-title no-mg'>
						<h3>TAXI</h3>
					</div>
					<div className='arrival-description'>
						<p>
							The Vienna taxi centers offer trips with an airport package. For a
							fixed price of 36 € (if ordered in advance) you get so directly
							from home to the airport. Accessible for example under 31300,
							40100 or 60160. Please say on the phone that you need an airport
							taxi! <br />
							<br />
							From / to: anywhere in Vienna - Airport, departure / arrival{" "}
							<br />
							<br />
							Cost: 36 € fixed price (+ tip) <br />
							<br />
							Duration: varies depending on place of departure and traffic
							<br />
							<br />
							Duration: 20-40 minutes
						</p>
					</div>
				</div>
				{/* End of TAXI */}
			</div>
			<div className='find-info'>
				<div className='find-title'>
					<h2>Location</h2>
					<div />
				</div>
				<div className='location-description'>
					<p>
						Our house is an ideal starting point to discover the beauty of
						Vienna. Thanks to our central location, all sights are within easy
						reach: We are only 10 minutes walk from the train station
						"Westbahnhof" and 20 minutes walk from the city center. Our address
						is Andreasgasse 1, 1070 Vienna, near the famous shopping street
						"Mariahilfer Straße". With the subway station "U3 Zieglergasse"
						directly in front of our house is a drive to cultural attractions or
						shopping just a few minutes away.
					</p>
				</div>
				<img src={map} alt='' className='location-map' />
			</div>
			<Footer />
		</>
	);
}

export default FindUs;
