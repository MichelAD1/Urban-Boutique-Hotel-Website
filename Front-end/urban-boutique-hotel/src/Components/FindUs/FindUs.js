import Slideshow from "../../Global/Components/Slideshow";

// Images
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";
import att_3 from "../../assets/images/att-3.jpg";
import att_4 from "../../assets/images/att-4.jpg";
import att_5 from "../../assets/images/att-5.jpg";

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
			<div className='find-content'>
				<div className='section-title'>
					<h4>Location</h4>
					<div />
				</div>
			</div>
		</>
	);
}

export default FindUs;
