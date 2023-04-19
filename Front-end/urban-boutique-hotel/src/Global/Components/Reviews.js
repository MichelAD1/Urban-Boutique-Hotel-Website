import { useEffect, useState, useRef } from "react";

const Reviews = ({ data }) => {
	const delay = 10000;

	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		if (data) {
			timeoutRef.current = setTimeout(
				() =>
					setIndex((prevIndex) =>
						prevIndex === data.length - 1 ? 0 : prevIndex + 1,
					),
				delay,
			);
		}

		return () => {
			resetTimeout();
		};
	}, [index]);

	if (data) {
		return (
			<div className='reviews'>
				<div className='section-title'>
					<h4>Reviews</h4>
					<div />
				</div>
				<div className='review-section'>
					<div
						className='slideshowSlider slider-center'
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
						{data.map((item, index) => (
							<div className='slide' key={index}>
								<div className='slide-content review-slider'>
									<div className='slide-info bg-change'>
										<h2 className='slide-title'>{item.name}</h2>
										<p className='slide-description'>{item.content}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='slideshowDots'>
						{data.map((_, idx) => (
							<div
								key={idx}
								className={`slideshowDot rooms${
									index === idx ? " active" : ""
								}`}
								onClick={() => {
									setIndex(idx);
								}}></div>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default Reviews;
