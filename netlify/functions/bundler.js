

exports.handler = async data => {

    const body = data.req;

    const result = body.strings.map(s => {
        return {
          id: s.identifier,
          text: s.text,
          translation: s.translations[data.languageId].text
        }
    })
    
    return JSON.stringify(result);
}

exports.handler = async (req, res) => {
    const { body } = req;
    return res.send(JSON.stringify(body));
    
//   const result = body.strings.map(s => {
//     return {
//       id: s.identifier,
//       text: s.translations[body.languageId].text
//     }
//   })

//   return res.send(JSON.stringify(result));
}