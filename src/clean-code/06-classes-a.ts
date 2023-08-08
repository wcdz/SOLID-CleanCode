(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }

    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        public checkCredentials(): boolean {
            return true;
        }

    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'wcdz@gmail.com',
        'Admin',
        'William',
        'M',
        new Date('2002-11-22')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() })

})();