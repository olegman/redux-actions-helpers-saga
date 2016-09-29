import { fork as sagaFork } from 'redux-saga/effects';

export function fork(take, action, watcher) {
    return sagaFork(take, action.toString(), watcher);
}
