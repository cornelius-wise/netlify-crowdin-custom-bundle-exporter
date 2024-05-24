// exports.handler = async event => {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//         statusCode: 200,
//         body: `Hello ${subject}!`,
//     }
// }

export default async function handler(req, res) {
    const { body } = req;

//   const strings = body.strings.map(s => {
//     return {
//       id: s.identifier,
//       text: s.translations[body.languageId].text
//     }
//   })

//   return res.send(JSON.stringify(result));
    return res.send(JSON.stringify(body));
}