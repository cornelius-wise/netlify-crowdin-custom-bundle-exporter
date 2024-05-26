// exports.handler = async data => {
//     // const { body } = data;
//     return {
//         statusCode: 200,
//         body: JSON.stringify(data)
//     }
// }

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    console.log(JSON.stringify(event))
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    }
}

// exports.handler = async data => {

//     const body = data.req;

//     const result = body.strings.map(s => {
//         return {
//           id: s.identifier,
//           text: s.text,
//           translation: s.translations[data.languageId].text
//         }
//     })
    
//     return JSON.stringify(result);
// }

// exports.handler = async (req, res) => {
//     const { body } = req;
    
//   const result = body.strings.map(s => {
//     return {
//       id: s.identifier,
//       text: s.translations[body.languageId].text
//     }
//   })

//   return res.send(JSON.stringify(result));
// }