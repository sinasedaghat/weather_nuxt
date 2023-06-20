<script setup lang="ts">
// definePageMeta({
//   title: 'My home page'
// })


const countries = ref({
  "ad": {
        "id": "1",
        "iso_2": "ad",
        "idd": "376",
        "name_en": "Andorra",
        "name_local": null,
        "language_code": "ca",
        "register_allow": true
    },
    "ae": {
        "id": "2",
        "iso_2": "ae",
        "idd": "971",
        "name_en": "United Arab Emirates",
        "name_local": "الإمارات العربيّة المتّحدة",
        "language_code": "ar",
        "register_allow": true
    },
    "af": {
        "id": "3",
        "iso_2": "af",
        "idd": "93",
        "name_en": "Afghanistan",
        "name_local": "افغانستان",
        "language_code": "fa",
        "register_allow": true
    },
    "ag": {
        "id": "4",
        "iso_2": "ag",
        "idd": "1",
        "name_en": "Antigua and Barbuda",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "ai": {
        "id": "5",
        "iso_2": "ai",
        "idd": "1",
        "name_en": "Anguilla",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "al": {
        "id": "6",
        "iso_2": "al",
        "idd": "355",
        "name_en": "Albania",
        "name_local": "Shqipëria",
        "language_code": "sq",
        "register_allow": true
    },
    "am": {
        "id": "7",
        "iso_2": "am",
        "idd": "374",
        "name_en": "Armenia",
        "name_local": "Հայաստան",
        "language_code": "hy",
        "register_allow": true
    },
    "ao": {
        "id": "8",
        "iso_2": "ao",
        "idd": "244",
        "name_en": "Angola",
        "name_local": "Angola",
        "language_code": "pt",
        "register_allow": true
    },
    "aq": {
        "id": "9",
        "iso_2": "aq",
        "idd": "672",
        "name_en": "Antarctica",
        "name_local": null,
        "language_code": "en",
        "register_allow": false
    },
    "ar": {
        "id": "10",
        "iso_2": "ar",
        "idd": "54",
        "name_en": "Argentina",
        "name_local": null,
        "language_code": "es",
        "register_allow": true
    },
    "as": {
        "id": "11",
        "iso_2": "as",
        "idd": "1",
        "name_en": "American Samoa",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "at": {
        "id": "12",
        "iso_2": "at",
        "idd": "43",
        "name_en": "Austria",
        "name_local": "Österreich",
        "language_code": "de",
        "register_allow": true
    },
    "au": {
        "id": "13",
        "iso_2": "au",
        "idd": "61",
        "name_en": "Australia",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "aw": {
        "id": "14",
        "iso_2": "aw",
        "idd": "297",
        "name_en": "Aruba",
        "name_local": null,
        "language_code": "nl",
        "register_allow": true
    },
    "ax": {
        "id": "15",
        "iso_2": "ax",
        "idd": "358",
        "name_en": "Aland",
        "name_local": "Åland",
        "language_code": "sv",
        "register_allow": true
    },
    "az": {
        "id": "16",
        "iso_2": "az",
        "idd": "994",
        "name_en": "Azerbaijan",
        "name_local": "Azərbaycan",
        "language_code": "az",
        "register_allow": true
    },
    "ba": {
        "id": "17",
        "iso_2": "ba",
        "idd": "387",
        "name_en": "Bosnia & Herzegovina",
        "name_local": null,
        "language_code": "bs",
        "register_allow": true
    },
    "bb": {
        "id": "18",
        "iso_2": "bb",
        "idd": "1",
        "name_en": "Barbados",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bd": {
        "id": "19",
        "iso_2": "bd",
        "idd": "880",
        "name_en": "Bangladesh",
        "name_local": "বাংলাদেশ",
        "language_code": "bn",
        "register_allow": true
    },
    "be": {
        "id": "20",
        "iso_2": "be",
        "idd": "32",
        "name_en": "Belgium",
        "name_local": "België",
        "language_code": "nl",
        "register_allow": true
    },
    "bf": {
        "id": "21",
        "iso_2": "bf",
        "idd": "226",
        "name_en": "Burkina Faso",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bg": {
        "id": "22",
        "iso_2": "bg",
        "idd": "359",
        "name_en": "Bulgaria",
        "name_local": "България",
        "language_code": "bg",
        "register_allow": true
    },
    "bh": {
        "id": "23",
        "iso_2": "bh",
        "idd": "973",
        "name_en": "Bahrain",
        "name_local": "البحرين",
        "language_code": "ar",
        "register_allow": true
    },
    "bi": {
        "id": "24",
        "iso_2": "bi",
        "idd": "257",
        "name_en": "Burundi",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bj": {
        "id": "25",
        "iso_2": "bj",
        "idd": "229",
        "name_en": "Benin",
        "name_local": "Bénin",
        "language_code": "fr",
        "register_allow": true
    },
    "bl": {
        "id": "26",
        "iso_2": "bl",
        "idd": "590",
        "name_en": "St. Barthelemy",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bm": {
        "id": "27",
        "iso_2": "bm",
        "idd": "1",
        "name_en": "Bermuda",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bn": {
        "id": "28",
        "iso_2": "bn",
        "idd": "673",
        "name_en": "Brunei",
        "name_local": "brunaɪ",
        "language_code": "ms",
        "register_allow": true
    },
    "bo": {
        "id": "29",
        "iso_2": "bo",
        "idd": "591",
        "name_en": "Bolivia",
        "name_local": "Wuliwya",
        "language_code": "es",
        "register_allow": true
    },
    "bq": {
        "id": "30",
        "iso_2": "bq",
        "idd": "599",
        "name_en": "Bonaire",
        "name_local": null,
        "language_code": "nl",
        "register_allow": true
    },
    "br": {
        "id": "31",
        "iso_2": "br",
        "idd": "55",
        "name_en": "Brazil",
        "name_local": null,
        "language_code": "pt",
        "register_allow": true
    },
    "bs": {
        "id": "32",
        "iso_2": "bs",
        "idd": "1",
        "name_en": "Bahamas",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bt": {
        "id": "33",
        "iso_2": "bt",
        "idd": "975",
        "name_en": "Bhutan",
        "name_local": "འབྲུག་ཡུལ",
        "language_code": "dz",
        "register_allow": true
    },
    "bv": {
        "id": "34",
        "iso_2": "bv",
        "idd": "47",
        "name_en": "Bouvet Island",
        "name_local": "Bouvetøya",
        "language_code": "no",
        "register_allow": false
    },
    "bw": {
        "id": "35",
        "iso_2": "bw",
        "idd": "267",
        "name_en": "Botswana",
        "name_local": "Botswana",
        "language_code": "en",
        "register_allow": true
    },
    "by": {
        "id": "36",
        "iso_2": "by",
        "idd": "375",
        "name_en": "Belarus",
        "name_local": "Беларусь",
        "language_code": "be",
        "register_allow": true
    },
    "bz": {
        "id": "37",
        "iso_2": "bz",
        "idd": "501",
        "name_en": "Belize",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "ca": {
        "id": "38",
        "iso_2": "ca",
        "idd": "237",
        "name_en": "Canada",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "cc": {
        "id": "39",
        "iso_2": "cc",
        "idd": "61",
        "name_en": "Cocos",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
})
// const x = countries.value['cc']
// console.log('cc', x)
//console.log('ref', countries.value)
//.log('ref cc', countries.value['cc'])


// const y = ref({
//   iso: 'ir',
//   number: 98
// })

// console.log("sssss", y)
// console.log("ssssxxxxxxs", y.value)
// console.log("ssssxxxsssssxxxs", y.value['iso'])
// // console.log("ssssxxxssssssssxxxs", y.iso)



// const yy = reactive

const game = reactive(
    {
  "ad": {
        "id": "1",
        "iso_2": "ad",
        "idd": "376",
        "name_en": "Andorra",
        "name_local": null,
        "language_code": "ca",
        "register_allow": true
    },
    "ae": {
        "id": "2",
        "iso_2": "ae",
        "idd": "971",
        "name_en": "United Arab Emirates",
        "name_local": "الإمارات العربيّة المتّحدة",
        "language_code": "ar",
        "register_allow": true
    },
    "af": {
        "id": "3",
        "iso_2": "af",
        "idd": "93",
        "name_en": "Afghanistan",
        "name_local": "افغانستان",
        "language_code": "fa",
        "register_allow": true
    },
    "ag": {
        "id": "4",
        "iso_2": "ag",
        "idd": "1",
        "name_en": "Antigua and Barbuda",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "ai": {
        "id": "5",
        "iso_2": "ai",
        "idd": "1",
        "name_en": "Anguilla",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "al": {
        "id": "6",
        "iso_2": "al",
        "idd": "355",
        "name_en": "Albania",
        "name_local": "Shqipëria",
        "language_code": "sq",
        "register_allow": true
    },
    "am": {
        "id": "7",
        "iso_2": "am",
        "idd": "374",
        "name_en": "Armenia",
        "name_local": "Հայաստան",
        "language_code": "hy",
        "register_allow": true
    },
    "ao": {
        "id": "8",
        "iso_2": "ao",
        "idd": "244",
        "name_en": "Angola",
        "name_local": "Angola",
        "language_code": "pt",
        "register_allow": true
    },
    "aq": {
        "id": "9",
        "iso_2": "aq",
        "idd": "672",
        "name_en": "Antarctica",
        "name_local": null,
        "language_code": "en",
        "register_allow": false
    },
    "ar": {
        "id": "10",
        "iso_2": "ar",
        "idd": "54",
        "name_en": "Argentina",
        "name_local": null,
        "language_code": "es",
        "register_allow": true
    },
    "as": {
        "id": "11",
        "iso_2": "as",
        "idd": "1",
        "name_en": "American Samoa",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "at": {
        "id": "12",
        "iso_2": "at",
        "idd": "43",
        "name_en": "Austria",
        "name_local": "Österreich",
        "language_code": "de",
        "register_allow": true
    },
    "au": {
        "id": "13",
        "iso_2": "au",
        "idd": "61",
        "name_en": "Australia",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "aw": {
        "id": "14",
        "iso_2": "aw",
        "idd": "297",
        "name_en": "Aruba",
        "name_local": null,
        "language_code": "nl",
        "register_allow": true
    },
    "ax": {
        "id": "15",
        "iso_2": "ax",
        "idd": "358",
        "name_en": "Aland",
        "name_local": "Åland",
        "language_code": "sv",
        "register_allow": true
    },
    "az": {
        "id": "16",
        "iso_2": "az",
        "idd": "994",
        "name_en": "Azerbaijan",
        "name_local": "Azərbaycan",
        "language_code": "az",
        "register_allow": true
    },
    "ba": {
        "id": "17",
        "iso_2": "ba",
        "idd": "387",
        "name_en": "Bosnia & Herzegovina",
        "name_local": null,
        "language_code": "bs",
        "register_allow": true
    },
    "bb": {
        "id": "18",
        "iso_2": "bb",
        "idd": "1",
        "name_en": "Barbados",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bd": {
        "id": "19",
        "iso_2": "bd",
        "idd": "880",
        "name_en": "Bangladesh",
        "name_local": "বাংলাদেশ",
        "language_code": "bn",
        "register_allow": true
    },
    "be": {
        "id": "20",
        "iso_2": "be",
        "idd": "32",
        "name_en": "Belgium",
        "name_local": "België",
        "language_code": "nl",
        "register_allow": true
    },
    "bf": {
        "id": "21",
        "iso_2": "bf",
        "idd": "226",
        "name_en": "Burkina Faso",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bg": {
        "id": "22",
        "iso_2": "bg",
        "idd": "359",
        "name_en": "Bulgaria",
        "name_local": "България",
        "language_code": "bg",
        "register_allow": true
    },
    "bh": {
        "id": "23",
        "iso_2": "bh",
        "idd": "973",
        "name_en": "Bahrain",
        "name_local": "البحرين",
        "language_code": "ar",
        "register_allow": true
    },
    "bi": {
        "id": "24",
        "iso_2": "bi",
        "idd": "257",
        "name_en": "Burundi",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bj": {
        "id": "25",
        "iso_2": "bj",
        "idd": "229",
        "name_en": "Benin",
        "name_local": "Bénin",
        "language_code": "fr",
        "register_allow": true
    },
    "bl": {
        "id": "26",
        "iso_2": "bl",
        "idd": "590",
        "name_en": "St. Barthelemy",
        "name_local": null,
        "language_code": "fr",
        "register_allow": true
    },
    "bm": {
        "id": "27",
        "iso_2": "bm",
        "idd": "1",
        "name_en": "Bermuda",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bn": {
        "id": "28",
        "iso_2": "bn",
        "idd": "673",
        "name_en": "Brunei",
        "name_local": "brunaɪ",
        "language_code": "ms",
        "register_allow": true
    },
    "bo": {
        "id": "29",
        "iso_2": "bo",
        "idd": "591",
        "name_en": "Bolivia",
        "name_local": "Wuliwya",
        "language_code": "es",
        "register_allow": true
    },
    "bq": {
        "id": "30",
        "iso_2": "bq",
        "idd": "599",
        "name_en": "Bonaire",
        "name_local": null,
        "language_code": "nl",
        "register_allow": true
    },
    "br": {
        "id": "31",
        "iso_2": "br",
        "idd": "55",
        "name_en": "Brazil",
        "name_local": null,
        "language_code": "pt",
        "register_allow": true
    },
    "bs": {
        "id": "32",
        "iso_2": "bs",
        "idd": "1",
        "name_en": "Bahamas",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "bt": {
        "id": "33",
        "iso_2": "bt",
        "idd": "975",
        "name_en": "Bhutan",
        "name_local": "འབྲུག་ཡུལ",
        "language_code": "dz",
        "register_allow": true
    },
    "bv": {
        "id": "34",
        "iso_2": "bv",
        "idd": "47",
        "name_en": "Bouvet Island",
        "name_local": "Bouvetøya",
        "language_code": "no",
        "register_allow": false
    },
    "bw": {
        "id": "35",
        "iso_2": "bw",
        "idd": "267",
        "name_en": "Botswana",
        "name_local": "Botswana",
        "language_code": "en",
        "register_allow": true
    },
    "by": {
        "id": "36",
        "iso_2": "by",
        "idd": "375",
        "name_en": "Belarus",
        "name_local": "Беларусь",
        "language_code": "be",
        "register_allow": true
    },
    "bz": {
        "id": "37",
        "iso_2": "bz",
        "idd": "501",
        "name_en": "Belize",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "ca": {
        "id": "38",
        "iso_2": "ca",
        "idd": "237",
        "name_en": "Canada",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
    "cc": {
        "id": "39",
        "iso_2": "cc",
        "idd": "61",
        "name_en": "Cocos",
        "name_local": null,
        "language_code": "en",
        "register_allow": true
    },
}
)
const test = reactive({"cc" : {test: 1}})

//console.log('reactive', game)
console.table(test.cc)









</script>

<template>
  favorite cities ...
</template>