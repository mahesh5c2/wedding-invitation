/* =====================================================
   WEDDING INVITATION — Configuration & Behaviour
   EDIT EVERYTHING IN "WEDDING_CONFIG" BELOW.
   You should not need to touch any other file for
   basic wedding information changes.
===================================================== */

const WEDDING_CONFIG = {
  // ---- Core names (usually kept the same across languages) ----
  groomName: "Pathange Yashwanth Kumar",
  brideName: "Musale Naga Jyoshna Priya",
  groomParents: "Mr. Pathange Hemanth Rao & Mrs. Pathange Jaya Bai",
  brideParents: "Mr. Musale Ravi Prasad & Mrs. Musale Roopa Bai",

  // ---- Wedding date/time (used for countdown — ISO format) ----
  weddingDateISO: "2026-12-19T10:30:00+05:30",
  weddingDateDisplay: "19th December 2026",

  // ---- Translatable fields: fill in "te" and "kn" too. ----
  // Any field below can be either a plain string (shown in every language)
  // or an object like { en: "...", te: "...", kn: "..." } to translate it.
  weddingTime: { en: "10:30 AM (Muhurtham)", te: "ఉదయం 10:30 (ముహూర్తం)", kn: "ಬೆಳಿಗ್ಗೆ 10:30 (ಮುಹೂರ್ತ)", hi: "सुबह 10:30 बजे (मुहूर्त)" },
  weddingVenue: { en: "Bhavasaar Kshatriya Kalyana Mandapam", te: "భవసార్ క్షత్రియ కళ్యాణ మండపం", kn: "ಭವಸಾರ್ ಕ್ಷತ್ರಿಯ ಕಲ್ಯಾಣ ಮಂಟಪ", hi: "भवसार क्षत्रिय कल्याण मंडपम" },
  weddingAddress: { en: "11/72, Main Bazar, Jammalamadugu, Andhra Pradesh 516434", te: "11/72, మెయిన్ బజార్, జమ్మలమడుగు, ఆంధ్రప్రదేశ్ 516434", kn: "11/72, ಮೈನ್ ಬಜಾರ್, ಜಮ್ಮಲಮಡುಗು, ಆಂಧ್ರ ಪ್ರದೇಶ 516434", hi: "11/72, मेन बाजार, जम्मलमडुगु, आंध्र प्रदेश 516434" },
  googleMapsLink: "https://maps.app.goo.gl/CrYvFNVF16bztPZLA",

  // ---- Family ----
  fatherName: "Mr. Pathange Hemanth Rao",
  motherName: "Mrs. Pathange Jaya Bai",
  familySurname: "Pathange",
  grandfatherName: "Pathange Balakrishna Rao",
  grandmotherName: "Pathange Anusuya Bai",
  uncleName: "Naresh",
  auntyName: "Aruna",

  // Add or remove siblings freely. "role" is optional and gets translated
  // automatically if you give it an {en, te, kn, hi} object like below.
  siblings: [
    {
      name: "Mahesh",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-brother.jpg",
    },
    {
      name: "Mani Prasad",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-2.jpg",
    },
    {
      name: "Sandeep",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-3.jpg",
    },
    {
      name: "Pranav",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-4.jpg",
    },
    {
      name: "Nikitha",
      role: { en: "Sister of the Groom", te: "వరుని సోదరి", kn: "ವರನ ಸಹೋದರಿ", hi: "दूल्हे की बहन" },
      photo: "assets/images/sibling-5.jpg",
    },
    {
      name: "Sheena",
      role: { en: "Sister of the Groom", te: "వరుని సోదరి", kn: "ವರನ ಸಹೋದರಿ", hi: "दूल्हे की बहन" },
      photo: "assets/images/sibling-6.jpg",
    },
    {
      name: "Omkar",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-7.jpg",
    },
    {
      name: "Pavan",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-8.jpg",
    },
    {
      name: "Shanmuka",
      role: { en: "Brother of the Groom", te: "వరుని సోదరుడు", kn: "ವರನ ಸಹೋದರ", hi: "दूल्हे का भाई" },
      photo: "assets/images/sibling-9.jpg",
    },
    {
      name: "Naga Lakshmi",
      role: { en: "Sister of the Groom", te: "వరుని సోదరి", kn: "ವರನ ಸಹೋದರಿ", hi: "दूल्हे की बहन" },
      photo: "assets/images/sibling-10.jpg",
    },
    {
      name: "Vaishali",
      role: { en: "Sister of the Groom", te: "వరుని సోదరి", kn: "ವರನ ಸಹೋದರಿ", hi: "दूल्हे की बहन" },
      photo: "assets/images/sibling-11.jpg",
    },
    {
      name: "Vaishnavi",
      role: { en: "Sister of the Groom", te: "వరుని సోదరి", kn: "ವರನ ಸಹೋದರಿ", hi: "दूल्हे की बहन" },
      photo: "assets/images/sibling-12.jpg",
    },
  ],

  // Groom's uncle & aunty (shown as an extra frame in the Family section)
  uncleAuntyPhotoUncle: "assets/images/uncle.jpg",
  uncleAuntyPhotoAunty: "assets/images/aunty.jpg",

  // Extra Pathange family members (shown under the "Pathange Family" heading).
  // Add, remove, or rename freely — just give each a name and a photo path.
  extraFamily: [
    { name: "Family Member 1", photo: "assets/images/family-1.jpg" },
    { name: "Family Member 2", photo: "assets/images/family-2.jpg" },
  ],

  // A single group photo of all siblings together (used in the Family section)
  siblingsGroupPhoto: "assets/images/siblings-group.jpg",

  // ---- Our Journey (couple story) — translate each paragraph ----
  storyOne: {
    en: "A chance introduction through family friends blossomed into quiet conversations, shared laughter, and the gentle realisation that they had found something rare.",
    te: "కుటుంబ స్నేహితుల ద్వారా జరిగిన పరిచయం నెమ్మదిగా సంభాషణలుగా, నవ్వులుగా మారి, తమకు ప్రత్యేకమైనది దొరికిందని ఇద్దరూ మెల్లగా గ్రహించారు.",
    kn: "ಕುಟುಂಬದ ಸ್ನೇಹಿತರ ಮೂಲಕ ಆಕಸ್ಮಿಕವಾಗಿ ಪರಿಚಯವಾಗಿ, ನಿಧಾನವಾಗಿ ಮಾತುಕತೆ ಮತ್ತು ನಗುವಿನೊಂದಿಗೆ ಬೆಳೆದು, ತಮಗೆ ವಿಶೇಷವಾದುದೊಂದು ಸಿಕ್ಕಿದೆ ಎಂದು ಇಬ್ಬರೂ ಅರಿತುಕೊಂಡರು.",
    hi: "पारिवारिक मित्रों के माध्यम से हुई एक साधारण मुलाकात धीरे-धीरे शांत बातचीत और साझा हंसी में बदल गई, और दोनों को एहसास हुआ कि उन्हें कुछ खास मिल गया है।",
  },
  storyTwo: {
    en: "With elders' blessings and hearts full of joy, both families came together — and what began as two stories quietly became one.",
    te: "పెద్దల ఆశీస్సులతో, ఆనందంతో నిండిన హృదయాలతో రెండు కుటుంబాలు ఒక్కటయ్యాయి — రెండు కథలుగా మొదలైనది నెమ్మదిగా ఒకే కథగా మారింది.",
    kn: "ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಮತ್ತು ಸಂತೋಷದಿಂದ ತುಂಬಿದ ಹೃದಯಗಳೊಂದಿಗೆ ಎರಡು ಕುಟುಂಬಗಳು ಒಂದಾದವು — ಎರಡು ಕಥೆಗಳಾಗಿ ಆರಂಭವಾದದ್ದು ನಿಧಾನವಾಗಿ ಒಂದೇ ಕಥೆಯಾಯಿತು.",
    hi: "बड़ों के आशीर्वाद और खुशी से भरे दिलों के साथ, दोनों परिवार एक हो गए — और जो दो अलग कहानियों की तरह शुरू हुआ था, वह धीरे-धीरे एक ही कहानी बन गया।",
  },
  storyThree: {
    en: "Now, surrounded by the people they love most, they begin the most beautiful chapter of their story together.",
    te: "ఇప్పుడు, తాము అత్యంత ప్రేమించే వారందరి మధ్య, వారు తమ కథలో అత్యంత అందమైన అధ్యాయాన్ని కలిసి ప్రారంభిస్తున్నారు.",
    kn: "ಈಗ, ಅವರು ಅತ್ಯಂತ ಪ್ರೀತಿಸುವವರ ನಡುವೆ, ತಮ್ಮ ಕಥೆಯ ಅತ್ಯಂತ ಸುಂದರವಾದ ಅಧ್ಯಾಯವನ್ನು ಒಟ್ಟಿಗೆ ಆರಂಭಿಸುತ್ತಿದ್ದಾರೆ.",
    hi: "अब, अपने सबसे प्रिय लोगों से घिरे हुए, वे अपनी कहानी का सबसे खूबसूरत अध्याय एक साथ शुरू करते हैं।",
  },

  // ---- Events — add / remove / reorder freely. Translate name/venue/description. ----
  events: [
    {
      name: { en: "Engagement", te: "నిశ్చితార్థం", kn: "ನಿಶ್ಚಿತಾರ್ಥ", hi: "सगाई" },
      date: "10 December 2026", time: "6:00 PM",
      venue: { en: "Pathange Residence, Jammalamadugu", te: "పతంగె నివాసం, జమ్మలమడుగు", kn: "ಪತಂಗೆ ನಿವಾಸ, ಜಮ್ಮಲಮಡುಗು", hi: "पतंगे निवास, जम्मलमडुगु" },
      description: { en: "An intimate ceremony where the families exchange rings and blessings.", te: "కుటుంబాలు ఉంగరాలు, ఆశీస్సులు మార్చుకునే ఆత్మీయ కార్యక్రమం.", kn: "ಕುಟುಂಬಗಳು ಉಂಗುರ ಮತ್ತು ಆಶೀರ್ವಾದಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುವ ಆತ್ಮೀಯ ಕಾರ್ಯಕ್ರಮ.", hi: "एक आत्मीय समारोह जहाँ परिवार अंगूठियां और आशीर्वाद का आदान-प्रदान करते हैं।" },
      photo: "assets/images/event-engagement.jpg",
    },
    {
      name: { en: "Haldi", te: "హల్దీ", kn: "ಅರಿಶಿನ (ಹಲ್ದಿ)", hi: "हल्दी" },
      date: "11 December 2026", time: "9:00 AM",
      venue: { en: "Pathange Residence, Jammalamadugu", te: "పతంగె నివాసం, జమ్మలమడుగు", kn: "ಪತಂಗೆ ನಿವಾಸ, ಜಮ್ಮಲಮಡುಗು", hi: "पतंगे निवास, जम्मलमडुगु" },
      description: { en: "A joyful turmeric ceremony filled with music, laughter and blessings.", te: "సంగీతం, నవ్వులు, ఆశీస్సులతో నిండిన సంతోషకరమైన పసుపు వేడుక.", kn: "ಸಂಗೀತ, ನಗು ಮತ್ತು ಆಶೀರ್ವಾದಗಳಿಂದ ತುಂಬಿದ ಸಂತೋಷದ ಅರಿಶಿನ ಕಾರ್ಯಕ್ರಮ.", hi: "संगीत, हंसी और आशीर्वाद से भरा एक आनंदमय हल्दी समारोह।" },
      photo: "assets/images/event-haldi.jpg",
    },
    {
      name: { en: "Wedding", te: "వివాహం", kn: "ವಿವಾಹ", hi: "विवाह" },
      date: "19 December 2026", time: "10:30 AM",
      venue: { en: "Bhavasaar Kshatriya Kalyana Mandapam", te: "భవసార్ క్షత్రియ కళ్యాణ మండపం", kn: "ಭವಸಾರ್ ಕ್ಷತ್ರಿಯ ಕಲ್ಯಾಣ ಮಂಟಪ", hi: "भवसार क्षत्रिय कल्याण मंडपम" },
      description: { en: "The sacred wedding ceremony uniting Yashwanth & Jyoshna Priya in the presence of family and Almighty's blessings.", te: "కుటుంబం, భగవంతుడి ఆశీస్సుల సమక్షంలో యశ్వంత్, జ్యోష్న ప్రియ ఏకమయ్యే పవిత్ర వివాహ కార్యక్రమం.", kn: "ಕುಟುಂಬ ಮತ್ತು ದೇವರ ಆಶೀರ್ವಾದದ ಸಮ್ಮುಖದಲ್ಲಿ ಯಶ್ವಂತ್ ಮತ್ತು ಜ್ಯೋಷ್ನ ಪ್ರಿಯಾ ಒಂದಾಗುವ ಪವಿತ್ರ ವಿವಾಹ ಕಾರ್ಯಕ್ರಮ.", hi: "परिवार और ईश्वर के आशीर्वाद की उपस्थिति में यशवंत और ज्योष्ना प्रिया को एक करने वाला पवित्र विवाह समारोह।" },
      photo: "assets/images/event-wedding.jpg",
    },
  ],

  // ---- Gallery — add as many as you like ----
  gallery: [
    { src: "assets/images/gallery-1.jpg", alt: "Couple photo 1" },
    { src: "assets/images/gallery-2.jpg", alt: "Couple photo 2" },
    { src: "assets/images/gallery-3.jpg", alt: "Couple photo 3" },
    { src: "assets/images/gallery-4.jpg", alt: "Family photo" },
    { src: "assets/images/gallery-5.jpg", alt: "Engagement photo" },
    { src: "assets/images/gallery-6.jpg", alt: "Pre-wedding photo" },
    { src: "assets/images/gallery-7.jpg", alt: "Family group photo" },
    { src: "assets/images/gallery-8.jpg", alt: "Family group photo" },

  ],

  // ---- Contact ----
  contactName: "Mahesh",
  contactPhoneDisplay: "+91 7995308828",
  whatsappNumber: "7995308828", // country code + number, no + or spaces
  whatsappMessage: "Hello, I would like to know more about the wedding ceremony.",
  // Used only inside the "Send Wishes" button link — never displayed as text anywhere on the page.
  wishesWhatsappNumber: "918121914161",
};

// Resolves a config field that may be a plain string or a {en, te, kn} object
// into the current language's text (falling back to English).
function t(field) {
  if (field && typeof field === "object") {
    return field[currentLang] || field.en || "";
  }
  return field;
}

/* ===================== TRANSLATIONS ===================== */
/* Edit or add languages here. Add a new key to each language object,
   then set data-i18n="yourKey" on the matching element in index.html. */
const TRANSLATIONS = {
  en: {
    navHome: "Home", navCouple: "Couple", navEvents: "Events", navWedding: "Wedding",
    navFamily: "Family", navGallery: "Gallery", navRsvp: "RSVP",
    heroBlessing: "With the Divine Blessings of Lord Venkateshwara",
    heroEyebrow: "The Wedding Of",
    coupleKicker: "Together with their families",
    coupleTitle: "A Union Written in the Stars",
    coupleTagline: "Two Hearts \u2022 One Beautiful Journey",
    inviteKicker: "With the blessings of the Almighty and the love of our families",
    countdownKicker: "Wedding Day",
    countdownLead: "Counting down to the beautiful beginning\u2026",
    labelDays: "Days", labelHours: "Hours", labelMinutes: "Minutes", labelSeconds: "Seconds",
    countdownToday: "Today is the Day! \u2764",
    eventsKicker: "A Celebration in Many Chapters",
    eventsTitle: "Our Wedding Celebrations",
    ceremonyKicker: "The Wedding Ceremony",
    labelDate: "Date", labelTime: "Time", labelVenue: "Venue", labelAddress: "Address",
    viewLocation: "View Location",
    familyKicker: "With Love, From Our Family",
    familyTitle: "Our family warmly welcomes you to share in this joyous celebration",
    familyTagline: "With the blessings, love and happiness of our beloved parents",
    galleryKicker: "Beautiful Memories", galleryTitle: "Beautiful Memories",
    storyKicker: "Our Journey", storyTitle: "Our Journey",
    storyH1: "Where It All Began", storyH2: "Two Families Became One", storyH3: "And Now, Forever Begins",
    finalTag: "A Beautiful Beginning to Forever",
    rsvpKicker: "We Would Love to Celebrate With You",
    rsvpTitle: "We Would Love to Celebrate With You",
    formName: "Name", formGuests: "Number of Guests", formMessage: "Message",
    confirmBtn: "Confirm Your Presence",
    sendWishesBtn: "Send Wishes",
    rsvpNote: "Can't wait to celebrate with you!",
    contactKicker: "For any assistance, please contact",
    whatsappBtn: "Message on WhatsApp",
    footerThanks: "Thank you for being a part of our happiness.",
    invitePart1: "We joyfully invite you and your family to celebrate the wedding ceremony of our beloved",
    andWord: "and",
    invitePart2: "and bless the couple as they begin their beautiful journey together.",
    sonOf: "Son of",
    daughterOf: "Daughter of",
    blessingPart1: "May Lord Venkateshwara bless",
    blessingPart2: "with a lifetime filled with love, happiness, prosperity and togetherness.",
    blessingCaption: "Blessing their beautiful beginning",
    grandparentsCaption: "With the blessings of our grandparents",
    familyMsg1: "From our home to yours, we warmly welcome you to celebrate this precious beginning with us.",
    familyMsg2: "Your presence, blessings and love will make this special occasion even more meaningful.",
    withLove: "With love,",
    familyWord: "Family",
    siblingsGroupCaption: "Together, always",
    relativesInviteTitle: "To Our Beloved Relatives",
    relativesInviteText: "With hearts full of joy, we warmly invite each one of you — our dear relatives near and far — to bless this couple with your presence, love and good wishes.",
    uncleAuntyCaption: "Uncle & Aunty of the Groom",
    pathangeFamilyHeading: "Pathange Family",
    eldersHeading: "With the Blessings of Our Elders",
    slideshowKicker: "Relive Every Moment",
    slideshowTitle: "Our Journey in Pictures",
    introEyebrow: "You're Invited",
    introOpenBtn: "Open Invitation",
  },
  te: {
    navHome: "\u0C39\u0C4B\u0C02", navCouple: "\u0C1C\u0C4B\u0C21\u0C3F", navEvents: "\u0C15\u0C3E\u0C30\u0C4D\u0C2F\u0C15\u0C4D\u0C30\u0C2E\u0C3E\u0C32\u0C41", navWedding: "\u0C35\u0C3F\u0C35\u0C3E\u0C39\u0C02",
    navFamily: "\u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C\u0C02", navGallery: "\u0C17\u0C3E\u0C32\u0C30\u0C40", navRsvp: "RSVP",
    heroBlessing: "\u0C36\u0C4D\u0C30\u0C40 \u0C35\u0C46\u0C02\u0C15\u0C1F\u0C47\u0C36\u0C4D\u0C35\u0C30 \u0C38\u0C4D\u0C35\u0C3E\u0C2E\u0C3F \u0C06\u0C36\u0C40\u0C30\u0C4D\u0C35\u0C3E\u0C26\u0C02\u0C24\u0C4B",
    heroEyebrow: "\u0C35\u0C3F\u0C35\u0C3E\u0C39 \u0C35\u0C47\u0C21\u0C41\u0C15",
    coupleKicker: "\u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C \u0C38\u0C2D\u0C4D\u0C2F\u0C41\u0C32\u0C24\u0C4B \u0C15\u0C32\u0C3F\u0C38\u0C3F",
    coupleTitle: "\u0C28\u0C15\u0C4D\u0C37\u0C24\u0C4D\u0C30\u0C3E\u0C32\u0C4D\u0C32\u0C4B \u0C30\u0C3E\u0C38\u0C3F\u0C28 \u0C2C\u0C02\u0C27\u0C02",
    coupleTagline: "\u0C30\u0C46\u0C02\u0C21\u0C41 \u0C39\u0C33\u0C4D\u0C33\u0C41\u0C32\u0C41 \u2022 \u0C12\u0C15\u0C47 \u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C2A\u0C4D\u0C30\u0C2F\u0C3E\u0C23\u0C02",
    inviteKicker: "\u0C2D\u0C17\u0C35\u0C02\u0C24\u0C41\u0C21\u0C3F \u0C06\u0C36\u0C40\u0C30\u0C4D\u0C35\u0C3E\u0C26\u0C02\u0C24\u0C4B, \u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C\u0C3E\u0C32 \u0C2A\u0C4D\u0C30\u0C47\u0C2E\u0C24\u0C4B",
    countdownKicker: "\u0C35\u0C3F\u0C35\u0C3E\u0C39 \u0C26\u0C3F\u0C28\u0C02",
    countdownLead: "\u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C3E\u0C09\u0C02\u0C1F\u0C4D\u200C\u0C21\u0C4C\u0C28\u0C4D...",
    labelDays: "\u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41", labelHours: "\u0C17\u0C02\u0C1F\u0C32\u0C41", labelMinutes: "\u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32\u0C41", labelSeconds: "\u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C41",
    countdownToday: "\u0C08 \u0C30\u0C4B\u0C1C\u0C47 \u0C06 \u0C36\u0C41\u0C2D \u0C26\u0C3F\u0C28\u0C02! \u2764",
    eventsKicker: "\u0C05\u0C28\u0C47\u0C15 \u0C05\u0C27\u0C4D\u0C2F\u0C3E\u0C2F\u0C3E\u0C32 \u0C09\u0C24\u0C4D\u0C38\u0C35\u0C02",
    eventsTitle: "\u0C2E\u0C3E \u0C35\u0C3F\u0C35\u0C3E\u0C39 \u0C35\u0C46\u0C22\u0C41\u0C15\u0C33\u0C41",
    ceremonyKicker: "\u0C35\u0C3F\u0C35\u0C3E\u0C39 \u0C15\u0C3E\u0C30\u0C4D\u0C2F\u0C15\u0C4D\u0C30\u0C2E\u0C02",
    labelDate: "\u0C24\u0C47\u0C26\u0C40", labelTime: "\u0C38\u0C2E\u0C2F\u0C02", labelVenue: "\u0C38\u0C4D\u0C25\u0C32\u0C02", labelAddress: "\u0C1A\u0C3F\u0C30\u0C41\u0C28\u0C3E\u0C2E\u0C3E",
    viewLocation: "\u0C38\u0C4D\u0C25\u0C32\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F",
    familyKicker: "\u0C2E\u0C3E \u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C\u0C02 \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C2A\u0C4D\u0C30\u0C47\u0C2E\u0C24\u0C4B",
    familyTitle: "\u0C08 \u0C06\u0C28\u0C02\u0C26 \u0C09\u0C24\u0C4D\u0C38\u0C35\u0C02\u0C32\u0C4B \u0C2A\u0C3E\u0C32\u0C4D\u0C17\u0C4A\u0C28\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C3E \u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C\u0C02 \u0C06\u0C24\u0C4D\u0C2E\u0C40\u0C2F\u0C02\u0C17\u0C3E \u0C06\u0C39\u0C4D\u0C35\u0C3E\u0C28\u0C3F\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F",
    familyTagline: "\u0C2E\u0C3E \u0C2A\u0C4D\u0C30\u0C3F\u0C2F\u0C2E\u0C48\u0C28 \u0C24\u0C32\u0C4D\u0C32\u0C3F\u0C26\u0C02\u0C21\u0C4D\u0C30\u0C41\u0C32 \u0C06\u0C36\u0C40\u0C38\u0C4D\u0C38\u0C41\u0C32\u0C24\u0C4B",
    galleryKicker: "\u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C1E\u0C3E\u0C2A\u0C15\u0C3E\u0C32\u0C41", galleryTitle: "\u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C1E\u0C3E\u0C2A\u0C15\u0C3E\u0C32\u0C41",
    storyKicker: "\u0C2E\u0C3E \u0C2A\u0C4D\u0C30\u0C2F\u0C3E\u0C23\u0C02", storyTitle: "\u0C2E\u0C3E \u0C2A\u0C4D\u0C30\u0C2F\u0C3E\u0C23\u0C02",
    storyH1: "\u0C05\u0C02\u0C24\u0C4B \u0C2E\u0C4A\u0C26\u0C32\u0C48\u0C02\u0C26\u0C3F", storyH2: "\u0C30\u0C46\u0C02\u0C21\u0C41 \u0C15\u0C41\u0C1F\u0C41\u0C02\u0C2C\u0C3E\u0C32\u0C41 \u0C12\u0C15\u0C1F\u0C3F\u0C17\u0C3E \u0C2E\u0C3E\u0C30\u0C3E\u0C2F\u0C3F", storyH3: "\u0C07\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C41 \u0C2E\u0C3F\u0C17\u0C3F\u0C32\u0C41\u0C28\u0C41 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C02",
    finalTag: "\u0C36\u0C3E\u0C36\u0C4D\u0C35\u0C24\u0C02\u0C17\u0C3E \u0C12\u0C15 \u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C02",
    rsvpKicker: "\u0C2E\u0C40\u0C24\u0C4B \u0C15\u0C32\u0C3F\u0C38\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C09\u0C02\u0C26\u0C3F",
    rsvpTitle: "\u0C2E\u0C40\u0C24\u0C4B \u0C15\u0C32\u0C3F\u0C38\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C09\u0C02\u0C26\u0C3F",
    formName: "\u0C2A\u0C47\u0C30\u0C41", formGuests: "\u0C05\u0C24\u0C3F\u0C25\u0C41\u0C32 \u0C38\u0C02\u0C16\u0C4D\u0C2F", formMessage: "\u0C38\u0C02\u0C26\u0C47\u0C36\u0C02",
    confirmBtn: "\u0C39\u0C3E\u0C1C\u0C30\u0C41 \u0C28\u0C3F\u0C30\u0C4D\u0C27\u0C3E\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    sendWishesBtn: "శుభాకాంక్షలు పంపండి",
    rsvpNote: "\u0C2E\u0C40\u0C24\u0C4B \u0C15\u0C32\u0C3F\u0C38\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41\u0C15\u0C4B\u0C35\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C0E\u0C26\u0C41\u0C30\u0C41\u0C1A\u0C42\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C02!",
    contactKicker: "\u0C0F\u0C26\u0C48\u0C28\u0C3E \u0C38\u0C39\u0C3E\u0C2F\u0C02 \u0C15\u0C4B\u0C38\u0C02, \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C38\u0C02\u0C2A\u0C4D\u0C30\u0C26\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    whatsappBtn: "WhatsApp \u0C32\u0C4B \u0C38\u0C02\u0C26\u0C47\u0C36\u0C02 \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F",
    footerThanks: "\u0C2E\u0C3E \u0C06\u0C28\u0C02\u0C26\u0C02\u0C32\u0C4B \u0C2D\u0C3E\u0C17\u0C38\u0C4D\u0C35\u0C3E\u0C2E\u0C4D\u0C2F\u0C41\u0C32\u0C48\u0C28\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C27\u0C28\u0C4D\u0C2F\u0C35\u0C3E\u0C26\u0C3E\u0C32\u0C41.",
    invitePart1: "మా ప్రియమైన",
    andWord: "మరియు",
    invitePart2: "వివాహ వేడుకను జరుపుకోవడానికి, ఈ జంటను ఆశీర్వదించడానికి మిమ్మల్ని, మీ కుటుంబాన్ని ఆప్యాయంగా ఆహ్వానిస్తున్నాము.",
    sonOf: "కుమారుడు",
    daughterOf: "కుమార్తె",
    blessingPart1: "శ్రీ వెంకటేశ్వర స్వామి",
    blessingPart2: "దంపతులను ప్రేమ, ఆనందం, సౌభాగ్యంతో నిండిన జీవితంతో ఆశీర్వదించాలని కోరుకుంటున్నాము.",
    blessingCaption: "నూతన దంపతులకు ఆశీర్వాదం",
    grandparentsCaption: "మా తాతయ్య, నాయనమ్మల ఆశీస్సులతో",
    familyMsg1: "మా ఇంటి నుండి మీ ఇంటికి, ఈ అపురూపమైన వేడుకలో పాల్గొనమని మిమ్మల్ని ఆప్యాయంగా ఆహ్వానిస్తున్నాము.",
    familyMsg2: "మీ రాక, ఆశీస్సులు, ప్రేమ ఈ వేడుకను మరింత అర్థవంతం చేస్తాయి.",
    withLove: "ప్రేమతో,",
    familyWord: "కుటుంబం",
    siblingsGroupCaption: "ఎప్పటికీ కలిసి",
    relativesInviteTitle: "మా ప్రియమైన బంధువులకు",
    relativesInviteText: "ఆనందంతో నిండిన హృదయాలతో, దగ్గరి, దూరపు బంధువులందరినీ ఈ దంపతులను ఆశీర్వదించమని ఆప్యాయంగా ఆహ్వానిస్తున్నాము.",
    uncleAuntyCaption: "వరుని మేనమామ & అత్త",
    pathangeFamilyHeading: "పతంగె కుటుంబం",
    eldersHeading: "మా పెద్దల ఆశీస్సులతో",
    introEyebrow: "మీకు ఆహ్వానం",
    introOpenBtn: "ఆహ్వానాన్ని తెరవండి",
    slideshowKicker: "ప్రతి క్షణాన్ని మళ్ళీ అనుభవించండి",
    slideshowTitle: "చిత్రాలలో మా ప్రయాణం",
  },
  kn: {
    navHome: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", navCouple: "\u0CA6\u0CAE\u0CCD\u0CAA\u0CA4\u0CBF", navEvents: "\u0C95\u0CBE\u0CB0\u0CCD\u0CAF\u0C95\u0CCD\u0CB0\u0CAE\u0C97\u0CB3\u0CC1", navWedding: "\u0CB5\u0CBF\u0CB5\u0CBE\u0CB9",
    navFamily: "\u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC", navGallery: "\u0C97\u0CCD\u0CAF\u0CBE\u0CB2\u0CB0\u0CBF", navRsvp: "RSVP",
    heroBlessing: "\u0CB6\u0CCD\u0CB0\u0CC0 \u0CB5\u0CC6\u0C82\u0C95\u0C9F\u0CC7\u0CB6\u0CCD\u0CB5\u0CB0 \u0CB8\u0CCD\u0CB5\u0CBE\u0CAE\u0CBF\u0CAF \u0CA6\u0CBF\u0CB5\u0CCD\u0CAF \u0C86\u0CB6\u0CC0\u0CB0\u0CCD\u0CB5\u0CBE\u0CA6\u0CA6\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    heroEyebrow: "\u0CB5\u0CBF\u0CB5\u0CBE\u0CB9\u0CB5\u0CC1",
    coupleKicker: "\u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC\u0CB8\u0CA6\u0CB8\u0CCD\u0CAF\u0CB0\u0CCA\u0C82\u0CA6\u0C87\u0C97\u0CC6",
    coupleTitle: "\u0CA8\u0C95\u0CCD\u0CB7\u0CA4\u0CCD\u0CB0\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF \u0CB0\u0CC1\u0CAA\u0CC1\u0C97\u0CCA\u0C82\u0CA1 \u0CAC\u0CBE\u0C82\u0CA7",
    coupleTagline: "\u0CB0\u0CC6\u0C82\u0CA1\u0CC1 \u0CB9\u0CC3\u0CA6\u0CAF\u0C97\u0CB3\u0CC1 \u2022 \u0C92\u0C82\u0CA6\u0CC1 \u0CB8\u0CC1\u0C82\u0CA6\u0CB0 \u0CAA\u0CCD\u0CB0\u0CAF\u0CBE\u0CA3",
    inviteKicker: "\u0CA6\u0CC7\u0CB5\u0CB0 \u0C86\u0CB6\u0CC0\u0CB0\u0CCD\u0CB5\u0CBE\u0CA6 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC\u0CA6 \u0CAA\u0CCD\u0CB0\u0CC7\u0CAE\u0CA6\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    countdownKicker: "\u0CB5\u0CBF\u0CB5\u0CBE\u0CB9\u0CA6 \u0CA6\u0CBF\u0CA8",
    countdownLead: "\u0CB8\u0CC1\u0C82\u0CA6\u0CB0 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD\u0C95\u0CCD\u0C95\u0CC6 \u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CA3\u0CA8\u0CC6...",
    labelDays: "\u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CC1", labelHours: "\u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1", labelMinutes: "\u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CC1", labelSeconds: "\u0CB8\u0CC6\u0C95\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1",
    countdownToday: "\u0C87\u0C82\u0CA6\u0CC7 \u0C86 \u0CA6\u0CBF\u0CA8! \u2764",
    eventsKicker: "\u0C85\u0CA8\u0CC7\u0C95 \u0C85\u0CA7\u0CCD\u0CAF\u0CBE\u0CAF\u0C97\u0CB3 \u0C89\u0CA4\u0CCD\u0CB8\u0CB5",
    eventsTitle: "\u0CA8\u0CAE\u0CCD\u0CAE \u0CB5\u0CBF\u0CB5\u0CBE\u0CB9 \u0C86\u0C9A\u0CB0\u0CC6\u0C97\u0CB3\u0CC1",
    ceremonyKicker: "\u0CB5\u0CBF\u0CB5\u0CBE\u0CB9 \u0C95\u0CBE\u0CB0\u0CCD\u0CAF\u0C95\u0CCD\u0CB0\u0CAE",
    labelDate: "\u0CA4\u0CBE\u0CB0\u0CC0\u0CA6\u0CC1", labelTime: "\u0CB8\u0CAE\u0CAF", labelVenue: "\u0CB8\u0CCD\u0CA5\u0CB3", labelAddress: "\u0CB5\u0CBF\u0CB3\u0CBE\u0CB8",
    viewLocation: "\u0CB8\u0CCD\u0CA5\u0CB3\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB5\u0CC0\u0C95\u0CCD\u0CB7\u0CBF\u0CB8\u0CBF",
    familyKicker: "\u0CA8\u0CAE\u0CCD\u0CAE \u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC\u0CA6 \u0CAA\u0CCD\u0CB0\u0CC7\u0CAE\u0CB2\u0CBF",
    familyTitle: "\u0C88 \u0CB8\u0C82\u0CA4\u0CCB\u0CB7\u0CA6 \u0C89\u0CA4\u0CCD\u0CB8\u0CB5\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0CAD\u0CBE\u0C97\u0CB5\u0CB9\u0CBF\u0CB8\u0CB2\u0CC1 \u0CA8\u0CAE\u0CCD\u0CAE \u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC \u0CB9\u0CCD\u0CB0\u0CC1\u0CA6\u0CAF\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0C95\u0CB5\u0CBE\u0C97\u0CBF \u0C86\u0CB9\u0CCD\u0CB5\u0CBE\u0CA8\u0CBF\u0CB8\u0CC1\u0CA4\u0CCD\u0CA4\u0CA6\u0CC6",
    familyTagline: "\u0CA8\u0CAE\u0CCD\u0CAE \u0CAA\u0CCD\u0CB0\u0CBF\u0CAF \u0CAA\u0CBE\u0CB2\u0C95\u0CB0 \u0C86\u0CB6\u0CC0\u0CB0\u0CCD\u0CB5\u0CBE\u0CA6\u0CA6\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6",
    galleryKicker: "\u0CB8\u0CC1\u0C82\u0CA6\u0CB0 \u0CA8\u0CC6\u0CA8\u0CAA\u0CC1\u0C97\u0CB3\u0CC1", galleryTitle: "\u0CB8\u0CC1\u0C82\u0CA6\u0CB0 \u0CA8\u0CC6\u0CA8\u0CAA\u0CC1\u0C97\u0CB3\u0CC1",
    storyKicker: "\u0CA8\u0CAE\u0CCD\u0CAE \u0CAA\u0CCD\u0CB0\u0CAF\u0CBE\u0CA3", storyTitle: "\u0CA8\u0CAE\u0CCD\u0CAE \u0CAA\u0CCD\u0CB0\u0CAF\u0CBE\u0CA3",
    storyH1: "\u0C87\u0CB2\u0CCD\u0CB2\u0CBF\u0C82\u0CA6 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD\u0CB5\u0CBE\u0C97\u0CBF\u0CA4\u0CCD\u0CA4\u0CC1", storyH2: "\u0CB0\u0CC6\u0C82\u0CA1\u0CC1 \u0C95\u0CC1\u0C9F\u0CC1\u0C82\u0CAC\u0C97\u0CB3\u0CC1 \u0C92\u0C82\u0CA6\u0CBE\u0C97\u0CBF\u0CB5\u0CC1", storyH3: "\u0C88\u0C97 \u0CB6\u0CBE\u0CB6\u0CCD\u0CB5\u0CA4\u0CB5\u0CBE\u0CA6 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD",
    finalTag: "\u0CB6\u0CBE\u0CB6\u0CCD\u0CB5\u0CA4\u0CB5\u0CBE\u0CA6 \u0CB8\u0CC1\u0C82\u0CA6\u0CB0 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD",
    rsvpKicker: "\u0CA8\u0CBF\u0CAE\u0CCD\u0CAE\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0C82\u0CAD\u0CCD\u0CB0\u0CAE\u0CBF\u0CB8\u0CB2\u0CC1 \u0C87\u0C9A\u0CCD\u0C9B\u0CBF\u0CB8\u0CC1\u0CA4\u0CCD\u0CA4\u0CC7\u0CB5\u0CC6",
    rsvpTitle: "\u0CA8\u0CBF\u0CAE\u0CCD\u0CAE\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0C82\u0CAD\u0CCD\u0CB0\u0CAE\u0CBF\u0CB8\u0CB2\u0CC1 \u0C87\u0C9A\u0CCD\u0C9B\u0CBF\u0CB8\u0CC1\u0CA4\u0CCD\u0CA4\u0CC7\u0CB5\u0CC6",
    formName: "\u0CB9\u0CC6\u0CB8\u0CB0\u0CC1", formGuests: "\u0C85\u0CA4\u0CBF\u0CA5\u0CBF\u0C97\u0CB3 \u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6", formMessage: "\u0CB8\u0C82\u0CA6\u0CC7\u0CB6",
    confirmBtn: "\u0CB9\u0CBE\u0C9C\u0CB0\u0CBE\u0CA4\u0CBF \u0C96\u0C9A\u0CBF\u0CA4\u0CAA\u0CA1\u0CBF\u0CB8\u0CBF",
    sendWishesBtn: "ಶುಭಾಶಯ ಕಳುಹಿಸಿ",
    rsvpNote: "\u0CA8\u0CBF\u0CAE\u0CCD\u0CAE\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0C82\u0CAD\u0CCD\u0CB0\u0CAE\u0CBF\u0CB8\u0CB2\u0CC1 \u0C95\u0CBE\u0CA4\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CB5\u0CC6!",
    contactKicker: "\u0CAF\u0CBE\u0CB5\u0CC1\u0CA6\u0CC7 \u0CB8\u0CB9\u0CBE\u0CAF\u0C95\u0CCD\u0C95\u0CBE\u0C97\u0CBF, \u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CB8\u0C82\u0CAA\u0CB0\u0CCD\u0C95\u0CBF\u0CB8\u0CBF",
    whatsappBtn: "WhatsApp\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF \u0CB8\u0C82\u0CA6\u0CC7\u0CB6 \u0C95\u0CB3\u0CC1\u0CB9\u0CBF\u0CB8\u0CBF",
    footerThanks: "\u0CA8\u0CAE\u0CCD\u0CAE \u0CB8\u0C82\u0CA4\u0CCB\u0CB7\u0CA6 \u0CAD\u0CBE\u0C97\u0CB5\u0CBE\u0C97\u0CBF\u0CB0\u0CC1\u0CB5\u0CC1\u0CA6\u0C95\u0CCD\u0C95\u0CC6 \u0CA7\u0CA8\u0CCD\u0CAF\u0CB5\u0CBE\u0CA6\u0C97\u0CB3\u0CC1.",
    invitePart1: "ನಮ್ಮ ಪ್ರೀತಿಯ",
    andWord: "ಮತ್ತು",
    invitePart2: "ಅವರ ವಿವಾಹ ಸಮಾರಂಭದಲ್ಲಿ ಪಾಲ್ಗೊಂಡು ಈ ದಂಪತಿಗಳನ್ನು ಆಶೀರ್ವದಿಸಲು ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    sonOf: "ಪುತ್ರ",
    daughterOf: "ಪುತ್ರಿ",
    blessingPart1: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿ",
    blessingPart2: "ದಂಪತಿಗಳಿಗೆ ಪ್ರೀತಿ, ಸಂತೋಷ ಮತ್ತು ಸಮೃದ್ಧಿಯಿಂದ ಕೂಡಿದ ಜೀವನವನ್ನು ಅನುಗ್ರಹಿಸಲಿ.",
    blessingCaption: "ನೂತನ ದಂಪತಿಗಳಿಗೆ ಆಶೀರ್ವಾದ",
    grandparentsCaption: "ನಮ್ಮ ಅಜ್ಜ-ಅಜ್ಜಿಯ ಆಶೀರ್ವಾದದೊಂದಿಗೆ",
    familyMsg1: "ನಮ್ಮ ಮನೆಯಿಂದ ನಿಮ್ಮ ಮನೆಗೆ, ಈ ಅಮೂಲ್ಯ ಸಮಾರಂಭದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಲು ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    familyMsg2: "ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ, ಆಶೀರ್ವಾದ ಮತ್ತು ಪ್ರೀತಿ ಈ ಸಮಾರಂಭವನ್ನು ಇನ್ನಷ್ಟು ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.",
    withLove: "ಪ್ರೀತಿಯಿಂದ,",
    familyWord: "ಕುಟುಂಬ",
    siblingsGroupCaption: "ಸದಾ ಒಟ್ಟಿಗೆ",
    relativesInviteTitle: "ನಮ್ಮ ಪ್ರೀತಿಯ ಸಂಬಂಧಿಕರಿಗೆ",
    relativesInviteText: "ಸಂತೋಷದಿಂದ ತುಂಬಿದ ಹೃದಯಗಳೊಂದಿಗೆ, ಹತ್ತಿರ ಮತ್ತು ದೂರದ ಎಲ್ಲಾ ಸಂಬಂಧಿಕರನ್ನು ಈ ದಂಪತಿಗಳನ್ನು ಆಶೀರ್ವದಿಸಲು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    uncleAuntyCaption: "ವರನ ಚಿಕ್ಕಪ್ಪ & ಚಿಕ್ಕಮ್ಮ",
    pathangeFamilyHeading: "ಪತಂಗೆ ಕುಟುಂಬ",
    eldersHeading: "ನಮ್ಮ ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ",
    introEyebrow: "ನಿಮಗೆ ಆಹ್ವಾನ",
    introOpenBtn: "ಆಹ್ವಾನವನ್ನು ತೆರೆಯಿರಿ",
    slideshowKicker: "ಪ್ರತಿ ಕ್ಷಣವನ್ನು ಮತ್ತೆ ಅನುಭವಿಸಿ",
    slideshowTitle: "ಚಿತ್ರಗಳಲ್ಲಿ ನಮ್ಮ ಪ್ರಯಾಣ",
  },
  hi: {
    navHome: "होम", navCouple: "जोड़ा", navEvents: "कार्यक्रम", navWedding: "विवाह",
    navFamily: "परिवार", navGallery: "गैलरी", navRsvp: "RSVP",
    heroBlessing: "भगवान वेंकटेश्वर स्वामी के दिव्य आशीर्वाद से",
    heroEyebrow: "विवाह समारोह",
    coupleKicker: "परिवारजनों के साथ",
    coupleTitle: "नियति में लिखा एक बंधन",
    coupleTagline: "दो दिल • एक सुंदर सफर",
    inviteKicker: "ईश्वर के आशीर्वाद और परिवार के प्रेम से",
    countdownKicker: "विवाह का दिन",
    countdownLead: "इस खूबसूरत शुरुआत की उलटी गिनती...",
    labelDays: "दिन", labelHours: "घंटे", labelMinutes: "मिनट", labelSeconds: "सेकंड",
    countdownToday: "आज वही दिन है! \u2764",
    eventsKicker: "अनेक अध्यायों का उत्सव",
    eventsTitle: "हमारे विवाह समारोह",
    ceremonyKicker: "विवाह समारोह",
    labelDate: "तारीख", labelTime: "समय", labelVenue: "स्थान", labelAddress: "पता",
    viewLocation: "स्थान देखें",
    familyKicker: "हमारे परिवार की ओर से प्रेम सहित",
    familyTitle: "हमारा परिवार इस आनंदमय उत्सव में आपका हार्दिक स्वागत करता है",
    familyTagline: "हमारे प्रिय माता-पिता के आशीर्वाद, प्रेम और खुशी के साथ",
    galleryKicker: "खूबसूरत यादें", galleryTitle: "खूबसूरत यादें",
    storyKicker: "हमारा सफर", storyTitle: "हमारा सफर",
    storyH1: "जहाँ से शुरुआत हुई", storyH2: "दो परिवार एक हुए", storyH3: "अब शुरू होता है सदा का साथ",
    finalTag: "एक सुंदर शुरुआत, हमेशा के लिए",
    rsvpKicker: "हमें आपके साथ उत्सव मनाना अच्छा लगेगा",
    rsvpTitle: "हमें आपके साथ उत्सव मनाना अच्छा लगेगा",
    formName: "नाम", formGuests: "मेहमानों की संख्या", formMessage: "संदेश",
    confirmBtn: "उपस्थिति की पुष्टि करें",
    sendWishesBtn: "शुभकामनाएं भेजें",
    rsvpNote: "आपके साथ उत्सव मनाने का इंतज़ार है!",
    contactKicker: "किसी भी सहायता के लिए, कृपया संपर्क करें",
    whatsappBtn: "WhatsApp पर संदेश भेजें",
    footerThanks: "हमारी खुशी का हिस्सा बनने के लिए धन्यवाद।",
    invitePart1: "हम आपको और आपके परिवार को अपने प्रिय",
    andWord: "और",
    invitePart2: "के विवाह समारोह में सम्मिलित होने और इस जोड़े को आशीर्वाद देने के लिए हार्दिक आमंत्रित करते हैं।",
    sonOf: "पुत्र",
    daughterOf: "पुत्री",
    blessingPart1: "भगवान वेंकटेश्वर स्वामी",
    blessingPart2: "इस जोड़े को प्रेम, खुशी और समृद्धि से भरा जीवन प्रदान करें।",
    blessingCaption: "नए जोड़े को आशीर्वाद",
    grandparentsCaption: "हमारे दादा-दादी के आशीर्वाद के साथ",
    familyMsg1: "हमारे घर से आपके घर तक, इस अनमोल शुरुआत का हिस्सा बनने के लिए आपका हार्दिक स्वागत है।",
    familyMsg2: "आपकी उपस्थिति, आशीर्वाद और प्रेम इस अवसर को और भी सार्थक बनाएंगे।",
    withLove: "प्रेम सहित,",
    familyWord: "परिवार",
    siblingsGroupCaption: "सदा साथ",
    relativesInviteTitle: "हमारे प्रिय रिश्तेदारों के लिए",
    relativesInviteText: "खुशी से भरे दिल के साथ, हम अपने सभी दूर और नज़दीकी रिश्तेदारों को इस जोड़े को आशीर्वाद देने के लिए हार्दिक आमंत्रित करते हैं।",
    uncleAuntyCaption: "दूल्हे के चाचा और चाची",
    pathangeFamilyHeading: "पतंगे परिवार",
    eldersHeading: "हमारे बड़ों के आशीर्वाद के साथ",
    introEyebrow: "आप आमंत्रित हैं",
    introOpenBtn: "निमंत्रण खोलें",
    slideshowKicker: "हर पल को फिर से जिएं",
    slideshowTitle: "तस्वीरों में हमारा सफर",
  },
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : "en";
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.setAttribute("lang", currentLang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
  // Re-render dynamic, config-driven content (events, story text, ceremony
  // details) in the newly selected language.
  applyTextConfig();
  buildEvents();
  buildSiblings();
  try { localStorage.setItem("weddingLang", currentLang); } catch (e) { /* storage unavailable */ }
}

function setupLanguageSwitch() {
  const switcher = document.getElementById("lang-switch");
  if (!switcher) return;
  switcher.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (btn) applyLanguage(btn.dataset.lang);
  });

  // A link like index.html?lang=te opens straight into that language —
  // useful for sending different family members their own language's link.
  // It takes priority over anything remembered from a previous visit.
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && TRANSLATIONS[urlLang]) {
    applyLanguage(urlLang);
    return;
  }

  let saved = "en";
  try { saved = localStorage.getItem("weddingLang") || "en"; } catch (e) { /* storage unavailable */ }
  applyLanguage(saved);
}

/* ===================== APPLY CONFIG TO DOM ===================== */
document.addEventListener("DOMContentLoaded", () => {
  const steps = [
    applyTextConfig, buildMandalaPetals, buildHeroPetals, buildGlobalPetals,
    buildEvents, buildSiblings, buildExtraFamily, buildGallery, buildSlideshow, setupNav, setupCountdown,
    setupMapLink, setupLightbox, setupMusic, setupRSVP, setupRevealObserver,
    setupLanguageSwitch, setupIntroOverlay,
  ];
  steps.forEach((fn) => {
    try {
      fn();
    } catch (err) {
      console.error(`Setup step "${fn.name}" failed:`, err);
    }
  });
});

function applyTextConfig() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (WEDDING_CONFIG[key] !== undefined) {
      el.textContent = t(WEDDING_CONFIG[key]);
    }
  });
  const brand = document.querySelector(".nav-brand");
  if (brand) {
    brand.textContent = `${WEDDING_CONFIG.groomName[0]} & ${WEDDING_CONFIG.brideName[0]}`;
  }
  document.title = `Wedding Invitation | ${WEDDING_CONFIG.groomName} & ${WEDDING_CONFIG.brideName}`;
}

/* ===================== DECORATIVE MANDALA ===================== */
function buildMandalaPetals() {
  const group = document.getElementById("mandala-petals");
  if (!group) return;
  const ns = "http://www.w3.org/2000/svg";
  const count = 12;
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const petal = document.createElementNS(ns, "path");
    petal.setAttribute("d", "M100,20 C110,40 110,55 100,60 C90,55 90,40 100,20 Z");
    petal.setAttribute("transform", `rotate(${angle} 100 100)`);
    petal.setAttribute("fill", "none");
    petal.setAttribute("stroke", "currentColor");
    petal.setAttribute("stroke-width", "0.5");
    group.appendChild(petal);
  }
}

/* ===================== HERO FLOATING PETALS ===================== */
function buildHeroPetals() {
  const container = document.querySelector(".hero-petals");
  if (!container) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  const count = 16;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 8 + Math.random() * 8 + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";
    petal.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    petal.style.opacity = 0.4 + Math.random() * 0.4;
    petal.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    container.appendChild(petal);
  }
}

function buildGlobalPetals() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const layer = document.createElement("div");
  layer.className = "global-petals";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const count = 18;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 9 + Math.random() * 9 + "s";
    petal.style.animationDelay = Math.random() * 14 + "s";
    petal.style.setProperty("--drift", (Math.random() * 90 - 45) + "px");
    petal.style.opacity = 0.35 + Math.random() * 0.4;
    petal.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    layer.appendChild(petal);
  }
}

/* ===================== EVENTS ===================== */
function buildEvents() {
  const wrap = document.getElementById("events-timeline");
  if (!wrap) return;
  wrap.innerHTML = "";
  WEDDING_CONFIG.events.forEach((ev, i) => {
    const name = t(ev.name);
    const venue = t(ev.venue);
    const description = t(ev.description);
    const card = document.createElement("article");
    card.className = "event-card reveal is-visible";
    card.innerHTML = `
      <div class="event-photo">
        <!-- INSERT WEDDING EVENT PHOTO HERE -->
        <img src="${ev.photo}" alt="${name} photo" loading="lazy"
             onerror="this.classList.add('img-placeholder'); this.alt='${name} photo placeholder — insert ${ev.photo}'">
      </div>
      <div class="event-body">
        <p class="event-index">Event ${String(i + 1).padStart(2, "0")}</p>
        <h3 class="event-name">${name}</h3>
        <p class="event-meta">${ev.date} &bull; ${ev.time}</p>
        <p class="event-meta">${venue}</p>
        <p class="event-desc">${description}</p>
      </div>`;
    wrap.appendChild(card);
  });
}

/* ===================== SIBLINGS ===================== */
function buildSiblings() {
  const wrap = document.getElementById("siblings-row");
  if (!wrap) return;
  wrap.innerHTML = "";
  WEDDING_CONFIG.siblings.forEach((sib) => {
    const role = t(sib.role);
    const card = document.createElement("div");
    card.className = "sibling-card reveal is-visible";
    card.innerHTML = `
      <div class="sibling-photo">
        <!-- INSERT SIBLING PHOTO HERE -->
        <img src="${sib.photo}" alt="${sib.name} photograph" loading="lazy"
             onerror="this.classList.add('img-placeholder'); this.alt='Sibling photo placeholder — insert ${sib.photo}'">
      </div>
      <p class="sibling-name">${sib.name}</p>
      ${role ? `<p class="sibling-role">${role}</p>` : ""}`;
    wrap.appendChild(card);
  });
}

function buildExtraFamily() {
  const wrap = document.getElementById("extra-family-row");
  if (!wrap) return;
  wrap.innerHTML = "";
  WEDDING_CONFIG.extraFamily.forEach((member) => {
    const card = document.createElement("div");
    card.className = "extra-family-card reveal is-visible";
    card.innerHTML = `
      <div class="extra-family-photo">
        <!-- INSERT FAMILY MEMBER PHOTO HERE -->
        <img src="${member.photo}" alt="${member.name} photograph" loading="lazy"
             onerror="this.classList.add('img-placeholder'); this.alt='Family photo placeholder — insert ${member.photo}'">
      </div>`;
    wrap.appendChild(card);
  });
}

let slideshowIndex = 0;
let slideshowTimer = null;
function collectAllSitePhotos() {
  const list = [];
  const add = (src, alt) => { if (src) list.push({ src, alt: alt || "" }); };

  add("assets/images/grandfather.jpg", "Grandfather");
  add("assets/images/grandmother.jpg", "Grandmother");
  add("assets/images/elder-1.jpg", "Elder of the family");
  add("assets/images/elder-2.jpg", "Elder of the family");
  add("assets/images/groom.jpg", WEDDING_CONFIG.groomName);
  add("assets/images/bride.jpg", WEDDING_CONFIG.brideName);
  add("assets/images/father.jpg", "Father");
  add("assets/images/mother.jpg", "Mother");
  add(WEDDING_CONFIG.uncleAuntyPhotoUncle, "Uncle");
  add(WEDDING_CONFIG.uncleAuntyPhotoAunty, "Aunty");
  WEDDING_CONFIG.siblings.forEach((sib) => add(sib.photo, sib.name));
  add(WEDDING_CONFIG.siblingsGroupPhoto, "All siblings together");
  WEDDING_CONFIG.extraFamily.forEach((m) => add(m.photo, m.name));
  add("assets/images/couple.jpg", "The couple");
  // Event photos (Engagement, Haldi, Wedding) are intentionally left out of
  // the slideshow — they stay in their own "Our Wedding Celebrations" cards.
  WEDDING_CONFIG.gallery.forEach((g) => add(g.src, g.alt));

  return list;
}

function buildSlideshow() {
  const track = document.getElementById("slideshow-track");
  const dotsWrap = document.getElementById("slideshow-dots");
  const container = document.getElementById("slideshow");
  const prevBtn = document.getElementById("slideshow-prev");
  const nextBtn = document.getElementById("slideshow-next");
  if (!track || !dotsWrap || !container) return;

  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  const photos = collectAllSitePhotos();

  photos.forEach((img, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
    const imgEl = slide.querySelector("img");
    // If this photo hasn't been uploaded yet, quietly drop it from the
    // slideshow entirely (rather than showing an empty/broken slide).
    imgEl.addEventListener("error", () => {
      const wasActive = slide.classList.contains("active");
      const dot = dotsWrap.children[Array.from(track.children).indexOf(slide)];
      slide.remove();
      if (dot) dot.remove();
      if (wasActive) goToSlide(slideshowIndex);
    }, { once: true });
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slideshow-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to photo ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  function goToSlide(i) {
    const slides = track.querySelectorAll(".slide");
    const dots = dotsWrap.querySelectorAll(".slideshow-dot");
    slideshowIndex = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle("active", idx === slideshowIndex));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === slideshowIndex));
  }

  const restartAutoplay = () => {
    if (slideshowTimer) clearInterval(slideshowTimer);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    slideshowTimer = setInterval(() => goToSlide(slideshowIndex + 1), 3500);
  };

  if (prevBtn) prevBtn.addEventListener("click", () => { goToSlide(slideshowIndex - 1); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goToSlide(slideshowIndex + 1); restartAutoplay(); });

  // Tap the current slide to zoom into it, same as any other photo
  track.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (img && img.naturalWidth) {
      document.getElementById("lightbox-img").src = img.currentSrc || img.src;
      document.getElementById("lightbox-img").alt = img.alt;
      document.getElementById("lightbox").classList.add("single");
      document.getElementById("lightbox").hidden = false;
      document.body.style.overflow = "hidden";
    }
  });

  container.addEventListener("mouseenter", () => { if (slideshowTimer) clearInterval(slideshowTimer); });
  container.addEventListener("mouseleave", restartAutoplay);

  restartAutoplay();
}

/* ===================== GALLERY + LIGHTBOX ===================== */
function buildGallery() {
  const wrap = document.getElementById("gallery-grid");
  if (!wrap) return;
  wrap.innerHTML = "";
  WEDDING_CONFIG.gallery.forEach((img, i) => {
    const fig = document.createElement("figure");
    fig.className = "gallery-item";
    fig.tabIndex = 0;
    fig.setAttribute("role", "button");
    fig.setAttribute("aria-label", `Open ${img.alt} in full screen`);
    fig.dataset.index = i;
    fig.innerHTML = `
      <!-- INSERT COUPLE / FAMILY PHOTO HERE -->
      <img src="${img.src}" alt="${img.alt}" loading="lazy"
           onerror="this.classList.add('img-placeholder'); this.alt='${img.alt} placeholder — insert ${img.src}'">`;
    wrap.appendChild(fig);
  });
}

let lightboxIndex = 0;
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const grid = document.getElementById("gallery-grid");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  if (!lightbox) return;

  let mode = "single"; // "gallery" or "single"

  const openGallery = (index) => {
    mode = "gallery";
    lightboxIndex = index;
    const item = WEDDING_CONFIG.gallery[index];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lightbox.classList.remove("single");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const openSingle = (src, alt) => {
    mode = "single";
    lbImg.src = src;
    lbImg.alt = alt || "";
    lightbox.classList.add("single");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };
  const nav = (dir) => {
    if (mode !== "gallery") return;
    lightboxIndex = (lightboxIndex + dir + WEDDING_CONFIG.gallery.length) % WEDDING_CONFIG.gallery.length;
    openGallery(lightboxIndex);
  };

  if (grid) {
    grid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item) openGallery(Number(item.dataset.index));
    });
    grid.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.closest(".gallery-item")) {
        e.preventDefault();
        openGallery(Number(e.target.closest(".gallery-item").dataset.index));
      }
    });
  }

  // Click-to-zoom for every other photo on the site (hero, family, events,
  // final photo, etc.) — skips broken/placeholder images that never loaded
  // a real photo, and skips gallery photos (handled above with prev/next).
  document.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;
    if (img.closest(".gallery-item") || img.closest("#lightbox") || img.closest("#intro-overlay")) return;
    if (img.classList.contains("img-placeholder") || !img.naturalWidth) return;
    openSingle(img.currentSrc || img.src, img.alt);
  });

  document.getElementById("lightbox-close").addEventListener("click", close);
  if (prevBtn) prevBtn.addEventListener("click", () => nav(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => nav(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") nav(-1);
    if (e.key === "ArrowRight") nav(1);
  });

  // Swipe support (gallery mode only)
  let touchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) nav(dx > 0 ? -1 : 1);
  }, { passive: true });
}

/* ===================== NAVIGATION ===================== */
function setupNav() {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===================== COUNTDOWN ===================== */
function setupCountdown() {
  const target = new Date(WEDDING_CONFIG.weddingDateISO);
  if (isNaN(target.getTime())) return;

  const weekdayEl = document.getElementById("cd-weekday");
  const dayEl = document.getElementById("cd-day");
  const monthYearEl = document.getElementById("cd-monthyear");
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");
  const timerBlock = document.getElementById("countdown-timer");
  const todayBlock = document.getElementById("countdown-today");

  weekdayEl.textContent = target.toLocaleDateString(undefined, { weekday: "long" });
  dayEl.textContent = target.getDate();
  monthYearEl.textContent = target.toLocaleDateString(undefined, { month: "long", year: "numeric" });

  function tick() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      timerBlock.hidden = true;
      todayBlock.hidden = false;
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  tick();
  const intervalId = setInterval(tick, 1000);
}

/* ===================== MAP & WHATSAPP LINKS ===================== */
function setupMapLink() {
  const mapLink = document.getElementById("map-link");
  if (mapLink) mapLink.href = WEDDING_CONFIG.googleMapsLink;
}

/* ===================== MUSIC ===================== */
function setupIntroOverlay() {
  const overlay = document.getElementById("intro-overlay");
  const btn = document.getElementById("intro-open-btn");
  const butterflyLayer = document.getElementById("intro-butterflies");
  if (!overlay || !btn) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  btn.addEventListener("click", () => {
    // Spawn a burst of butterflies fluttering outward from the button.
    if (!reduceMotion && butterflyLayer) {
      const count = 14;
      for (let i = 0; i < count; i++) {
        const b = document.createElement("span");
        b.className = "intro-butterfly";
        b.textContent = "\u{1F98B}";
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const distance = 220 + Math.random() * 260;
        const bx = Math.cos(angle) * distance;
        const by = Math.sin(angle) * distance - 120; // bias upward
        b.style.setProperty("--bx", `${bx}px`);
        b.style.setProperty("--by", `${by}px`);
        b.style.setProperty("--br", `${(Math.random() * 360 - 180)}deg`);
        b.style.animationDuration = `${1.1 + Math.random() * 0.6}s`;
        b.style.animationDelay = `${Math.random() * 0.15}s`;
        b.style.fontSize = `${1.1 + Math.random() * 0.9}rem`;
        butterflyLayer.appendChild(b);
      }
    }

    // The opening zoom/fade (defined in CSS) runs for a moment; wait for it
    // before fully hiding the overlay underneath.
    overlay.classList.add("intro-opening");

    const finish = () => {
      overlay.classList.add("intro-closed");
      document.body.classList.remove("intro-active");
      setTimeout(() => overlay.remove(), 1000);
    };
    setTimeout(finish, reduceMotion ? 0 : 700);
  });
}

function setupMusic() {
  const btn = document.getElementById("music-toggle");
  const audio = document.getElementById("wedding-audio");
  if (!btn || !audio) return;

  const markPlaying = () => {
    btn.classList.add("playing");
    btn.setAttribute("aria-pressed", "true");
    btn.setAttribute("aria-label", "Pause wedding music");
    btn.querySelector(".music-icon").textContent = "\u23F8";
  };
  const markPaused = () => {
    btn.classList.remove("playing");
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Play wedding music");
    btn.querySelector(".music-icon").textContent = "\u266B";
  };

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(markPlaying).catch(() => { /* file missing or blocked — silently ignore */ });
    } else {
      audio.pause();
      markPaused();
    }
  });

  // Most mobile/desktop browsers block audio with sound from starting on
  // page load unless the visitor has interacted with the page first. So:
  // 1) try to autoplay immediately — works in some browsers/settings.
  // 2) if that's blocked, start on the very first tap/click/key press
  //    anywhere on the page instead, which is as close to "automatic" as
  //    browsers allow.
  audio.play().then(markPlaying).catch(() => {
    const startOnFirstInteraction = () => {
      audio.play().then(markPlaying).catch(() => {});
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
    window.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
    window.addEventListener("keydown", startOnFirstInteraction, { once: true });
  });
}

/* ===================== RSVP FORM ===================== */
function setupRSVP() {
  const form = document.getElementById("rsvp-form");
  const note = document.getElementById("rsvp-note");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = form.message.value.trim();
    if (!message) return;

    // Sends the well-wisher's message straight to the groom's WhatsApp.
    // The number is only ever used here inside the link — it is never
    // printed anywhere on the page.
    const prefilled = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WEDDING_CONFIG.wishesWhatsappNumber}?text=${prefilled}`;
    // window.open is blocked in many mobile in-app browsers (e.g. WhatsApp's
    // own in-app browser). A direct location change is far more reliable
    // for wa.me links across devices.
    window.location.href = waUrl;

    note.textContent = TRANSLATIONS[currentLang].rsvpNote;
    form.reset();
  });
}

/* ===================== SCROLL REVEAL ===================== */
function setupRevealObserver() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Tag every photo container so it fades + scales in as it enters view.
  document.querySelectorAll(
    ".portrait-arch, .family-photo, .sibling-photo, .event-photo, .siblings-group-photo, .final-photo, .extra-family-photo"
  ).forEach((el) => el.classList.add("photo-reveal"));

  const targets = document.querySelectorAll(".reveal, .event-card, .sibling-card, .photo-reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}
