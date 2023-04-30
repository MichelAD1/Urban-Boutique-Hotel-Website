import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import output from "../../Global/Data/Currencies";

// API
import GetPreferences from "../../api-client/Options/GetPreferences";

const Preferences = () => {
	const [edit, setEdit] = useState(false);

	const [languages, setLanguages] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [paymentMethods, setPaymentMethods] = useState([]);

	const [loading, setLoading] = useState(true);

	const {
		status,
		error,
		data: preferencesData,
	} = useQuery(["preferences_data"], GetPreferences, {
		staleTime: 300000, // 5 minutes
	});
	useEffect(() => {
		if (preferencesData) {
			Promise.all(preferencesData).then((results) => {
				setLanguages(results[0]);
				// setPaymentMethods(results[2]);
				setLoading(false);
			});
		}
	}, [preferencesData, status]);

	useEffect(() => {
		console.log(output);
		setPaymentMethods([
			{
				id: 1,
				name: "Credit Card",
				isDefault: true,
				available: true,
			},
			{
				id: 2,
				name: "Offline payment",
				isDefault: false,
				available: false,
			},
			{
				id: 3,
				name: "Paypal",
				isDefault: false,
				available: true,
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
				currency.available = e.target.checked;
			}
			return currency;
		});
		setCurrencies(newCurrencies);
	};

	const handlePaymentMethodChange = (e, id) => {
		const newPaymentMethods = paymentMethods.map((paymentMethod) => {
			if (paymentMethod.id === id) {
				paymentMethod.available = e.target.checked;
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
							{languages.map(
								(language) =>
									(language.isavailable || edit) && (
										<div className='checkbox-item' key={language.id}>
											{edit && (
												<input
													type='checkbox'
													checked={language.isavailable}
													onChange={(e) => handleLanguageChange(e, language.id)}
												/>
											)}
											<label>{language.name}</label>
											{language.isdeafult === 1 && <span>Default</span>}
										</div>
									),
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Currencies</label>
						</div>
						<div className='amm-checkbox currencies'>
							{currencies.map(
								(currency) =>
									(currency.available || edit) && (
										<div className='checkbox-item' key={currency.id}>
											{edit && (
												<input
													type='checkbox'
													checked={currency.available}
													onChange={(e) => handleCurrencyChange(e, currency.id)}
												/>
											)}
											{(currency.available || edit) && (
												<label>{currency.name}</label>
											)}
											{currency.isDefault && <span>Default</span>}
										</div>
									),
							)}
						</div>
					</div>
				</div>
				<div className='edit-item'>
					<div className='edit-info info-large'>
						<div style={{ alignSelf: "flex-start" }}>
							<label>Payment</label>
						</div>
						<div className='amm-checkbox currencies'>
							{paymentMethods.map(
								(paymentMethod) =>
									(paymentMethod.available || edit) && (
										<div className='checkbox-item' key={paymentMethod.id}>
											{edit && (
												<input
													type='checkbox'
													checked={paymentMethod.available}
													onChange={(e) =>
														handlePaymentMethodChange(e, paymentMethod.id)
													}
												/>
											)}
											<label>{paymentMethod.name}</label>
											{paymentMethod.isDefault && <span>Default</span>}
										</div>
									),
							)}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Preferences;
