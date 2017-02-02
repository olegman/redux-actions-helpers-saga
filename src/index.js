import { fork as sagaFork } from 'redux-saga/effects';

// helper is Saga Helpers (takeEvery, takeLatest, throttle)
export function forkActionWatcher(helper, actions, watcher, ...args) {
    if (!Array.isArray(actions)) {
        actions = [actions]
    }
    actions = actions.map(action => action.toString());
    if (args.length) {
        return sagaFork(helper, actions, watcher, ...args);
    } else {
        return sagaFork(helper, actions, watcher);
    }
}
