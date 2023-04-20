import "./business-styles.css";

import { useNavigate } from "react-router-dom";

// Images
import dummy from "../../assets/dummy.png";

function Business({ data }) {
	const navigate = useNavigate();
	const showPopup = (item) => {
		navigate("/business/profile", { state: { data: item } });
	};
	return (
		<div className='link' onClick={() => showPopup(data)}>
			<div className='business-logo'>
				<img className='image' src={data.logo_url} alt='Business logo' />
			</div>
			<div className='name'>{data.name}</div>
			<div className='business-details'>
				<p className='paragraph'>
					<b>Phone number:</b> {data.number}
				</p>
				<p className='paragraph'>
					<b>Email:</b> {data.email}
				</p>
				<p className='paragraph'>
					<b>Location:</b> {data.location}
				</p>
			</div>
		</div>
	);
}

export default Business;
