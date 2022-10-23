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
                fullName: "Şükriye Tutkun",
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
            title: "Tatlı Yiyelim Tatlı Konuşalım",
            description:
                "Dünyada hergün tatsız onlarca olay oluyor. Bu tatlıları yiyelim, tatlı konuşalım. ",
            likeCount: 1600,
            isILikeIt: true,
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
            id: "p3",
            title: "Kendin Pişir Kendin Ye",
            description:
                "Dürüm hayatımızın vazgeçilmez lezzeti. Önce incecik hamur açılır, sonra içine Allah ne verdiyse ;) ",
            likeCount: 1600,
            isILikeIt: true,
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
            id: "p4",
            title: "Mercedes vs BMW",
            description:
                "Güc, Tasarım, Asalet... Sizce Dünyanın En İyi Araba Markası Hangisi?",
            likeCount: 1600,
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
            id: "p5",
            title: "Kar Kış Mı, Deniz Kum Güneş Mi?",
            description:
                "Bu sene tatil için nereye gitsem bilemedim. İsviçreye Alplere mi gitsem yoksa Miamiye mi? Bi akıl verin.",
            likeCount: 1600,
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
            id: "p6",
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
            id: "p3",
            title: "Başlık 2",
            description: "Bu kısım genel açıklama",
            likeCount: 3000,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Muhittin Topalak",
                profilePhoto: require("../assets/profilePhotos/women/1.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video3.mp4")],
            },
        },
        {
            id: "p3",
            title: "Başlık 2",
            likeCount: 250,
            isILikeIt: true,
            description: "Bu kısım genel açıklama",
            senderUser: {
                userId: 1,
                fullName: "Gönderen Kullanıcı Ad Soyad",
                profilePhoto: require("../assets/profilePhotos/women/2.jpg"),
            },
            content: {
                type: "iamge",
                sources: [
                    require("../assets/images/image3.jpg"),
                    require("../assets/images/image4.jpg"),
                ],
            },
        },
        {
            id: "p4",
            title: "Başlık 2",
            description: "Bu kısım genel açıklama",
            likeCount: 20,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Gönderen Kullanıcı Ad Soyad",
                profilePhoto: require("../assets/profilePhotos/women/3.jpg"),
            },
            content: {
                type: "video",
                sources: [require("../assets/videos/video2.mp4")],
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
