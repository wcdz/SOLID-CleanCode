(() => {

    // Aplicando el principio de responsabilidad unica -> Sigle Responsability
    // Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        public checkCredentials(): boolean {
            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;


        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    // Composicion

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, gender, birthdate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }

    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'wcdz@gmail.com',
        role: 'Admin',
        name: 'William',
        gender: 'M',
        birthdate: new Date('2002-11-22')
    });

    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() })

})();