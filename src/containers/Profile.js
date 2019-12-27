import React, { Component } from 'react';
import './Profile.css';
import List from '../components/List/List';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            repos: [],
            loading: true,
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const profile = await fetch('https://api.github.com/users/octocat');
            const profileJSON = await profile.json();

            if (profileJSON) {
                const repos = await fetch(profileJSON.repos_url);
                const reposJSON = await repos.json();
                this.setState({
                    data: profileJSON,
                    repos: reposJSON,
                    loading: false
                });
            }
        } catch (err) {
            this.setState({
                loading: false,
                error: err.message
            });
        }
    }

    render() {
        const { data, repos, loading, error } = this.state;
        if (loading) return <div>Loading ...</div>
        if (loading || error) {
            return <div>{loading ? 'Loading ...' : error}</div>
        }
        const items = [
            { label: 'HTML URL', value: <a href={data.html_url} target='_blank'> Github URL</a> },
            { label: 'Repos URL', value: <a href={data.repos_url} target='_blank'> Repos URL</a> },
            { label: 'Name', value: data.name },
            { label: 'Company', value: data.company },
            { label: 'Location', value: data.location },
            { label: 'Email', value: data.email },
            { label: 'Bio', value: data.bio }
        ];
        const projects = repos.map(repo => ({
            label: repo.name,
            value: <a href={repo.html_url} target='_blank'> Github URL</a>
        }));

        return (
            <div className='profile-container'>
                <img src={data.avatar_url} alt='Avatar URL' />
                <List items={items} title='Profile' />
                <List items={projects} title='Projects' />
            </div>
        );
    }
}

export default Profile;
