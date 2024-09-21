import { useCounter } from "../context/counterProvider";


const Counter = () => {
	const { count } = useCounter();

	return (
		<div className="text-3xl text-center">
			<p>Counter: {count}</p>
		</div>
	);
};

export default Counter;