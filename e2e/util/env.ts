import dotenv from 'dotenv'
dotenv.config()

export const USER_1_EMAIL = process.env.USER_1_EMAIL!
export const USER_1_PASSWORD = process.env.USER_1_PASSWORD!
export const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'