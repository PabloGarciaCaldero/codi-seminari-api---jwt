import {hash, compare} from "bcryptjs"

const encrypt = async (pass:string) => {
    const passwordHash = await hash(pass, 8)
    return passwordHash;
}

const verified = async (pass:string, passwordHash:string) => {
    const isCorrect = await compare(pass, passwordHash);
    return isCorrect;
}

export {encrypt, verified};