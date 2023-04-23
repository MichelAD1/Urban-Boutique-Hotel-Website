import { useState, useEffect } from "react";

const OptionsCard = (reqData) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(reqData.reqData);
	}, [reqData]);

	console.log(data.reqData);

	return (
		<div className='options-card'>
			<div className='options-card-header'>
				<h2>{data.title}</h2>
			</div>
			<p>{data.description}</p>
		</div>
	);
};

export default OptionsCard;
