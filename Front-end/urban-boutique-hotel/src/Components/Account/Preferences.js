import React, { useState, useEffect } from "react";

const Preferences = () => {
	const [edit, setEdit] = useState(false);
	const [currency, setCurrency] = useState("USD");
	const [language, setLanguage] = useState("English");

	useEffect(() => {
		handleCancel();
	}, []);

	const handleEdit = () => {
		setEdit(true);
	};
	const handleCancel = () => {
		setEdit(false);
		setCurrency("USD");
		setLanguage("English");
	};
	const handleSubmit = () => {
		setEdit(console.log("Submitted"));
	};

	return (
		<>
			<div className='profile-container'>
				<form className='profile-section'>
					<div className='profile-item'>
						<div className='profile-title'>
							<h2>Preferences</h2>
							<h5>Change your language and currency</h5>
						</div>
						<div>
							{edit && (
								<button
									type='Submit'
									className='profile-btn save'
									onClick={handleSubmit}>
									Save
								</button>
							)}
							<button
								type='button'
								className='profile-btn'
								onClick={() => {
									if (edit) {
										handleCancel();
									} else {
										handleEdit();
									}
								}}>
								{!edit ? "Edit" : "Cancel"}
							</button>
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Currency</label>
							</div>
							{edit && (
								<div className='info-item'>
									<select
										className='account-input'
										value={currency}
										onChange={(e) => {
											setCurrency(e.target.value);
										}}>
										<option value='USD'>USD</option>
										<option value='EUR'>EUR</option>
										<option value='GBP'>GBP</option>
										<option value='JPY'>JPY</option>
										<option value='AUD'>AUD</option>
										<option value='CAD'>CAD</option>
									</select>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{currency}</p>
								</div>
							)}
						</div>
					</div>
					<div className='account-item'>
						<div className='account-info'>
							<div className='info-item'>
								<label>Language</label>
							</div>
							{edit && (
								<div className='info-item'>
									<select
										className='account-input'
										value={language}
										onChange={(e) => {
											setLanguage(e.target.value);
										}}>
										<option value='English'>English</option>
										<option value='Spanish'>Spanish</option>
										<option value='French'>French</option>
										<option value='German'>German</option>
										<option value='Italian'>Italian</option>
										<option value='Japanese'>Japanese</option>
									</select>
								</div>
							)}
							{!edit && (
								<div className='info-item'>
									<p>{language}</p>
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Preferences;
