// export async function POST(req, res) {
//     const body = await req.json()
//     console.log('body: ', body)
//     return new Response({
//         status: 200
//     })
// }

import { sendMail } from "../../service/mailService";
export async function POST(req, res) {
    try {
        const { method } = req;
        const body = await req.json();
        console.log('body', body);
        switch (method) {
            case "POST": {
                //Do some thing
                await sendMail(
                    body.name,
                    body.email,
                    body.message
                );
                return new Response({
                    status: 200,
                });
                break;
            }
            default:
                res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (err) {
        res.status(400).json({
            error_code: "api_one",
            message: err.message,
        });
    }
};