import { useCounter } from "../context/counterProvider";

const IncrementButton = () => {
	const { increment } = useCounter();

	return (
		<button
			onClick={increment}
			className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
		>
			Increment
		</button>
	);
};

export default IncrementButton;