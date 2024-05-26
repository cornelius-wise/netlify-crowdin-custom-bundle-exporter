const express = require('express')
const app = express()
const port = 3000

const bundler = require('./netlify/functions/bundler');
const sampleData = {
    languageId: 'ja',
    req: {
        jobType: 'build-file',
        organization: {
            id: 200000009,
            domain: 'serhiy',
            baseUrl: 'https://serhiy.crowdin.com',
            apiBaseUrl: 'https://serhiy.api.crowdin.com'
        },
        project: {
            id: 398,
            identifier: '1a57678bc6171e5713595b83e8ef8b90',
            name: 'Unified Placeholders and Bundles'
        },
        file: { id: 14854, name: 'strings.xml', path: '' },
        customSrxContents: null,
        sourceLanguage: {
            id: 'en',
            name: 'English',
            editorCode: 'en',
            twoLettersCode: 'en',
            threeLettersCode: 'eng',
            locale: 'en-US',
            androidCode: 'en-rUS',
            osxCode: 'en.lproj',
            osxLocale: 'en',
            pluralCategoryNames: [ 'one', 'other' ],
            pluralRules: '(n != 1)'
        },
        targetLanguages: [
            {
            id: 'ja',
            name: 'Japanese',
            editorCode: 'ja',
            twoLettersCode: 'ja',
            threeLettersCode: 'jpn',
            locale: 'ja-JP',
            androidCode: 'ja-rJP',
            osxCode: 'ja.lproj',
            osxLocale: 'ja',
            pluralCategoryNames: [ 'other' ],
            pluralRules: '0'
            }
        ],
        strings: [
            {
            id: 1864380,
            identifier: 'identifier_1',
            context: 'identifier_1',
            customData: '',
            maxLength: null,
            isHidden: false,
            hasPlurals: false,
            labels: [],
            text: 'String for translation 1',
            translations: { ja: { text: '翻訳のための文字列 1', status: 'translated' } }
            }
        ],
        context: {
        jwtPayload: {
            aud: 'WKcvYqBU59RGSRzjoMzn',
            sub: '2',
            domain: 'serhiy',
            context: { project_id: 398, organization_id: 200000009, user_id: 2 },
            iat: 1672494603.015501,
            exp: 1672495563.015501
        },
        clientId: 'serhiy__398__2',
        crowdinId: 'serhiy'
        },
        project: {
        id: 398,
        groupId: 2,
        userId: 2,
        sourceLanguageId: 'en',
        targetLanguageIds: [ 'ja', 'uk' ],
        name: 'Unified Placeholders and Bundles',
        identifier: '1a57678bc6171e5713595b83e8ef8b90',
        description: '',
        logo: 'data:image/png;base64,iV ...',
        background: null,
        isExternal: false,
        externalType: null,
        workflowId: 201,
        hasCrowdsourcing: false,
        publicDownloads: true,
        createdAt: '2022-12-28T08:24:56+00:00',
        updatedAt: '2022-12-28T08:24:56+00:00',
        lastActivity: '2022-12-31T07:11:12+00:00',
        targetLanguages: [
            {
            id: 'ja',
            name: 'Japanese',
            editorCode: 'ja',
            twoLettersCode: 'ja',
            threeLettersCode: 'jpn',
            locale: 'ja-JP',
            androidCode: 'ja-rJP',
            osxCode: 'ja.lproj',
            osxLocale: 'ja',
            pluralCategoryNames: [ 'other' ],
            pluralRules: '0',
            pluralExamples: [ '0-999; 1.2...' ],
            textDirection: 'ltr',
            dialectOf: null
            }
        ],
        translateDuplicates: 0,
        tagsDetection: 0,
        glossaryAccess: false,
        isMtAllowed: true,
        hiddenStringsProofreadersAccess: true,
        autoSubstitution: true,
        exportTranslatedOnly: false,
        skipUntranslatedStrings: false,
        skipUntranslatedFiles: false,
        exportWithMinApprovalsCount: 0,
        exportStringsThatPassedWorkflow: false,
        autoTranslateDialects: false,
        normalizePlaceholder: true,
        saveMetaInfoInSource: true,
        inContext: false,
        inContextProcessHiddenStrings: true,
        inContextPseudoLanguageId: null,
        inContextPseudoLanguage: null,
        isSuspended: false,
        qaCheckIsActive: true,
        qaCheckCategories: {
            empty: true,
            size: true,
            tags: true,
            spaces: true,
            variables: true,
            punctuation: true,
            symbolRegister: true,
            specialSymbols: true,
            wrongTranslation: true,
            spellcheck: true,
            icu: true,
            terms: false,
            duplicate: true,
            ftl: true
        },
        customQaCheckIds: [],
        languageMapping: {},
        delayedWorkflowStart: false,
        notificationSettings: {
            translatorNewStrings: false,
            managerNewStrings: false,
            managerLanguageCompleted: false
        }
        }
    }
}

app.get('/', async (req, res) => {
    const data = await bundler.handler(sampleData)
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})