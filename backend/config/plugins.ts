export default () => ({
  upload: {
    enabled: false,
  },

  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::news.news",
          modelName: "new",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: 0.6,
            limit: 10,
            keys: [
              { name: "preview_title", weight: 0.1 },
              { name: "news_description", weight: -0.1 },
              { name: "news_description_full", weight: -0.1 },
            ],
          },
        },
        {
          uid: "api::vacancy.vacancy",
          modelName: "vacancies",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: 0.6,
            limit: 10,
            keys: [{ name: "vacancy_name", weight: 0.2 }],
          },
        },
        {
          uid: "api::documents-and-guidline.documents-and-guidline",
          modelName: "vacancies",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            limit: 10,
            threshold: 0.6,
            keys: [{ name: "document_name", weight: 0.3 }],
          },
        },
      ],
    },
  },
});