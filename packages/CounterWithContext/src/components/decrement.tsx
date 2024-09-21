import { useCounter } from "../context/counterProvider";

const DecrementButton = () => {
	const { decrement } = useCounter();

	return (
		<button
			onClick={decrement}
			className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
		>
			Decrement
		</button>
	);
};

export default DecrementButton;