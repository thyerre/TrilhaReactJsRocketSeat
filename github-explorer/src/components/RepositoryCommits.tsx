import { useEffect, useState } from "react";

interface RepositoryCommitsProps {
    repositoryName: string
}

interface Commits {
    id: string
}

export function RepositoryCommits({repositoryName}:RepositoryCommitsProps) {
    const [commits, setCommits] = useState<Commits[]>([]);

    useEffect(() => {
        getCommits(repositoryName);
    }, []);


    function getCommits(repositoryName: string) {
        fetch(`https://api.github.com/repos/thyerre/${repositoryName}/commits/`)
            .then(resp => resp.json())
            .then(data => setCommits(data))
    }

    return (
        <div>
            {commits.map(commit => (
                <p key={commit.id} > {commit.id} </p>
            ))}
        </div>
    )
}