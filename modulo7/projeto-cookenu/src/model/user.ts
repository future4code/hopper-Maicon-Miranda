export type user = {
   id: string
   nome: string
   email: string
   senha: string
}

export interface UserInputDTO {
   nome: string
   email: string
   senha: string
}

export interface LoginInputDTO {
   email: string,
   senha: string
}

export type AuthenticationData = {
   id: string
}

export interface GetUserDTO {
   token: string
}

export interface GetUserByIdDTO {
   id: string
}