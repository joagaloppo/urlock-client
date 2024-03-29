import { useState } from 'react';
import { AiFillLock, AiFillUnlock, AiFillYoutube, AiOutlineCheck } from 'react-icons/ai';
import Ad from './ad';

function Template({ data }) {
	const [locked, setLocked] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleClick = (e) => {
		setLoading(() => true);
		setTimeout(() => {
			setLocked(false);
			setLoading(() => false);
		}, 5000);
	};

	const Spinner = () => (
		<div className="mx-auto flex w-fit">
			<svg
				aria-hidden="true"
				className="mr-2 w-8 h-8 text-red-600 animate-spin fill-white group-hover:text-red-700 transition-colors duration-500"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>
			<span className="sr-only">Loading...</span>
		</div>
	);

	const Subscribe = () => (
		<>
			<AiFillYoutube className="mr-2" /> Subscribe
		</>
	);

	const Completed = () => (
		<>
			<AiOutlineCheck className="mr-2" /> Completed
		</>
	);

	const Locked = () => (
		<>
			<AiFillLock className="mr-2" /> Locked
		</>
	);

	const Unlocked = () => (
		<>
			<AiFillUnlock className="mr-2" /> Unlocked
		</>
	);

	return (
		<section className="flex min-h-[calc(100vh-136px)] flex-col justify-center bg-gray-100">
			<Ad />
			<div className="mx-auto flex w-full max-w-md flex-col rounded-md bg-white px-8 py-12 text-center">
				<div>
					<h2 className="mb-1 flex flex-row items-center text-2xl font-bold text-gray-700">
						<AiFillLock className="mr-2" /> Locked
					</h2>
					<p className="text-md mb-8 text-left text-gray-500">
						Before you get access to this content, you must complete a small action to help the creator.
					</p>
				</div>
				<div>
					<a
						href={locked ? data?.link?.actionUrl : null}
						target="_blank"
						onClick={(e) => handleClick(e)}
						className={
							'group text-md mb-4 inline-flex w-full items-center justify-center rounded-md text-center font-medium text-white transition-button duration-500 ' +
							(locked
								? ' h-[60px] cursor-pointer bg-red-500 hover:bg-red-600'
								: ' h-[50px] cursor-default bg-gray-300')
						}>
						{locked ? loading ? <Spinner /> : <Subscribe /> : <Completed />}
					</a>
					<a
						href={locked ? null : data?.link?.finalUrl}
						target="_blank"
						disabled
						className={
							'text-md inline-flex w-full items-center justify-center rounded-md text-center font-medium text-white transition-button duration-500 ' +
							(locked
								? ' h-[50px] cursor-default bg-gray-300'
								: ' h-[60px] cursor-pointer bg-blue-500 hover:bg-blue-600')
						}>
						{locked ? <Locked /> : <Unlocked />}
					</a>
				</div>
				<div>
					<p className="text-md mt-8 text-left text-gray-500">
						Learn{' '}
						<a href="/" className="text-blue-500 hover:underline">
							how it works
						</a>
						.
					</p>
				</div>
			</div>
			<Ad />
		</section>
	);
}

export default Template;
