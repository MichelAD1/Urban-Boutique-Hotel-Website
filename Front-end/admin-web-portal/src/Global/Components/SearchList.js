const SearchList = ({ data, employee, loading, error }) => {
	if (error !== "") {
		return (
			<div className='search-list'>
				<div className='search-list-item no-hover'>
					<p>{error}</p>
				</div>
			</div>
		);
	}
	return (
		<div className='search-list'>
			{loading ? (
				<div className='search-list-item no-hover'>
					<p>Loading...</p>
				</div>
			) : (
				data.map((item) => {
					return (
						<div className='search-list-item' onClick={() => employee(item)}>
							<p>{item.username}</p>
						</div>
					);
				})
			)}
		</div>
	);
};

export default SearchList;
