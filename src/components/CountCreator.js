import React, { useContext, useEffect } from "react";
import {
	CounterContext,
	CounterContextUpdater,
} from "../hoc/CounterContextProvider";

const CountCreator = () => {
	const allCounters = useContext(CounterContext);
	const setCounter = useContext(CounterContextUpdater);
	// const [counter, setCounter] = counterAll;
	const { counterOne, counterTwo, counterThree, counterFour } = allCounters;
	useEffect(() => {
		setTimeout(() => {
			setCounter({
				counterOne: counterOne + 1,
				counterTwo: counterTwo + 1,
				counterThree: counterThree + 1,
				counterFour: counterFour + 1,
			});
		}, 1);
	}, [setCounter, counterOne, counterTwo, counterThree, counterFour]);

	return (
		<div>
			<h1>Counter App </h1>
		</div>
	);
};
export default CountCreator;
