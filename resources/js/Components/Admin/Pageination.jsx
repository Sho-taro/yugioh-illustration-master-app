import React from 'react';

function Pagination({ data }) {
	// console.log(data);
	return (
		<div className="mt-4 mb-8 text-center">
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
						return <span key={i} className="px-2 py-1 border-2 border-gray-200 rounded-lg">{'<'}</span>;
					} else {
						return (
							<span key={i} className="px-2 py-1 border-2 border-gray-200 rounded-lg">
								<a href={link.url}>{'<'}</a>
							</span>
						);
					}
				} else if (i === data.links.length - 1) {
					if (data.current_page === data.last_page) {
						return (
							<span key={i} className="px-2 py-1 border-2 border-gray-200 rounded-lg">
								{'>'}
							</span>
						);
					} else {
						return (
							<span key={i} className="px-2 py-1 border-2 border-gray-200 rounded-lg">
								<a href={link.url}>{'>'}</a>
							</span>
						);
					}
				} else if (link.label === '...') {
					return <span key={i}>　{link.label}　</span>;
				} else if (i === data.last_page) {
					if (i === data.current_page) {
						return <span key={i}>　{link.label}　</span>;
					} else {
						return (
							<span key={i}>
								<a href={link.url}>　{link.label}　</a>
							</span>
						);
					}
				} else {
					if (parseInt(link.label) === data.current_page) {
						return <span key={i}>　{link.label}　</span>;
					} else {
						return (
							<span key={i}>
								<a href={link.url}>　{link.label}　</a>
							</span>
						);
					}
				}
			})}
		</div>
	);
}

export default Pagination;
