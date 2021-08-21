import moment from "moment";

const generateErrorLog = (message: string) => {
    return moment().format() + ' ERROR --- ' + message;
};

export default generateErrorLog;
