import React from 'react';

function Pagination({ data }) {
	console.log(data);
	return (
		<div className="mt-4 mb-8">
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
						return <p key={i}>前のページへ</p>;
					} else {
						return (
							<p key={i}>
								<a href={link.url}>前のページへ</a>
							</p>
						);
					}
				} else if (i === data.links.length - 1) {
					if (data.current_page === data.last_page) {
						return <p key={i}>次のページへ</p>;
					} else {
						return (
							<p key={i}>
								<a href={link.url}>次のページへ</a>
							</p>
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
