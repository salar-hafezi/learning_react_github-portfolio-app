import React, { Component } from 'react';
import './Profile.css';
import List from '../components/List/List';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true
        }
    }

    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/octocat');
        const profileJSON = await profile.json();

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            });
        }
    }

    render() {
        const { data, loading } = this.state;
        if (loading) return <div>Loading ...</div>
        const items = [
            { label: 'HTML URL', value: <a href={data.html_url} target='_blank'> Github URL</a> },
            { label: 'Repos URL', value: <a href={data.repos_url} target='_blank'> Repos URL</a> },
            { label: 'Name', value: data.name },
            { label: 'Company', value: data.company },
            { label: 'Location', value: data.location },
            { label: 'Email', value: data.email },
            { label: 'Bio', value: data.bio }
        ]
        return (
            <div className='profile-container'>
                <img src={data.avatar_url} alt='Avatar URL' />
                <List items={items} />
            </div>
        );
    }
}

export default Profile;
