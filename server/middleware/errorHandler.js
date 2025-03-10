import {constants} from "../constants.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation error", message : err.message, stackTrace : err.stack});
            break;

        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized", message : err.message, stackTrace : err.stack});
            break;

        case constants.FORBIDDEN:
            res.json({title : "forbidden", message : err.message, stackTrace : err.stack});
            break;

        case constants.NOT_FOUND:
            res.json({title : "not found", message : err.message, stackTrace : err.stack});
            break;

        case constants.SERVER_ERROR:
            res.json({title : "Server error", message : err.message, stackTrace : err.stack});
            break;
    
        default:
            console.log("No error,  All Good!");
            break;
    }
};

export default errorHandler;