import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export function Home() {
	const [count, setCount] = useState(0);

	useInterval(() => {
		// Your custom logic here
		setCount(count + 1);
	}, 1000);

	return (
		<>
			<h1>{Math.floor(count / 1) % 10}</h1>
			<h1>{Math.floor(count / 10) % 10}</h1>
			<h1>{Math.floor(count / 100) % 10}</h1>
			<h1>{Math.floor(count / 100) % 10}</h1>
		</>
	);
}

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest function.
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[callback]
	);

	// Set up the interval.
	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[delay]
	);
}
