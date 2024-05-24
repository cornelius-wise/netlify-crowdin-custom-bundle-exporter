const express = require('express')
const app = express()
const port = 3000

const sampleData = {
    "jobType": "file-post-import",
    "organization": {
        "id": 1,
        "domain": "{domain}",
        "baseUrl": "https://{domain}.crowdin.com",
        "apiBaseUrl": "https://{domain}.api.crowdin.com"
    },
    "project": {
        "id": 1,
        "identifier": "your-project-identifier",
        "name": "Your Project Name"
    },
    "file": {
        "id": 1,
        "name": "file.xml",
        "content": "VGhpcyBpcyBmaWxlIGNvbnRlbnQ=",
        "contentUrl": "https://crowdin-tmp.downloads.crowdin.com/1/file.xml?aws-signature=..."
    },
    "sourceLanguage": {
        "id": "es",
        "name": "Spanish",
        "editorCode": "es",
        "twoLettersCode": "es",
        "threeLettersCode": "spa",
        "locale": "es-ES",
        "androidCode": "es-rES",
        "osxCode": "es.lproj",
        "osxLocale": "es",
        "pluralCategoryNames": ["one"],
        "pluralRules": "(n != 1)"
    },
    "targetLanguages": [],
    "strings": [
        {
            "By using our services, you agree to our": "En utilisant nos services, vous acceptez nos"
        },
        {
            "Customer agreements": "Contrats clients"
        },
        {
            "Assets customer agreement (Singapore)": "Contrats clients des Actifs (Singapour)"
        },
        {
            "and": "et "
        },
        {
            "See how we process your personal data": "Découvrez comment nous traitons vos données personnelles"
        },
        {
            "when you take part in a Research Project": "lorsque vous participez à un projet de recherche"
        },
        {
            "Invite friends and family": "Invitez vos amis et votre famille"
        },
        {
            "Invite now": "Invitez vos proches"
        },
        {
            "You can find more information about the product and funds on": "Vous pouvez trouver plus d'informations sur le produit et sur le fonds sur"
        },
        {
            "our website": "notre site Web"
        },
        {
            "Open your": "Ouvrez votre"
        },
        {
            "Wise app": "appli Wise"
        },
        {
            "log in and tap on 'Manage' to get your personal invite link": "connectez-vous et appuyez sur « Gérer » pour obtenir votre lien d'invitation personnel"
        },
        {
            "You can learn more about how rewards work": "Vous pouvez en lire plus sur le fonctionnement des récompenses"
        },
        {
            "here": "ici"
        },
        {
            "***The current Program Bank is JPMorgan Chase Bank, N.A.,": "**La banque partenaire actuelle est JPMorgan Chase Bank, N.A."
        },
        {
            "see Appendix 1 of the": " Consultez l'Annexe 1"
        },
        {
            "Program Agreement": "de l'accord de programme"
        },
        {
            "for the most updated list of Program Bank(s)": "pour la liste la plus récente des banques participantes."
        },
        {
            "See Program Agreement for": "Consultez l'accord de programme pour"
        },
        {
            "more details": "pour plus d'informations"
        }
    ],
    "stringsUrl": "https://tmp.downloads.crowdin.com/strings.ndjson",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/', (req, res) => {
//     const { body } = req;

//   const strings = body.strings.map(s => {
//     return {
//       id: s.identifier,
//       text: s.translations[body.languageId].text
//     }
//   })

//   return res.send(JSON.stringify(result));
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})