const checkEmpty = (reqData) => {
	for (let prop in reqData) {
		if (
			reqData[prop] === "" ||
			reqData[prop] === null ||
			reqData[prop] === undefined ||
			(typeof reqData[prop] === "number" && isNaN(reqData[prop]))
		) {
			return false;
		}
	}
	return true;
};
export default checkEmpty;
