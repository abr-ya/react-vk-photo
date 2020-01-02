/*eslint-disable */
export const consoleLog = store => next => action => {
    console.log(`action.type: ${action.type}, action.payload: ${action.payload}`);
    return next(action);
}
/*eslint-enable */
  