import { useState, useEffect } from "react";

import output from "../../Global/Data/Currencies";

const Preferences = () => {
	const [edit, setEdit] = useState(false);

	const [languages, setLanguages] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [paymentMethods, setPaymentMethods] = useState([]);

	useEffect(() => {
		setLanguages([
			{
				id: 1,
				name: "English",
				code: "en",
				isDefault: true,
				available: true,
			},
			{
				id: 2,
				name: "Arabic",
				code: "ar",
				isDefault: false,
				available: true,
			},
			{
				id: 3,
				name: "French",
				code: "fr",
				isDefault: false,
				available: false,
			},
			{
				id: 4,
				name: "German",
				code: "de",
				isDefault: false,
				available: false,
			},
		]);
		setCurrencies(output);
		setPaymentMethods([
			{
				id: 1,
				name: "Cash",
				isDefault: true,
			},
			{
				id: 2,
				name: "Credit Card",
				isDefault: false,
			},
		]);
	}, [output]);

	const handleCancel = () => {
		setEdit(false);
	};

	const handleLanguageChange = (e, id) => {
		const newLanguages = languages.map((language) => {
			if (language.id === id) {
				language.available = e.target.checked;
			}
			return language;
		});
		setLanguages(newLanguages);
	};

	const handleCurrencyChange = (e, id) => {
		const newCurrencies = currencies.map((currency) => {
			if (currency.id === id) {
				currency.isDefault = e.target.checked;
			}
			return currency;
		});
		setCurrencies(newCurrencies);
	};

	const handlePaymentMethodChange = (e, id) => {
		const newPaymentMethods = paymentMethods.map((paymentMethod) => {
			if (paymentMethod.id === id) {
				paymentMethod.isDefault = e.target.checked;
			}
			return paymentMethod;
		});
		setPaymentMethods(newPaymentMethods);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setEdit(false);
	};

	return (
		<div className='container'>
			<form className='edit-container' onSubmit={(e) => handleEdit(e)}>
				<div className='edit-item'>
					<h2>Preferences</h2>
					{!edit && (
						<button className='button' onClick={(e) => setEdit(true)}>
							Edit
						</button>
					)}
					{edit && (
						<>
							<button className='save-button' type='submit'>
								Save
							</button>
							<button
								className='button'
								type='button'
								onClick={() => handleCancel()}>
								Cancel
							</button>
						</>
					)}
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Languages</label>
						</div>
						<div className='amm-checkbox'>
							{languages.map((language) => (
								<div className='checkbox-item' key={language.id}>
									{edit && (
										<input
											type='checkbox'
											checked={language.available}
											onChange={(e) => handleLanguageChange(e, language.id)}
										/>
									)}
									<label>{language.name}</label>
									{language.isDefault && <span>Default</span>}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Currencies</label>
						</div>
						<div className='amm-checkbox currencies'>
							{currencies.map((currency) => (
								<div className='checkbox-item' key={currency.id}>
									{edit && (
										<input
											type='checkbox'
											checked={currency.isDefault}
											onChange={(e) => handleCurrencyChange(e, currency.id)}
										/>
									)}
									<label>{currency.name}</label>
									{currency.isDefault && <span>Default</span>}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Payment</label>
						</div>
						<div className='amm-checkbox'>
							{paymentMethods.map((paymentMethod) => (
								<div className='checkbox-item' key={paymentMethod.id}>
									{edit && (
										<input
											type='checkbox'
											checked={paymentMethod.isDefault}
											onChange={(e) =>
												handlePaymentMethodChange(e, paymentMethod.id)
											}
										/>
									)}
									<label>{paymentMethod.name}</label>
									{paymentMethod.isDefault && <span>Default</span>}
								</div>
							))}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Preferences;
