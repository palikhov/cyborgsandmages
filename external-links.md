# Реестр внешних ссылок из переводов

Здесь перечисляются содержательные внешние ссылки, сохранённые в переводных статьях. Реестр нужен, чтобы после публикации перевода целевой статьи заменить ведущие на неё внешние ссылки внутренними.

## Формат записи

```md
## <https://example.com/canonical-article-url>

- `src/content/posts/translations/article-with-link.mdx`
- `src/content/posts/translations/another-article-with-link.mdx`
```

Один canonical URL должен встречаться в реестре только один раз. Пути под ним не должны повторяться. Не добавляются обязательная ссылка `[Оригинал]`, ссылки на локальные ресурсы сайта, внешние изображения, навигация, реклама, социальные сети и другие несодержательные ссылки.

После замены внешней ссылки внутренней соответствующий путь удаляется из записи. Если путей не осталось, удаляется весь раздел URL.

<!-- Новые записи добавляйте ниже этой строки. -->

## <https://gamemakerstoolkit.com>

- `src/content/posts/translations/angrygm-pretty-good-dungeon-exploring-spaces.mdx`

## <https://theangrygm.com/lets-build-a-pretty-good-dungeon-series>

- `src/content/posts/translations/angrygm-map-a-pretty-good-dungeon.mdx`

## <https://theangrygm.com/tweaking-the-core-of-dd-5e>

- `src/content/posts/translations/angrygm-exploration-rules.mdx`

## <https://www.youtube.com/playlist?list=PLc38fcMFcV_ul4D6OChdWhsNsYY3NA5B2>

- `src/content/posts/translations/angrygm-pretty-good-dungeon-exploring-spaces.mdx`
