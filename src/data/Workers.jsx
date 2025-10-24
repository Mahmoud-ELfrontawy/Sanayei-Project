// استبدل مسارات الصور بما يناسب مشروعك
import Image1 from "../sanayei-img/image3.png";
import Image2 from "../sanayei-img/image4.png";
import Image3 from "../sanayei-img/image5.png";
import Image4 from "../sanayei-img/image 6.png";
import Image5 from "../sanayei-img/image 7.png";
import Image6 from "../sanayei-img/image 8.png";

// صور أفاتار آراء العملاء (كانت مستخدمة في الملف الأول)
import ReviewAvatar2 from "../sanayei-img/OIP (2).jfif";
import ReviewAvatar1 from "../sanayei-img/OIP (1).jfif";
import ReviewAvatar3 from "../sanayei-img/OIP (3).jfif";

export const workers = [
  {
    id: "mechanic",
    tag: "دهان",
    name: "كريم مصطفى",
    title: "دهان",
    bio: "تشطيبات الدهانات الداخلية والخارجية. خبرة أكثر من 6 سنوات.",
    rating: 4,
    reviews: 77,
    years: 6,
    image: Image1,
    location: "الجيزة - الهرم - ...",
    services: [
      "دهانات داخلية وخارجية",
      "معجون و معالجة الحوائط",
      "تصميمات ألوان وديكورات",
    ],
    portfolio: [
      { src: Image4, alt: "عمل 1" },
      { src: Image5, alt: "عمل 2" },
      { src: Image6, alt: "عمل 3" },
    ],
    // ممكن تبدأ بدون آراء، أو تضيف لاحقًا
    reviewsList: [],
  },
  {
    id: "electric",
    tag: "كهربائي",
    name: "سامي حسين",
    title: "كهربائي",
    bio: "كهربائي معتمد لحلول الإضاءة والتمديدات الكهربائية؛ خبرة 7 سنوات.",
    rating: 5,
    reviews: 120,
    years: 7,
    image: Image2,
    location: "الجيزة - فيصل - شارع العشرين",
    services: ["تمديدات كهربائية", "لوحات ومفاتيح ذكية", "صيانة أعطال"],
    portfolio: [
      { src: Image4, alt: "عمل 1" },
      { src: Image5, alt: "عمل 2" },
      { src: Image6, alt: "عمل 3" },
    ],
    // === آراء العملاء المنقولة من الملف الأول ===
    reviewsList: [
      {
        name: "حسن عبدالعزيز",
        text: "من أول تواصل حسّيت بالاحترافية والالتزام...",
        rating: 5,
        avatar: ReviewAvatar2,
      },
      {
        name: "محمد احمد",
        text: "اللي عجبني أكثر من الشغل هو التعامل الراقي...",
        rating: 5,
        avatar: ReviewAvatar1,
      },
      {
        name: "محمود حسن",
        text: "المشكلة اتحلّت من أول زيارة والمكان اتسلم نضيف جدًا...",
        rating: 5,
        avatar: ReviewAvatar3,
      },
    ],
  },
  {
    id: "carpenter",
    tag: "نجار",
    name: "محمد أحمد الصاوي",
    title: "نجار",
    bio: "حلول أثاث وديكورات خشبية. خبرة أكثر من 8 سنوات.",
    rating: 4,
    reviews: 92,
    years: 8,
    image: Image3,
    location: "القاهرة - مدينة نصر - ...",
    services: ["مطابخ", "أبواب وشبابيك", "غرف نوم"],
    portfolio: [
      { src: Image4, alt: "عمل 1" },
      { src: Image5, alt: "عمل 2" },
      { src: Image6, alt: "عمل 3" },
    ],
    reviewsList: [],
  },
];

// مساعد للبحث بالـ id
export const getWorkerById = (id) => workers.find((w) => w.id === id);
