import { Theme } from "../../interfaces/theme.interface";

const lightTheme: Theme = {
  color: "var(--grey-6)",
  backgroundColor: "var(--grey-4)",
  header: {
    backgroundColor:'var(--blue-8)',
    textColor: "var(--blue-7)",
    boxShadow: 'var(--shadow-header-1)',
    navBar: {
      
      backgroundColor:'var(--green-3)',
    },
  },
  list: {
    backgroundColor:"var(--white)",
    checked: 'var(--green-6)',
    hover: 'var(--grey-11)',
  },

  borderColor: 'var(--blue-9)',
  borderColor_2: 'var(--grey-10)',
  borderColor_3: 'var(--blue-7)',

  form: {
    backgroundColor: "var(--white)",
    boxShadow: 'var(--shadow-form-1)',
    buttonForm: {
      textColor: "var(--grey-6)",
      borderColor: "#151A69",
      backgroundColor: "var(--blue-3)",
    },  
  },
  input: {
    color: 'var(--blue-7)',
  },
  button: {
    textColor: "var(--grey-6)",
    borderColor: "#151A69",
    backgroundColor: "var(--blue-5)",
  },
  footer: {
    backgroundColor: "var(--grey-4)",
  },
};

const darkTheme: Theme = {
  color: "var(--grey-6)",
  backgroundColor:  "var(--black-2)",
  header: {
    backgroundColor:"var(--green-2)",
    textColor:"var(--grey-6)",
    boxShadow: '0px 2px 3px -1px var(--grey-7)',
    navBar: {
      
      backgroundColor:'var(--green-4)',
    },
  },
  list: {
    backgroundColor:"var(--black-4)",
    checked: 'var(--green-5)',
    hover: 'var(--grey-1)',
  },
  borderColor: 'var(--blue-7)',
  borderColor_2: 'var(--grey-9)',
  borderColor_3: 'var(--blue-3)',
  form: {
    backgroundColor:'var(--green-2)',
    boxShadow: 'var(--shadow-form-2)',  
    buttonForm: {
      textColor: "var(--blue-6)",
      borderColor: "var(--blue-6)",
      backgroundColor:"var(--grey-2)",
    },
  },
  input: {
    color: 'var(--grey-6)',
  },
  button: {
    textColor: "var(--blue-6)",
    borderColor: "var(--blue-6)",
    backgroundColor: "var(--grey-2)",
  },
  footer: {
    backgroundColor:  "var(--black-4)",
  },
};

export const themes ={
    light: lightTheme,
    dark: darkTheme
}