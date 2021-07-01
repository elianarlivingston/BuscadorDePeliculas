export interface Movie {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number; 
    video?: boolean;
    vote_average?: number;
}

interface Genres {
    id?: number;
    name?: string;
}

interface ProductionCompanies {
    id?: number;
    name?: string;
    logo_path?: string | null;
    origin_country?: string;
}

interface ProductionCountries {
    iso_3166_1?: string;
    name?: string;
}

interface SpokenLanguages {
    iso_639_1?: string;
    name?: string;
}

export interface MovieDetail {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: null | object ;
    budget?: number;
    genres?: Genres[];
    homepage?: string | null;
    id?: number;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompanies[];
    production_countries?: ProductionCountries[];
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: SpokenLanguages[];
    status?: string;
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number; 
}

export interface ResponseMovie {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

// PARAMS
interface Dates {
    maximum?: string;
    minimum?: string;
}

export interface ParamsMovie {
    api_key: string;
    language?: string;
    page?: number;
    region?: string;
    dates?: Dates;
}

export interface ParamsMovieDetail {
    api_key: string;
    language?: string;
    append_to_response?: string;
}

export interface ParamsMovieSearch extends ParamsMovie {
    query: string;
    include_adult?: boolean;
    year?: number;
    primary_release_year?: number;
}