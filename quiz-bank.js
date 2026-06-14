/* ============================================================
   QUIZ BANK — กอร์น (Gorn) · ASMO English Level 1
   ------------------------------------------------------------
   คลังข้อสอบของแอป asmo-english.html
   ★ วิธีเพิ่มชุดใหม่: ก๊อปบล็อก { ... } หนึ่งชุด มาต่อท้าย array
     ด้านล่าง (ก่อนเครื่องหมาย ] ปิดท้าย) แล้วแก้ id/title/questions
     — ไม่ต้องแก้ไฟล์ HTML เลย แอปจะเห็นชุดใหม่อัตโนมัติ

   โครงสร้างคำถาม 1 ข้อ:
     { n: 1, cat: "Vocabulary", stem: "...", opts: {A,B,C,D}, ans: "B" }
   ข้อ reading ใส่ passage ด้วย:
     { n: 25, cat: "Reading", passage: {title, text}, stem, opts, ans }

   หมวด (cat) มาตรฐาน: Vocabulary | Grammar | Synonyms & Antonyms
                       | Spelling | Reading
   ============================================================ */
window.QUIZ_BANK = [

  /* ============ SET 1 ============ */
  {
    id: "asmo-en-l1-p01",
    title: "ASMO English L1 — ชุดที่ 1",
    level: "A1",
    questions: [
      // -- Vocabulary --
      { n:1, cat:"Vocabulary", stem:"Which word means <u>a baby dog</u>?",
        opts:{A:"kitten", B:"puppy", C:"chick", D:"calf"}, ans:"B" },
      { n:2, cat:"Vocabulary", stem:"You use your <u>eyes</u> to …",
        opts:{A:"walk", B:"eat", C:"see", D:"hear"}, ans:"C" },
      { n:3, cat:"Vocabulary", stem:"Which one is a <u>fruit</u>?",
        opts:{A:"apple", B:"chair", C:"shoe", D:"spoon"}, ans:"A" },
      { n:4, cat:"Vocabulary", stem:"Your mother’s son is your …",
        opts:{A:"sister", B:"aunt", C:"mother", D:"brother"}, ans:"D" },
      { n:5, cat:"Vocabulary", stem:"We write on the board with a …",
        opts:{A:"ruler", B:"chalk", C:"bag", D:"clock"}, ans:"B" },
      // -- Grammar --
      { n:6, cat:"Grammar", stem:"I see ____ elephant at the zoo.",
        opts:{A:"an", B:"a", C:"the two", D:"some a"}, ans:"A" },
      { n:7, cat:"Grammar", stem:"She has ____ cat.",
        opts:{A:"an", B:"a", C:"are", D:"two a"}, ans:"B" },
      { n:8, cat:"Grammar", stem:"The birds ____ in the sky.",
        opts:{A:"is", B:"am", C:"are", D:"be"}, ans:"C" },
      { n:9, cat:"Grammar", stem:"I have two ____.",
        opts:{A:"books", B:"book", C:"a book", D:"bookes"}, ans:"A" },
      { n:10, cat:"Grammar", stem:"The cat is sitting ____ the box. (วางบนกล่อง)",
        opts:{A:"under", B:"on", C:"in", D:"of"}, ans:"B" },
      { n:11, cat:"Grammar", stem:"____ is my pencil. (ดินสอที่อยู่ใกล้ตัวเรา)",
        opts:{A:"Those", B:"These", C:"This", D:"Are"}, ans:"C" },
      { n:12, cat:"Grammar", stem:"My father ____ to work every day.",
        opts:{A:"go", B:"going", C:"are go", D:"goes"}, ans:"D" },
      // -- Synonyms & Antonyms --
      { n:13, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>big</b>?",
        opts:{A:"tiny", B:"large", C:"short", D:"cold"}, ans:"B" },
      { n:14, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>happy</b>?",
        opts:{A:"glad", B:"sad", C:"angry", D:"slow"}, ans:"A" },
      { n:15, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>fast</b>?",
        opts:{A:"late", B:"tall", C:"quick", D:"open"}, ans:"C" },
      { n:16, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>hot</b>?",
        opts:{A:"warm", B:"cold", C:"big", D:"wet"}, ans:"B" },
      { n:17, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>up</b>?",
        opts:{A:"down", B:"in", C:"fast", D:"new"}, ans:"A" },
      { n:18, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>day</b>?",
        opts:{A:"sun", B:"morning", C:"week", D:"night"}, ans:"D" },
      // -- Spelling --
      { n:19, cat:"Spelling", stem:"ele _ hant &nbsp;&nbsp;(ช้าง)",
        opts:{A:"f", B:"b", C:"p", D:"v"}, ans:"C" },
      { n:20, cat:"Spelling", stem:"sch _ ol &nbsp;&nbsp;(โรงเรียน)",
        opts:{A:"o", B:"a", C:"u", D:"e"}, ans:"A" },
      { n:21, cat:"Spelling", stem:"ban _ na &nbsp;&nbsp;(กล้วย)",
        opts:{A:"i", B:"a", C:"e", D:"o"}, ans:"B" },
      { n:22, cat:"Spelling", stem:"ti _ er &nbsp;&nbsp;(เสือ)",
        opts:{A:"d", B:"j", C:"g", D:"k"}, ans:"C" },
      { n:23, cat:"Spelling", stem:"fl _ wer &nbsp;&nbsp;(ดอกไม้)",
        opts:{A:"o", B:"a", C:"u", D:"i"}, ans:"A" },
      { n:24, cat:"Spelling", stem:"wat _ r &nbsp;&nbsp;(น้ำ)",
        opts:{A:"a", B:"e", C:"o", D:"i"}, ans:"B" },
      // -- Reading --
      { n:25, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"What is the name of the dog?",
        opts:{A:"Mali", B:"Coco", C:"Apple", D:"Ball"}, ans:"B" },
      { n:26, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"What color is the dog?",
        opts:{A:"red", B:"black", C:"brown", D:"white"}, ans:"C" },
      { n:27, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"Where do Mali and Coco run in the morning?",
        opts:{A:"in the park", B:"in the house", C:"at school", D:"in the car"}, ans:"A" },
      { n:28, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"What does Mali like to eat?",
        opts:{A:"meat", B:"rice", C:"apples", D:"bread"}, ans:"C" },
      { n:29, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"What do they play with in the evening?",
        opts:{A:"a doll", B:"a red ball", C:"a book", D:"a kite"}, ans:"B" },
      { n:30, cat:"Reading",
        passage:{ title:"My Friend Mali", text:"Mali is a little girl. She has a brown dog named Coco. Every morning Mali and Coco run in the park, and then they eat breakfast together. Mali likes apples, but Coco likes meat. In the evening they play with a red ball under the big tree." },
        stem:"Where do they play in the evening?",
        opts:{A:"on the bed", B:"in the park", C:"at the zoo", D:"under the big tree"}, ans:"D" },
    ]
  },

  /* ============ SET 2 ============ */
  {
    id: "asmo-en-l1-p02",
    title: "ASMO English L1 — ชุดที่ 2",
    level: "A1",
    questions: [
      // -- Vocabulary --
      { n:1, cat:"Vocabulary", stem:"Which word means <u>a baby cat</u>?",
        opts:{A:"puppy", B:"lamb", C:"kitten", D:"foal"}, ans:"C" },
      { n:2, cat:"Vocabulary", stem:"You use your <u>nose</u> to …",
        opts:{A:"taste", B:"smell", C:"jump", D:"clap"}, ans:"B" },
      { n:3, cat:"Vocabulary", stem:"Which one is a <u>vegetable</u>?",
        opts:{A:"table", B:"pencil", C:"banana", D:"carrot"}, ans:"D" },
      { n:4, cat:"Vocabulary", stem:"We sleep at …",
        opts:{A:"night", B:"lunch", C:"school", D:"noon"}, ans:"A" },
      { n:5, cat:"Vocabulary", stem:"Which animal can <u>fly</u>?",
        opts:{A:"snake", B:"frog", C:"bird", D:"fish"}, ans:"C" },
      // -- Grammar --
      { n:6, cat:"Grammar", stem:"I want ____ orange, please.",
        opts:{A:"an", B:"a", C:"two the", D:"are"}, ans:"A" },
      { n:7, cat:"Grammar", stem:"He rides ____ bike to school.",
        opts:{A:"an", B:"a", C:"is", D:"two a"}, ans:"B" },
      { n:8, cat:"Grammar", stem:"The ball is ____ the table. (อยู่ใต้โต๊ะ)",
        opts:{A:"on", B:"in", C:"of", D:"under"}, ans:"D" },
      { n:9, cat:"Grammar", stem:"The fish are ____ the water. (อยู่ในน้ำ)",
        opts:{A:"on", B:"under", C:"in", D:"of"}, ans:"C" },
      { n:10, cat:"Grammar", stem:"____ are my new shoes. (รองเท้าที่อยู่ใกล้ตัวเรา — มีหลายข้าง)",
        opts:{A:"These", B:"This", C:"That", D:"Is"}, ans:"A" },
      { n:11, cat:"Grammar", stem:"My sister ____ TV every evening.",
        opts:{A:"watch", B:"watches", C:"watching", D:"are watch"}, ans:"B" },
      { n:12, cat:"Grammar", stem:"____ is a dog over there. (ชี้สิ่งที่อยู่ไกลตัว)",
        opts:{A:"These", B:"Those", C:"That", D:"Are"}, ans:"C" },
      // -- Synonyms & Antonyms --
      { n:13, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>small</b>?",
        opts:{A:"long", B:"wide", C:"little", D:"heavy"}, ans:"C" },
      { n:14, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>pretty</b>?",
        opts:{A:"beautiful", B:"ugly", C:"dirty", D:"loud"}, ans:"A" },
      { n:15, cat:"Synonyms & Antonyms", stem:"Which word means the <u>same</u> as <b>begin</b>?",
        opts:{A:"stop", B:"start", C:"close", D:"sleep"}, ans:"B" },
      { n:16, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>open</b>?",
        opts:{A:"big", B:"high", C:"wet", D:"close"}, ans:"D" },
      { n:17, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>old</b>?",
        opts:{A:"tall", B:"new", C:"slow", D:"dark"}, ans:"B" },
      { n:18, cat:"Synonyms & Antonyms", stem:"What is the <u>opposite</u> of <b>full</b>?",
        opts:{A:"empty", B:"clean", C:"short", D:"soft"}, ans:"A" },
      // -- Spelling --
      { n:19, cat:"Spelling", stem:"mon _ ey &nbsp;&nbsp;(ลิง)",
        opts:{A:"a", B:"k", C:"g", D:"t"}, ans:"B" },
      { n:20, cat:"Spelling", stem:"um _ rella &nbsp;&nbsp;(ร่ม)",
        opts:{A:"p", B:"n", C:"b", D:"d"}, ans:"C" },
      { n:21, cat:"Spelling", stem:"birth _ ay &nbsp;&nbsp;(วันเกิด)",
        opts:{A:"d", B:"t", C:"b", D:"g"}, ans:"A" },
      { n:22, cat:"Spelling", stem:"wind _ w &nbsp;&nbsp;(หน้าต่าง)",
        opts:{A:"a", B:"o", C:"u", D:"e"}, ans:"B" },
      { n:23, cat:"Spelling", stem:"gar _ en &nbsp;&nbsp;(สวน)",
        opts:{A:"t", B:"b", C:"d", D:"p"}, ans:"C" },
      { n:24, cat:"Spelling", stem:"chic _ en &nbsp;&nbsp;(ไก่)",
        opts:{A:"k", B:"g", C:"c", D:"q"}, ans:"A" },
      // -- Reading --
      { n:25, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"When does Tom go to the market?",
        opts:{A:"on Monday", B:"on Sunday", C:"at night", D:"on Friday"}, ans:"B" },
      { n:26, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"Who goes with Tom?",
        opts:{A:"his teacher", B:"his dog", C:"his mother", D:"his friend"}, ans:"C" },
      { n:27, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"How many bananas do they buy?",
        opts:{A:"three", B:"one", C:"two", D:"five"}, ans:"A" },
      { n:28, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"What does Tom like?",
        opts:{A:"the vegetables", B:"the bread", C:"the rice", D:"the fish"}, ans:"D" },
      { n:29, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"What is the weather like at the end?",
        opts:{A:"sunny", B:"rainy", C:"snowy", D:"windy"}, ans:"B" },
      { n:30, cat:"Reading",
        passage:{ title:"Tom Goes to the Market", text:"Tom is a happy boy. On Sunday he goes to the market with his mother. They buy three yellow bananas and one big fish. Tom likes the fish, but his mother likes the green vegetables. It starts to rain, so they open a blue umbrella and walk home together." },
        stem:"What color is the umbrella?",
        opts:{A:"yellow", B:"green", C:"blue", D:"red"}, ans:"C" },
    ]
  },

  /* ============ เพิ่มชุดใหม่ที่นี่ ↓ (ก๊อปบล็อกด้านบนมาวาง แก้ id/title/questions) ============ */

];
