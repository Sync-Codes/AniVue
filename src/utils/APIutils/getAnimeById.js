import fetchApi from "./fetchApi";

// A dynamic id query template

// Used when opening specific anime page

// Provides full info about specific anime including trailer url, description, and etc...
const getAnimeById = async id => {
    const query = `
        query ($id: Int) {
            Media (id: $id, type: ANIME) {
                title {
                    english,
                    romaji
                }
                genres
                episodes
                duration
                status
                nextAiringEpisode {
                    airingAt
                }
                description (asHtml: true)
                startDate {
                    day
                    month
                    year
                }
                endDate {
                    day
                    month
                    year
                }

                coverImage {
                    large
                    medium
                    color
                }
                bannerImage

                characters(sort: FAVOURITES_DESC) {
                    nodes {
                        name {
                            first
                            last
                        }
                        image {
                            medium
                        }
                    }
                }
                streamingEpisodes {
                    title
                    thumbnail
                    url
                }
            }
        }
    `;
    return await fetchApi(query, { id });
};

export default getAnimeById;
