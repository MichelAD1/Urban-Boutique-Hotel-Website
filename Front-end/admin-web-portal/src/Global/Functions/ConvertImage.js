export default function ConvertImage(uploadedImage) {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsDataURL(uploadedImage);
		reader.onload = () => {
			resolve(reader.result);
		};
	});
}
