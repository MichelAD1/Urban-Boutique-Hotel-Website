const checkEmpty = (data) => {
	for (let prop in data) {
		if (
			data[prop] === "" ||
			data[prop] === null ||
			data[prop] === undefined ||
			(typeof data[prop] === "number" && isNaN(data[prop]))
		) {
			return false;
		}
	}
	return true;
};
export default checkEmpty;
