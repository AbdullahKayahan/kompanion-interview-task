export const Data = {
  posts: [
    {
      id: 'p1',
      title: 'Başlık 1',
      description: 'Bu kısım genel açıklama',
      likeCount: 16,
      senderUser: {
        userId: 1,
        fullName: 'Gönderen Kullanıcı Ad Soyad',
        profilePhone: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: {
        type: 'iamge',
        sources: [require('../assets/images/image1.jpg'),require('../assets/images/image2.jpg')],
      },
    },
    {
      id: 'p2',
      title: 'Başlık 2',
      description: 'Bu kısım genel açıklama',
      likeCount: 20,
      senderUser: {
        userId: 1,
        fullName: 'Gönderen Kullanıcı Ad Soyad',
        profilePhone: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: {
        type: 'video',
        sources: [require('../assets/videos/video1.mp4')],
      },
    },
    {
      id: 'p2',
      title: 'Başlık 2',
      likeCount: 250,
      description: 'Bu kısım genel açıklama',
      senderUser: {
        userId: 1,
        fullName: 'Gönderen Kullanıcı Ad Soyad',
        profilePhone: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: {
        type: 'iamge',
        sources: [require('../assets/images/image3.jpg'),require('../assets/images/image4.jpg')],
      },
    },{
        id: 'p2',
        title: 'Başlık 2',
        description: 'Bu kısım genel açıklama',
        likeCount: 20,
        senderUser: {
          userId: 1,
          fullName: 'Gönderen Kullanıcı Ad Soyad',
          profilePhone: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        content: {
          type: 'video',
          sources: [require('../assets/videos/video2.mp4')],
        },
      },
  ],
};
