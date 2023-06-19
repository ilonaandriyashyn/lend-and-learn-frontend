import { RootState } from '../reducer';
import { User } from './types';

export const getUsername = (state: RootState): string | null => state.users.currentUser.username;

export const getUserProfile = (state: RootState): User => state.users.profile;
