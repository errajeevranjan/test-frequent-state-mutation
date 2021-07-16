import React from "react";
import CountCreator from "./components/CountCreator";
import CountRenderer from "./components/CountRenderer";
import { CounterContextProvider } from "./hoc/CounterContextProvider";

const App = () => {
	return (
		<CounterContextProvider>
			<CountCreator />
			<CountRenderer />
		</CounterContextProvider>
	);
};

export default App;
