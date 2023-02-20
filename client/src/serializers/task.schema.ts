import * as yup from 'yup';


export const createTaskSchema =  yup.object({
    title: yup.string()
        .required('Seu nome é obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .min(4, 'Coloque no mínimo 4 caracteres'),

    description: yup.string()
        .required('Descreva a sua tarefa'),
        // .max(150, "No máximo 150 caracteres")   ,
        
    category: yup.string()
        .required('Selecione a categoria da sua tarefa')   
    
});

export const updateTaskSchema =  yup.object({
    title: yup.string()
        .required('Seu nome é obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .min(4, 'Coloque no mínimo 4 caracteres'),

    description: yup.string()
        .required('Descreva a sua tarefa'),
        // .max(150, "No máximo 150 caracteres")   ,
        
});