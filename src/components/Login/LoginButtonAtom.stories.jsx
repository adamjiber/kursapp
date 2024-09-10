import LoginButtonAtom from "./LoginButtonAtom";

export default {
    title: 'Kursapp/Login/LoginButtonAtom',
    component: LoginButtonAtom,

}

export const Default = { 
    args: {
        title: "Logga In",
    },
};

export const MissingTitle = {};