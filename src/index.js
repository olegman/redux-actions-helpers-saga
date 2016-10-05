import { fork as sagaFork } from 'redux-saga/effects';

// helper is Saga Helpers (takeEvery, takeLatest, throttle)
export function forkActionWatcher(helper, actions, watcher) {
    if (!Array.isArray(actions)) {
        actions = [actions]
    }
    actions = actions.map(action => action.toString());
    return sagaFork(helper, actions, watcher);
}
