import { Artist } from "./artist";

export interface Movie { 
    _id?: string;
    title?: string;
    flyerFront?: string;
    attending?: Array<string>;
    date?: string;
    startTime?: Array<string>;
    endTime?: Array<string>;
    contentUrl?: string;
    venue?: any;
    pick?: any;
    artists?: Array<Artist>;
    city?: string;
    country?: string;
    private?: boolean;
    __v?: number;
}