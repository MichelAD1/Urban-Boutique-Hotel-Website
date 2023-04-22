import { Link } from "react-router-dom";

// Icons
import { MdOutlineRateReview } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";

export default function Support() {
	return (
		<div className='container'>
			<div className='account-container'>
				<div className='account-section'>
					<h2 style={{ marginBottom: "1em" }}>Support</h2>
					<div className='settings-container'>
						<Link to='/options/preferences' className='settings-box'>
							<MdOutlineRateReview className='settings-icon' />
							<div className='settings-content'>
								<h3>Reviews</h3>
								<p>View, reply customer's reviews</p>
								<div className='settings-link'>Manage reviews</div>
							</div>
						</Link>
						<Link to='/account/security' className='settings-box'>
							<VscFeedback className='settings-icon' />
							<div className='settings-content'>
								<h3>Feedback</h3>
								<p>View customer's feedback</p>
								<div className='settings-link'>Manage photo gallery</div>
							</div>
						</Link>
						<Link to='' className='settings-box'>
							<BsFillChatDotsFill className='settings-icon' />
							<div className='settings-content'>
								<h3>Liva chat</h3>
								<p>Interact with customer's inqueries</p>
								<div className='settings-link'>Open live chat</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
