import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



export const InformationSchema =  yup.object({
    email: yup.string()
        .required('Digite seu email')
        .email("Formato de email inválido")
        .matches(/^(?!.*@[^,]*,)/),
   
    phone: yup.string()
        .required("Coloque seu número de telefone")
        .matches(phoneRegExp, 'Número de telefone não é válido')
        .min(11, "Muito curto")
        .max(11, "Muito longo"),
});