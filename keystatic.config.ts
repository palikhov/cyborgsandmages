import { config, fields, collection } from '@keystatic/core';
import { __experimental_mdx_field } from '@keystatic/core/form/fields/markdoc';

export default config({
	ui: {
		brand: {
			name: 'Cyborgs & Mages'
		}
	},
	storage: {
		kind: 'local'
	},
	collections: {
		posts: collection({
			label: 'Статьи',
			slugField: 'title',
			path: 'src/content/posts/**',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Заголовок'
					},
					slug: {
						label: 'URL'
					}
				}),
				description: fields.text({
					label: 'Описание',
					multiline: false,
					validation: {
						length: { min: 10, max: 400 }
					}
				}),
				cover: fields.image({
					label: 'Обложка',
					directory: 'public/images/posts',
					publicPath: '/images/posts/'
				}),
				author: fields.text({
					label: 'Автор',
					multiline: false,
					defaultValue: 'Антон «Palant» Палихов'
				}),
				translator: fields.text({
					label: 'Переводчик',
					multiline: false
				}),
				date: fields.date({
					label: 'Дата',
					defaultValue: 'now',
					validation: {
						isRequired: true
					}
				}),
				tags: fields.array(fields.text({ label: 'Тег' }), {
					label: 'Теги',
					itemLabel: (props) => props.value
				}),
				draft: fields.checkbox({
					label: 'Черновик',
					defaultValue: false
				}),
				content: __experimental_mdx_field({
					label: 'Содержание',
					options: {
						formatting: true,
						tables: true,
						dividers: true,
						links: true,
						images: {
							directory: 'public/images/posts',
							publicPath: '/images/posts/'
						}
					}
				})
			}
		})
	}
});
