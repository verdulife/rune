import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { userDefaults } from '$lib/utils';

export const User = writable((browser && JSON.parse(localStorage.getItem("User"))) || userDefaults);
User.subscribe((value) => browser && (localStorage.User = JSON.stringify(value)));