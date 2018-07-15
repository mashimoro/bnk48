
export class Feed {
    feeds: Feeds[];
    current_page: number;
    total_page: number;
}

export class Feeds {
    changed: number;
    created: number;
    created_time: number;
    data: string;
    id: number;
    item_id: string;
    service: string;
    status: number;
    thumbnail: string;
    title: string;
    url: string;
    username: string;

}
