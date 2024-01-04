import axios from 'axios';
import type { Contact } from '@/types';

const API_URL = 'https://randomuser.me/api/';
let cachedContacts: Contact[] | null = null;

export const initializeContacts = async (count: number): Promise<Contact[]> => {
    if (cachedContacts) {
        return cachedContacts;
    }

    try {
        const requests = Array.from({ length: count }, () => axios.get(API_URL));
        const responses = await Promise.all(requests);

        cachedContacts = responses.flatMap(response => {
            const users = response.data.results;
            return users.map(user => ({
                id: user.login.uuid,
                firstName: user.name.first,
                lastName: user.name.last,
                telNumber: user.phone,
                email: user.email,
            }));
        });

        return cachedContacts;
    } catch (error) {
        console.error('Error fetching random users:', error);
        return [];
    }
};
