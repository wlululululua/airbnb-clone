import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({ img, location, title, description, star, price, total }) => {
	return (
		<div
			className="flex flex-col sm:flex-row py-7 px-2 border-b cursor-pointer 
			hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
			first:border-t">
			<div className="relative w-full h-40 sm:h-24 sm:w-40 md:h-52 md:w-80 flex-shrink-0 mb-3">
				<Image
					src={img}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-2xl"
				/>
			</div>
			<div className="flex flex-col flex-grow pl-5">
				<div className="flex justify-between">
					<p className="text-sm md:text-base">{location}</p>
					<HeartIcon className="h-7 cursor-pointer" />
				</div>
				<h4 className="text-lg md:text-2xl">{title}</h4>
				<div className="border-b w-10 pt-2" />
				<p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
				<div className="flex justify-between items-end pt-5">
					<p className="flex items-center">
						<StarIcon className="h-5 text-red-400" />
						{star}
					</p>
					<div>
						<p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
