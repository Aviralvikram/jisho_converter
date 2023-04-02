
//                                               RECURSIVE FUNCTION OMDEMONS || Lower Order Function Very Usefull
function pushTillaNum(sample, limit, itemPushed = "") {
    let len;
    if (sample.length < limit) len = sample.push(itemPushed)                    // Array.push returns new length
    //                                                                        RECURSIVE FUNCTION OMDEMONS
    if (len < limit) pushTillaNum(sample, limit, itemPushed);
    return sample;
}
function test(item) {
    if (!i) return "";
    return i;
}
//                                               ARRAY.ISARRAY || ARRAY.JOIN || RECURSIVE FUNCTION OMD
function numToString(num) {
    if (num === null) return "404";
    //                                                                        ARRAY.ISARRAY
    if (Array.isArray(num)) {
        //                                                                    ARRAY.JOIN
        //                                                                    RECURSIVE FUNCTION OMDEMONS
        return num.map(numToString).join(',')
    }
    const result = num === 0 ? 'Other forms' :
        num == "01" ? 'Numeric' :
            num === 1 ? 'Noun' :
                num === 2 ? 'Intransitive verb' :
                    num === 3 ? 'Transitive verb' :
                        num === 32 ? 'Ichidan verb' :
                            num === 11 ? 'Suru verb' :
                                num === 22 ? 'Godan verb with ru ending' :
                                    num === 33 ? 'Godan verb with su ending' :
                                        num === 4 ? 'Counter' :
                                            num === 5 ? 'Suffix' :
                                                num === 9 ? 'Wikipedia definition' :
                                                    num === 6 ? 'Notes' :
                                                        num === 8 ? 'Na-adjective (keiyodoshi)' :
                                                            num === 81 ? 'I-adjective (keiyoushi)' :
                                                                num === 7 ? 'Auxiliary verb' :
                                                                    num === 13 ? 'Noun which may take the genitive case particle "no"' :
                                                                        num === 31 ? 'Adverb (fukushi)' :
                                                                            num === 18 ? 'used as a suffix' :
                                                                                num === 19 ? 'things' :
                                                                                    num === 20 ? 'not people' :
                                                                                        num === 21 ? 'place' : "";
    return result;
}
function tagMaker(t) {
    return `<li>${t}</li>`;
}
//                                       ARRAY.JOIN || ARRAY DESTRUCTURING
function exampleMaker(eg, i) {
    const meaningTags = eg.meaningTags.map(numToString);
    //                                                                        ARRAY.JOIN
    let furigana = Array.isArray(eg.furigana) ? eg.furigana.map(f => `<span>${f}</span>`).join("") : eg.furigana;
    let tags = eg.tags.map(tagMaker).join("");
    let meanings = eg.meanings.map((m = "", i, arr) => `<div><p>${meaningTags[i] || ""}</p><p>${m}</p></div>`)
    pushTillaNum(meanings, 2, ``)
    //                                                                        ARRAY DESTRUCTURING
    let [m1, ...m2] = meanings
    return [furigana ,eg.kanji,tags, m1,m2.join("")]
}
function createAnkiJSON(id, lesson) {
    const Deck = [];
    const notes = [];
    const DATA = [];
    let uuid = id

    let examples
    lesson?.[`Lesson_${uuid}`].forEach((d, i) => {
        let ready = []
        ready.push(d.kanji)
        ready.push(d.kanjiDetails?.stroke || "")
        ready.push(d.kanjiDetails?.grade || "")
        ready.push(d.kanjiDetails?.jlpt || "")
        console.log(d.kanjiDetails?.jlpt,d.kanjiDetails?.jlpt || "");
        ready.push(d.kanjiDetails?.frequency || "")
        if (Array.isArray(d.kanjiDetails?.meanings)) ready.push(d.kanjiDetails?.meanings?.join(','))
        else ready.push(d.kanjiDetails?.meanings)
        ready.push(d.kanjiDetails?.kun.join('、') || "")
        ready.push(d.kanjiDetails?.on.join('、') || "")
        examples = d.examples?.totalExamples?.map(exampleMaker);
        if (examples) examples.forEach(el => {ready.push(...el)});
        pushTillaNum(ready, 83, "")
        Deck.push(
            {__type__: "Note",
                data: "",
                fields: [...ready],
                guid: `45${uuid}678${(i || 0)}`,
                note_model_uuid: `a6a2f2e0-6d5b-11e6-adf3-8c705a50cbf0`,
                tags: []}
        )
    })
    console.log(Deck);
    return Deck
}

export { createAnkiJSON }