import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
	const [searchInput, setSearchInput] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numOfGuests, setNumOfGuests] = useState(1);
	const router = useRouter();

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = ranges => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const resetInput = () => {
		setSearchInput("");
	};

	const search = () => {
		// router.push("/search");
		router.push({
			pathname: "/search",
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				numOfGuests,
			},
		});
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/* Left */}
			<div
				onClick={() => router.push("/")}
				className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="https://wlululululua.github.io/data/assets/airbnb/logo.png"
					alt="logo"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>
			{/* Middle */}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm overflow-hidden">
				<input
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
					className="flex-grow pl-5 bg-transparent outline-none 
                    text-sm text-gray-600 placeholder-gray-400 text-ellipsis"
					type="text"
					placeholder={placeholder || "Start your search"}
				/>
				<SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 cursor-pointer" />
			</div>
			{/* Right */}
			<div className="flex items-center justify-end space-x-4 text-gray-500">
				<p className="hidden md:block">Become a host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex space-x-2 border-2 p-2 rounded-full">
					<MenuIcon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>

			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={["#fd5861"]}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">Number of Guest</h2>
						<UsersIcon className="h-5" />
						<input
							type="number"
							min={1}
							value={numOfGuests}
							onChange={e => setNumOfGuests(e.target.value)}
							className="w-12 pl-2 text-lg outline-none text-red-400"
						/>
					</div>
					<div className="flex">
						<button onClick={resetInput} className="flex-grow text-gray-500">
							Cancle
						</button>
						<button onClick={search} className="flex-grow text-red-400">
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
