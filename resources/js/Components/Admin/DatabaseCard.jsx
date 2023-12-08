import React from 'react'
import { Link } from '@inertiajs/react';

function DatabaseCard({ isMlOn, src, dbName, routeName }) {
  let divClassName = 'p-2 bg-gray-200 text-center rounded-md';
  if (isMlOn) {
    divClassName = 'ml-4 p-2 bg-gray-200 text-center rounded-md';
  }

  return (
		<div className={divClassName}>
      <img src={src} className="h-24 aspect-auto inline-block" alt={dbName} />
			<Link href={route(routeName)} className="hover:text-blue-400 block">
        {dbName}
			</Link>
		</div>
  );
}

export default DatabaseCard