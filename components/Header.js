import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/* Left */}
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="https://wlululululua.github.io/data/assets/airbnb/logo.png"
					alt="logo"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>
			{/* Middle */}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					className="flex-grow pl-5 bg-transparent outline-none 
                    text-sm text-gray-600 placeholder-gray-400"
					type="text"
					placeholder="Start your search"
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
		</header>
	);
};

export default Header;
