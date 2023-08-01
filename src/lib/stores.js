import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const Users = writable((browser && JSON.parse(localStorage.getItem("Users"))) || []);
Users.subscribe((value) => browser && (localStorage.Users = JSON.stringify(value)));