import { faker } from "@faker-js/faker";
import { ArticleInterface, CATEGORIES } from "./vars";

export const ARTICLES: ArticleInterface[] = [];

const numberOfArticles = faker.datatype.number({ min: 10, max: 20 });

for (let i = 0; i < numberOfArticles; i++) {
	const data = {
		id: faker.database.mongodbObjectId,
		title: faker.lorem.sentence(),
		category: CATEGORIES[faker.datatype.number(CATEGORIES.length - 1)],
		datePosted: faker.date.past(1),
		href: "#",
		headerImage: faker.image.image(640, 480, true),
		excerpt: faker.lorem.paragraph(),
		slug: faker.lorem.slug(),
		body: faker.lorem.paragraph(),
	};
	ARTICLES.push(data);
}

export const LATEST_ARTICLE = {
	id: faker.database.mongodbObjectId,
	title: faker.lorem.sentence(),
	category: CATEGORIES[faker.datatype.number(CATEGORIES.length - 1)],
	datePosted: faker.date.past(1),
	href: "#",
	headerImage: faker.image.image(640, 480, true),
	excerpt: faker.lorem.paragraph(),
	slug: faker.lorem.slug(),
	body: faker.lorem.paragraph(),
};
