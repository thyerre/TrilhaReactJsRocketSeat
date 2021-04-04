import { RepositoryCommits } from "./RepositoryCommits";

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string,
        id: string
    }
}


export function RepositoryItem({repository}:RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>

            <a href={repository.html_url}>
                Acessar Repositórios
            </a>
            <RepositoryCommits repositoryName={repository.name}/>
        </li>
    )
}