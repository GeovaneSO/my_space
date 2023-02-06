import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const updateContactSchema =  yup.object({
    name: yup.string()
        .required('Seu nome é obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .min(12, 'Coloque no mínimo 12 caracteres'),

    avatarUrl: yup.string()
        .required('Coloque uma imagem para seu perfil')     
});


export const contactFormSchema = yup.object({
    name: yup.string()
        .required('Seu nome é obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .min(12, 'Coloque no mínimo 12 caracteres'),

    email: yup.string()
        .required('Digite seu email')
        .email("Formato de email inválido")
        .matches(/^(?!.*@[^,]*,)/),
   
    phone: yup.string()
        .required("Coloque seu número de telefone")
        .matches(phoneRegExp, 'Número de telefone não é válido')
        .min(11, "Muito curto")
        .max(11, "Muito longo"),

    avatarUrl: yup.string()
        .required('Coloque uma imagem para seu perfil')     
});
