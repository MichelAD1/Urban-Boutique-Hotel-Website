const checkEqual = (reqData, data) => {
	for (let prop in reqData) {
		if (reqData[prop] !== "id") {
			if (reqData[prop] === data[prop]) {
				delete reqData[prop];
			}
		}
	}
	if (Object.keys(reqData).length > 1) {
		return reqData;
	} else {
		return false;
	}
};
export default checkEqual;
