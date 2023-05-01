import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

//API
import FetchProfile from "../../api-client/Profile/FetchProfile";

const UserItem = () => {
	const [data, setData] = useState({});
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("");

	const [loading, setLoading] = useState(true);

	const {
		status,
		error,
		data: profileData,
	} = useQuery(["profile_data"], FetchProfile, {
		staleTime: 300000, // 5 minutes
	});
	useEffect(() => {
		console.log(profileData);
		if (profileData) {
			if (profileData.user) {
				setData(profileData.user);
				localStorage.setItem("token", profileData.authorisation.token);
			} else {
				alert("Please login again");
			}
			setLoading(false);
		}
	}, [profileData, status]);

	useEffect(() => {
		if (data) {
			setUsername(data.username);
			setName(data.name);
			setEmail(data.email);
			setDob(data.dob);
			setGender(data.gender);
		}
	}, [data]);

	function capitalizeFirstLetter(string) {
		if (string) return string.charAt(0).toUpperCase() + string.slice(1);
	}

	if (loading) {
		<div className='container-buffer'>
			<div className='buffer-loader home'></div>
		</div>;
	}

	return (
		<div className='container'>
			<div className='edit-container'>
				<div className='edit-item'>
					<h2>{username}</h2>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Name</label>
						</div>
						<div>
							<p>{name}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Email</label>
						</div>
						<div>
							<p>{email}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Date of birth</label>
						</div>
						<div>
							<p>{dob}</p>
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info'>
						<div>
							<label>Gender</label>
						</div>
						<div>
							<p>{capitalizeFirstLetter(gender)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
