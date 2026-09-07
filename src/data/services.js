
const createCategory = (name, prefix) => ({
	name,
	items: [
		...galleryImages.map((src, index) => ({
			id: `${prefix}-${index}`,
			type: 'image',
			src,
			alt: `${name} من خدمات شركة النخبة ${index + 1}`,
		})),
		{
			id: `${prefix}-video`,
			type: 'video',
			src: Video,
			poster: galleryImages[0],
			alt: `فيديو خدمات ${name}`,
		},
	],
})

export const servicePages = {
	sofrajiya: {
		title: 'سفرجية النخبة',
		description: 'ضيافة راقية وتفاصيل مدروسة تمنح مناسباتكم حضورًا يليق بها.',
		categories: [createCategory('رجال', 'sofrajiya-men'), createCategory('نساء', 'sofrajiya-women')],
	},
	dj: {
		title: 'دي جي النخبة',
		description: 'أجواء موسيقية نابضة تضيف إلى ليلتكم إيقاعًا استثنائيًا.',
		categories: [createCategory('رجال', 'dj-men'), createCategory('نساء', 'dj-women')],
	},
	studio: {
		title: 'ستوديو النخبة',
		description: 'نوثق أجمل لحظاتكم بأسلوب فني يحفظ فرحكم للأبد.',
		categories: [createCategory('رجال', 'studio-men'), createCategory('نساء', 'studio-women')],
	},
	weddingSupplies: {
		title: 'لوازم الأعراس',
		description: 'اختيارات أنيقة وتجهيزات متكاملة لصناعة احتفال لا ينسى.',
		categories: [createCategory('رجال', 'supplies-men'), createCategory('نساء', 'supplies-women')],
	},
}
