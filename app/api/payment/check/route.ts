import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    const { data } = await axios({
      method: 'get',
      url: `https://api.yookassa.ru/v3/payments/${reqBody.paymentId}`,
      auth: {
        username: '412385',
        password: 'test_y3VUQ4cMUIYzTyaP095ISFbM8t5ucelNbZx_uwt02M0',
      },
    })

    return NextResponse.json({ result: data })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
