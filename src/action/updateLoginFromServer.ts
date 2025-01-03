export const updateLoginFromServer = async function (loginFor: string, loginTo: string): Promise<[ string, string ]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([ loginFor, loginTo ]);
        }, 1000);
    });
};