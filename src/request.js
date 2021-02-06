//exporting the Request Class function.

export default class Request {
    //using "async - await" that comes with es7
    //Note : convert the chapters I have written with es7 and es6 standards to es5 standard with babel and webpack.
    static async get(url) {

        const response = await fetch(url);
        const responseData = response.json();

        return responseData;

    }
}