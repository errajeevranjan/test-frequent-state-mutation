import React, { createContext, useState } from "react";

export const CounterContext = createContext();
export const CounterContextUpdater = createContext();

export const CounterContextProvider = ({ children }) => {
	const [counter, setCounter] = useState({
		counterOne: 0,
		counterTwo: 0,
		counterThree: 0,
		counterFour: 0,
	});

	return (
		<CounterContext.Provider value={counter}>
			<CounterContextUpdater.Provider value={setCounter}>
				{children}
			</CounterContextUpdater.Provider>
		</CounterContext.Provider>
	);
};
