import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const OptionsCard = (reqData) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(reqData.reqData);
	}, [reqData]);

	const capitalize = (str) => {
		if (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	};

	return (
		<Link to='/options/faqs_policies/info' className='options-card'>
			<div className='options-card-header'>
				<h2>{data.title}</h2>
				<span>{capitalize(data.tag)}</span>
			</div>
			<p>{data.description}</p>
		</Link>
	);
};

export default OptionsCard;
