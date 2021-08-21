import generateErrorLog from "./generate-error-log";

const log = {
    error: (message: string) => {
        const error = generateErrorLog(message);
        console.log(error);
        // make API call to an error logging endpoint on your server
    }
}

export default log;
