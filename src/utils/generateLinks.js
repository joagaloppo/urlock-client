export function generateLinks() {
	const data = [
		{
			date: '2021-08-01',
			clicks: 100,
			actionUrl: 'https://www.google.com/safo/sofow2/aosfjosf',
			finalUrl: 'https://www.google.com',
		},
	];

	const sites = [
		'youtube',
		'facebook',
		'instagram',
		'twitter',
		'linkedin',
		'tiktok',
		'reddit',
		'pinterest',
		'twitch',
		'tumblr',
		'discord',
		'whatsapp',
		'telegram',
		'slack',
		'medium',
		'quora',
		'soundcloud',
		'spotify',
	];
	const downloadSites = [
		'mediafire',
		'mega',
		'dropbox',
		'drive.google',
		'onedrive',
		'box',
		'zippyshare',
		'4shared',
		'mediafire',
	];

	const randomStringGenerator = (length) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const generateRandomLink = () => {
		const randomDate = new Date(
			new Date().getTime() - Math.random() * (new Date().getTime() - new Date(2021, 0, 1).getTime())
		)
			.toISOString()
			.split('T')[0];
		const randomClicks = Math.floor(Math.random() * 10000);
		const randomActionUrl = `https://${sites[Math.floor(Math.random() * sites.length)]}.com/${randomStringGenerator(
			10
		)}`;
		const randomFinalUrl = `https://${
			downloadSites[Math.floor(Math.random() * downloadSites.length)]
		}.com/${randomStringGenerator(10)}`;
		data.push({
			date: randomDate,
			clicks: randomClicks,
			actionUrl: randomActionUrl,
			finalUrl: randomFinalUrl,
		});
	};

	for (let i = 0; i < 15; i++) {
		generateRandomLink();
	}

	return data;
}
