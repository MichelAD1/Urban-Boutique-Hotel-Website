import crypto from "crypto-js";

const useHash = (value) => {
	return crypto.SHA256(value).toString();
};

export default useHash;
