/**
 * Created by Mike on 20-11-2016.
 */
export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string){}
}