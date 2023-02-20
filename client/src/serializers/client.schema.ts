import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const clientSessionSchema = yup.object({
    username: yup.string()
        .required('Seu nome de usuário é obrigatório')
        .min(3, 'Seu nome de usuário deve ter no mínimo 3 caracteres')
        .max(20, 'Seu nome de usuário deve ter no máximo 20 caracteres'),
    password: yup.string()
        .required('Digite sua senha')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),

})

export const clientFormSchema = yup.object({
    name: yup.string()
        .required('Seu nome é obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .min(8, 'Coloque no mínimo 8 caracteres'),
    
    username: yup.string()
        .required('Seu nome de usuário é obrigatório')
        .min(3, 'Seu nome de usuário deve ter no mínimo 3 caracteres')
        .max(20, 'Seu nome de usuário deve ter no máximo 20 caracteres'),
    
    password: yup.string()
        .required('Digite sua senha')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    
    email: yup.string()
        .required('Digite seu email')
        .email("Formato de email inválido")
        .matches(/^(?!.*@[^,]*,)/),
   
    phone: yup.string()
        .required("Coloque seu número de telefone")
        .matches(phoneRegExp, 'Número de telefone não é válido')
        .min(11, "Muito curto")
        .max(11, "Muito longo"),

    // avatarUrl: yup.string()
    //     .required('Coloque uma imagem para seu perfil')     
});

export const updateClientSchema =  yup.object({
    name: yup.string()
        .notRequired(),
        // .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        // .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        // .min(3, 'Coloque no mínimo 3 caracteres'),

    password: yup.string()
        .notRequired()
        // .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        // .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        // .matches(/(\d)/, "Deve conter ao menos 1 número")
        // .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
        // .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),

});
