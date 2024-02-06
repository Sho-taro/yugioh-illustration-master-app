import React from 'react';

function Pagination({ data }) {
	// console.log(data);
	return (
		<div className="flex justify-center">
			<div className="pagination-span mt-4 mb-8 px-4 py-2 max-w-fit bg-gray-900 rounded-3xl">
				{/* {data.links.map(link => (
						<p>
							<a href={link.url}>{link.label}</a>
						</p>
					))} */}
				{/* {console.log(data.links[1])} */}
				{/* <a href={data.links[2].url}>次のページ</a> */}
				{data.links.map((link, i) => {
					if (i === 0) {
						if (data.current_page === 1) {
							return (
								<span key={i} className="px-2 py-1 rounded-full bg-gray-800">
									{'<'}
								</span>
							);
						} else {
							return (
								<a
									key={i}
									href={link.url}
									className="px-2 py-1 rounded-full bg-gray-800 hover:underline">
									{'<'}
								</a>
							);
						}
					} else if (i === data.links.length - 1) {
						if (data.current_page === data.last_page) {
							return (
								<span key={i} className="px-2 py-1 rounded-full bg-gray-800">
									{'>'}
								</span>
							);
						} else {
							return (
								<a
									key={i}
									href={link.url}
									className="px-2 py-1 rounded-full bg-gray-800 hover:underline">
									{'>'}
								</a>
							);
						}
					} else if (link.label === '...') {
						return (
							<span key={i} className="px-4 py-2">
								{link.label}
							</span>
						);
					} else if (i === data.last_page) {
						if (i === data.current_page) {
							return (
								<span key={i} className="px-4 py-2">
									{link.label}
								</span>
							);
						} else {
							return (
								<a key={i} href={link.url} className="px-4 py-2 hover:underline">
									{link.label}
								</a>
							);
						}
					} else {
						if (parseInt(link.label) === data.current_page) {
							return (
								<span key={i} className="px-4 py-2">
									{link.label}
								</span>
							);
						} else {
							return (
								<a key={i} href={link.url} className="px-4 py-2 hover:underline">
									{link.label}
								</a>
							);
						}
					}
				})}
			</div>
		</div>
	);
}

export default Pagination;
