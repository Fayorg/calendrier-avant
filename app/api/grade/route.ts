import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IBody {
    key: string
    grade: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body as IBody
    if (req.method === 'POST') {
        // Process a POST request
        await prisma.grade.findFirst({where: {key: body.key}}).then(async (grade) => {
            if (grade) {
                await prisma.grade.create({data: {test: 1, grade: body.grade, key: body.key}})
                res.status(200).json({message: 'Grade updated', cookie: 'voted=true'})
            } else {
                res.status(404).json({message: 'Key not found'})
            }
        })
    } else {
        // Handle any other HTTP method
    }
}
