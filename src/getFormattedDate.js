const getFormattedDate = () => (
    `${new Date().getHours() < 10 ?
        `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ?
            `0${new Date().getMinutes()}` : new Date().getMinutes()}`
);

export default getFormattedDate;