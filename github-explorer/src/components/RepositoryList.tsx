import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import './../styles/repositorys.scss'

interface Repository {
    name:string,
    description: string,
    html_url: string,
    id: string

}
interface UserRepository {
    html_url:string,
    avatar_url: string,
    name: string
}


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [userRepository, setUserRepository] = useState<UserRepository>();
    const user = 'thyerre';

    useEffect(() => {
        getUserRepository();
        getRepositories();
    }, []);

// functions
    function getUserRepository() {
        fetch(`https://api.github.com/users/${user}`)
            .then(resp => resp.json())
            .then(data => setUserRepository(data))
    }

    function getRepositories() {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(resp => resp.json())
            .then(data => setRepositories(data));
    }

// html

    return (
        <section className="repository-list">
            <div>
                <a href={userRepository?.html_url}>
                    <img className='img-avatar' src={userRepository?.avatar_url} width='100'/>
                </a>
                <h1>Lista de repositórios do <br />{userRepository?.name}</h1>
            </div>

            <ul>
                {repositories.map(repository =>  (
                    <RepositoryItem key={repository.id} repository={repository} /> 
                ))}
            </ul>
        </section>
    )
}