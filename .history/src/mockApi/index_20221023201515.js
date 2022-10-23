const API_LOGIN_RESPONSE_TIME = 750;
const API_HOME_RESPONSE_TIME = 750;
const API_SEARCH_RESPONSE_TIME = 500;
const USER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MDA2MzQ2NjEyIiwibmFtZSI6IkFiZHVsbGFoIEtBWUFIQU4iLCJpYXQiOjIwNDYyMTEzMzQ5fQ.el3z_rE54i5PIFDBvDLDct8ttaQVZ5Tdiw61nMQtRS8";

const HOMEPAGE_DATA = {
    posts: [
        {
            id: "p1",
            title: "Dağların Eşsiz Manzarası",
            description:
                "Dünya üzerindeki en heybetli oluşumlar 'Dağlar'... Hem yüceliğin hem de imkansızın fotoğrafları... ",
            likeCount: 1600,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Burçak Özoğlu Poçan",
                profilePhoto: require("../assets/profilePhotos/women/0.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image1.jpg"),
                    require("../assets/images/image17.jpg"),
                ],
            },
        },
        {
            id: "p2",
            title: "Bu Neyin Kutlaması",
            description:
                "Mis gibi cıtır kurabiye arasına krema, üstüne mum. Bir yaşıma daha girdim vallaha. :)) ",
            likeCount: 3000,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Zahide Yetiş",
                profilePhoto: require("../assets/profilePhotos/women/3.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video1.mp4")],
            },
        },
        {
            id: "p3",
            title: "Odanızı Güzelleştirin",
            description:
                "Kendinize minik hediyeler vermeyi seviyor musunuz? Bu tasarımımız tam sizin için. İzleyin, izlettirin.",
            likeCount: 20,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Selim Yuhay",
                profilePhoto: require("../assets/profilePhotos/men/3.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video2.mp4")],
            },
        },
        {
            id: "p4",
            title: "Tatlı Yiyelim Tatlı Konuşalım",
            description:
                "Dünyada hergün tatsız onlarca olay oluyor. Bu tatlıları yiyelim, tatlı konuşalım. ",
            likeCount: 2000000,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Abdurrahman Tatlıcı",
                profilePhoto: require("../assets/profilePhotos/men/0.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image2.jpg"),
                    require("../assets/images/image14.jpg"),
                ],
            },
        },
        {
            id: "p5",
            title: "Yaz Kış Dört Mevsim İçin!",
            description:
                "Bitki çayları ve çeşitli meyve suları bağışıklık sisteminizi güçlendirir, cildinize iyi gelir. Uzun yaşamak için dört mevsim için.",
            likeCount: 388,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Asuman Baytop",
                profilePhoto: require("../assets/profilePhotos/women/6.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video7.mp4")],
            },
        },
        {
            id: "p6",
            title: "Kendin Pişir Kendin Ye",
            description:
                "Dürüm hayatımızın vazgeçilmez lezzeti. Önce incecik hamur açılır, sonra içine Allah ne verdiyse ;) ",
            likeCount: 999,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Canan Karatay",
                profilePhoto: require("../assets/profilePhotos/women/1.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image6.jpg"),
                    require("../assets/images/image15.jpg"),
                ],
            },
        },
        {
            id: "p7",
            title: "Araştırdım Buldum!",
            description:
                "Evet arkadaşlar, uzun uğraşlar sonucu mükemmel kahveyi buldum. Uzun ve yorucu bir iş gününden sonra bu kahve sizi kendinize getirecek.",
            likeCount: 1850,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Esra Erol",
                profilePhoto: require("../assets/profilePhotos/women/4.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video3.mp4")],
            },
        },
        {
            id: "p8",
            title: "Mercedes vs BMW",
            description:
                "Güc, Tasarım, Asalet... Sizce Dünyanın En İyi Araba Markası Hangisi?",
            likeCount: 70,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Doğan Kabak",
                profilePhoto: require("../assets/profilePhotos/men/1.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image7.jpg"),
                    require("../assets/images/image9.jpg"),
                ],
            },
        },
        {
            id: "p9",
            title: "Renklerdeki Ahenk",
            description:
                "Yıllardır boyaları tuvale işledim. Şimdi sıra suda. Şu küçük mutlu kırmızı renge bakın nasıl salınıyor...",
            likeCount: 750,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Bob Ross",
                profilePhoto: require("../assets/profilePhotos/men/4.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video4.mp4")],
            },
        },

        {
            id: "p10",
            title: "Kar Kış Mı, Deniz Kum Güneş Mi?",
            description:
                "Bu sene tatil için nereye gitsem bilemedim. İsviçreye Alplere mi gitsem yoksa Miamiye mi? Bi akıl verin.",
            likeCount: 600,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Şeyma Subaşı",
                profilePhoto: require("../assets/profilePhotos/women/2.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image3.jpg"),
                    require("../assets/images/image4.jpg"),
                ],
            },
        },
        {
            id: "p11",
            title: "Titanyum vs Esnek Protez",
            description:
                "Çığır açan yeni buluş. Esneyen, kırılmayan yeni protezler. Üstelik beyinden gelen elektirik dalgaları ile yönetilebiliyor.",
            likeCount: 2500,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Dilhan Eryurt",
                profilePhoto: require("../assets/profilePhotos/women/5.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video5.mp4")],
            },
        },
        {
            id: "p12",
            title: "Hızlı ve Öfkeliyim",
            description:
                "Bana bir klasik Amerikan araba verin, gerek uçurumdan atlayım, gerekse bir trenin üstünde yol alayım. Dedim ya hızlı ve öfkeliyim.",
            likeCount: 1600,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Dominic Toretto",
                profilePhoto: require("../assets/profilePhotos/men/2.jpg"),
            },
            content: {
                type: "image",
                sources: [
                    require("../assets/images/image18.jpg"),
                    require("../assets/images/image12.jpg"),
                ],
            },
        },

        {
            id: "p13",
            title: "Fındık Fıstık",
            description:
                "Feriğim, Fidanım, Feryadım... Memleketimde yetişiyor diye demiyorum. Fındık binbir derde deva.",
            likeCount: 200,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Volkan Konak",
                profilePhoto: require("../assets/profilePhotos/men/5.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video6.mp4")],
            },
        },
    ],
};

export const loginOperation = ({
    userName, password 
}) =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(USER_TOKEN), API_LOGIN_RESPONSE_TIME)
    );

export const loadData = ({
    token 
}) =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(HOMEPAGE_DATA), API_HOME_RESPONSE_TIME)
    );

const SearchDataFunction = (searchText) => {
    return HOMEPAGE_DATA.posts.filter((item) => {
        if (
            item.senderUser.fullName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase()) ||
            item.title.toLowerCase().includes(searchText.toLowerCase())
        )
            return {
                ...item,
                isPaused: true,
            };
    });
};

export const searchOperation = ({
    token, searchText 
}) =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(SearchDataFunction(searchText)),
            API_SEARCH_RESPONSE_TIME
        )
    );
