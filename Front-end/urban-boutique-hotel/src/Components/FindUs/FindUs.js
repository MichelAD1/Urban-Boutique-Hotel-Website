import Slideshow from "../../Global/Components/Slideshow";

// Images
import att_1 from "../../assets/images/att-1.jpg";
import att_2 from "../../assets/images/att-2.jpg";

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
	];
	return <Slideshow data={data} />;
}

export default FindUs;
