import React, { useContext, useEffect, useState } from "react";
import { CounterContext } from "./../hoc/CounterContextProvider";

const CountRenderer = () => {
	const allCounters = useContext(CounterContext);
	const [counter, setCounter] = useState(allCounters);

	//limiting counter refreshes to 1 second
	useEffect(() => {
		setTimeout(() => {
			setCounter(allCounters);
		}, 1000);
	}, [counter, setCounter]);

	return (
		<div>
			<h1>Counter 1 :: {counter.counterOne}</h1>
			<h1>Counter 2 :: {counter.counterTwo}</h1>
			<h1>Counter 3 :: {counter.counterThree}</h1>
			<h1>Counter 4 :: {counter.counterFour}</h1>
		</div>
	);
};

export default CountRenderer;
