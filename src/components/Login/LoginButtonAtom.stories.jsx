import LoginButtonAtom from "./LoginButtonAtom";

export default {
    title: 'Kursapp/Login/LoginButtonAtom',
    component: LoginButtonAtom,
    argTypes: {
        title: { control: 'text' },
    },
};

export const Default = {
    args: {
        title: "Logga In",
    },
};

export const MissingTitle = {
    args: {
        title: "",  // retunerar ett fall där title inte är satt
    },
};
