export const rows = [
	{
		id: 23,
		post_title: "Will the Cleveland Indians win the World Series?",
		league: "MLB",
		prop_id: 3923,
		article_url:
			"http://thetribe.net/2021/01/04/ranking-cleveland-indians-outfield-power",
		headline: "Ranking the Cleveland Baseball team's outfield power",
		excerpt:
			"It's no secret that Cleveland has come up short the past few years, but will a weak offseason help?",
		featured_img: "https://aws.bucket.fake.pickup/1299091083.jpg",
		published_at: "Febuary 4th, 2021 3:44PM CST",
		updated_at: "Febuary 4th, 2021 5:44PM CST",
	},
];

export const headCells = [
	{
		id: "id",
		numeric: true,
		disablePadding: true,
		label: "ID",
	},
	{
		id: "post_title",
		numeric: false,
		disablePadding: false,
		label: "Title",
		width: 120,
	},
	{ id: "league", numeric: false, disablePadding: false, label: "League" },
	{
		id: "prop_id",
		numeric: true,
		disablePadding: true,
		label: "Prop ID",
		width: 100,
	},
	{
		id: "article_url",
		numeric: false,
		disablePadding: false,
		label: "Article URL",
	},
	{
		id: "headline",
		numeric: false,
		disablePadding: false,
		label: "Headline",
	},
	{
		id: "excerpt",
		numeric: false,
		disablePadding: false,
		label: "Excerpt",
	},
	{
		id: "featured_img",
		numeric: false,
		disablePadding: false,
		label: "Featured Image",
	},
	{
		id: "published_at",
		numeric: false,
		disablePadding: false,
		label: "Publish Date",
	},
	{
		id: "updated_at",
		numeric: false,
		disablePadding: false,
		label: "Updated Date",
	},
];
