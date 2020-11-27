declare module 'Xore-api' {

    export class ApiConstructor {
        public constructor(type : String);


        public version : String;

        public requirements : String;

        public userInformationID(UserId : String);

        public guildInformationID(GuildID : String);

        private apiConstruct(ApiEndpoint : String, Method : String);

    }

    export class imgGen {
        public constructor(type : String, Endpoint : String);

        imgType : String;

        imgSource : String;

        endpoints : String;

    }

    export type Options = {
        URL ? : String
        Types ? : String
        
    }
}