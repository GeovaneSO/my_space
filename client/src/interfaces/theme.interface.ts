export interface Theme {
    color: string;
    backgroundColor: string;
    header: {
      backgroundColor: string;
      textColor: string;
      boxShadow: string;
      navBar: {
        
        backgroundColor: string;
      }
    };
    list: {
      backgroundColor: string;
      checked:string;
      hover: string;
    },
    borderColor: string;
    borderColor_2: string;
    borderColor_3: string;
    form: {
      backgroundColor: string;
      boxShadow: string;
      buttonForm: {
        textColor: string;
        borderColor: string;
        backgroundColor: string;
      },
    };
    input: {
      color: string;
    };
    button: {
      textColor: string;
      borderColor: string;
      backgroundColor: string;
    };
    footer: {
      backgroundColor: string;
    }
  }