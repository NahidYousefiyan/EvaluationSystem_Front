const logger =param=> store => next => action => {

    next(action)
}
//SNA
//currying
export default logger;