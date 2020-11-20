import * as type from '../types';

export function getDog() {
    return {
        type: type.GET_DOG_REQUESTED,
    }
}