import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);
	const [third, setThird] = useState(0);
	const [fourth, setFourth] = useState(0);
	const [fifth, setFifth] = useState(0);
	const [sixth, setSixth] = useState(0);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setInterval(function() {
			//render your react application
			// WHEN THE COUNTER OF THE FIRST
			setSixth(counter / 1);
			// const fifth = Math.floor(counter / 10);
			// const fourth = Math.floor(counter / 100);
			// const third = Math.floor(counter / 1000);
			// const second = Math.floor(counter / 10000);

			setCounter(counter + 1);
		}, 1000);
	});
	return (
		<div className="text-center mt-5">
			<div className="container text-center mt-5">
				<div className="jumbotron">
					<h1>REACT </h1>
				</div>
			</div>
			<div className="mainCountDiv container text-center">
				<div>
					<i className="far fa-clock" />
				</div>
				<div>{sixth % 10}</div>
				<div>{fifth}</div>
				<div>{fourth}</div>
				<div>{third}</div>
				<div>{second}</div>
			</div>
		</div>
	);
}
