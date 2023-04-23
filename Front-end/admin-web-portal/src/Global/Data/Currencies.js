const currencies = {
	USD: {
		symbol: "$",
		name: "US Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "USD",
		name_plural: "US dollars",
	},
	EUR: {
		symbol: "€",
		name: "Euro",
		symbol_native: "€",
		decimal_digits: 2,
		rounding: 0,
		code: "EUR",
		name_plural: "euros",
	},
	AED: {
		symbol: "AED",
		name: "United Arab Emirates Dirham",
		symbol_native: "د.إ.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "AED",
		name_plural: "UAE dirhams",
	},
	GBP: {
		symbol: "£",
		name: "British Pound Sterling",
		symbol_native: "£",
		decimal_digits: 2,
		rounding: 0,
		code: "GBP",
		name_plural: "British pounds sterling",
	},
	AUD: {
		symbol: "AU$",
		name: "Australian Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "AUD",
		name_plural: "Australian dollars",
	},
	SAR: {
		symbol: "SR",
		name: "Saudi Riyal",
		symbol_native: "ر.س.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "SAR",
		name_plural: "Saudi riyals",
	},
	JOD: {
		symbol: "JD",
		name: "Jordanian Dinar",
		symbol_native: "د.أ.‏",
		decimal_digits: 3,
		rounding: 0,
		code: "JOD",
		name_plural: "Jordanian dinars",
	},
	CAD: {
		symbol: "CA$",
		name: "Canadian Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "CAD",
		name_plural: "Canadian dollars",
	},
	ARS: {
		symbol: "AR$",
		name: "Argentine Peso",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "ARS",
		name_plural: "Argentine pesos",
	},
	BRL: {
		symbol: "R$",
		name: "Brazilian Real",
		symbol_native: "R$",
		decimal_digits: 2,
		rounding: 0,
		code: "BRL",
		name_plural: "Brazilian reals",
	},
	CNY: {
		symbol: "CN¥",
		name: "Chinese Yuan",
		symbol_native: "CN¥",
		decimal_digits: 2,
		rounding: 0,
		code: "CNY",
		name_plural: "Chinese yuan",
	},
	EGP: {
		symbol: "EGP",
		name: "Egyptian Pound",
		symbol_native: "ج.م.‏",
		decimal_digits: 2,
		rounding: 0,
		code: "EGP",
		name_plural: "Egyptian pounds",
	},
	JPY: {
		symbol: "¥",
		name: "Japanese Yen",
		symbol_native: "￥",
		decimal_digits: 0,
		rounding: 0,
		code: "JPY",
		name_plural: "Japanese yen",
	},
};

let id = 1;
const output = Object.keys(currencies).map((key) => {
	const currency = currencies[key];
	let result = {};
	if (currency.code === "USD") {
		result = {
			id: id,
			symbol: currency.symbol,
			name: currency.name,
			code: currency.code,
			isDefault: true,
			available: true,
		};
	} else {
		result = {
			id: id,
			symbol: currency.symbol,
			name: currency.name,
			code: currency.code,
			isDefault: false,
			available: false,
		};
	}
	id++;
	return result;
});

export default output;
