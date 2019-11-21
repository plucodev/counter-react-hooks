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
	useEffect(
		() => {
			if (first === 10) {
				setFirst(0);
				addOne(second, setSecond);
				Alert();
			} else {
				timer(first, setFirst);
			}
			if (second === 6) {
				setSecond(0);
				addOne(third, setThird);
			}
			if (third === 10) {
				setThird(0);
				addOne(fourth, setFourth);
			}
			if (fifth === 6) {
				setFifth(0);
				addOne(sixth, setSixth);
			}
			if (sixth === 2 && fifth === 4) {
				setSixth(0);
				setFifth(0);
				setThird(0);
				setSecond(0);
				setFirst(0);
			}
		},
		[first, second, third, fourth, fifth, sixth]
	);
	return (
		<div className="text-center mt-5">
			<div className="container text-center mt-5">
				<div className="jumbotron">
					<h1>REACT COUNTER</h1>
				</div>
				<button
					className="btn btn-danger mr-3"
					onClick={backgroundChangeHandler}>
					Toggle Background Color
				</button>
				<button className="btn btn-info" onClick={pauseHandler}>
					<i className={playIcons} /> {playBtn} Counter
				</button>
			</div>
			<div className="mainCountDiv container text-center">
				<div>
					<i className="far fa-clock" />
				</div>
				<div>{sixth}</div>
				<div>{fifth}</div>
				<div>{fourth}</div>
				<div>{third}</div>
				<div>{second}</div>
				<div>{first}</div>
			</div>
			<Footer />
		</div>
	);
}
