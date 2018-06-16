// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA9E5Ka59FoN9I5IgSGgPRqOZ7JZV_UaFk",
    authDomain: "note-list-angular.firebaseapp.com",
    databaseURL: "https://note-list-angular.firebaseio.com",
    projectId: "note-list-angular",
    storageBucket: "",
    messagingSenderId: "925584401277"
  },
};
