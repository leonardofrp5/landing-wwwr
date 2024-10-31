export const userMessagesTemplate = (userName: string) => {
    return `Hola ${userName}, ya estás dentro de nuestra plataforma de seguridad. Para cualquier emergencia, comunícate con la Línea Púrpura al 01800 112 137 o #155.` 
}

export const contactMessagesTemplate = ({userName, location, kms}: {userName: string, location: string, kms: string}) => {
    return `Hola, desde WWWR te informamos que eres el contacto de emergencia de ${userName}. Esta persona dará inicio a su entrenamiento en ${location} de ${kms} ${kms === '1' ? 'km' : 'kms'}  en caso de emergencia, por favor comunícate con la Línea Púrpura al 01800 112 137 o #155.`
}