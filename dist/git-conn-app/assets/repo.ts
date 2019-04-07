/**
 * Repo information to be retrieved by the Git Connector Service
 * and persisted by the backend.
 */
export class Repo {

    id: string;
    name: string;
    description: string;
    stargazers_count: string;
    watchers_count: string;
    html_url: string;
    language: string;
}
