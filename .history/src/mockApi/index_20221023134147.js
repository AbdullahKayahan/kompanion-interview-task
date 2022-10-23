const API_LOGIN_RESPONSE_TIME = 750;
const API_HOME_RESPONSE_TIME = 500;
const API_SEARCH_RESPONSE_TIME = 250;
const USER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MDA2MzQ2NjEyIiwibmFtZSI6IkFiZHVsbGFoIEtBWUFIQU4iLCJpYXQiOjIwNDYyMTEzMzQ5fQ.el3z_rE54i5PIFDBvDLDct8ttaQVZ5Tdiw61nMQtRS8";

const HOMEPAGE_DATA = {
    posts: [
        {
            id: "p1",
            title: "Başlık 1",
            description: "Bu kısım genel açıklama",
            likeCount: 1600,
            isILikeIt: true,
            senderUser: {
                userId: 1,
                fullName: "Şukufe Yılmaz",
                profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
            },
            content: {
                type: "iamge",
                sources: [
                    require("../assets/images/image1.jpg"),
                    require("../assets/images/image2.jpg"),
                ],
            },
        },
        {
            id: "p2",
            title: "Başlık 2",
            description: "Bu kısım genel açıklama",
            likeCount: 3000,
            isILikeIt: false,
            senderUser: {
                userId: 1,
                fullName: "Muhittin Topalak",
                profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
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
                profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
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
                profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
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

const SearchData = (searchText) => {
    return HOMEPAGE_DATA.posts.filter((item) => {
        if (
            item.senderUser.fullName
                .toLowerCase()
                .includes(searchText.toLowerCase())
        )
            return {
                ...item, isPaused: true 
            };
    });
};

export const searchOperation = ({
    token 
}) =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(HOMEPAGE_DATA), API_HOME_RESPONSE_TIME)
    );
