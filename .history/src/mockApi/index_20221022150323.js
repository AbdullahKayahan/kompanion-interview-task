const Data = {
  posts: [
    {
      id: 'p1',
      title: 'Başlık 1',
      description: 'Bu kısım genel açıklama',
      senderUser: {
        userId: 1,
        fullName: 'Gönderen Kullanıcı Ad Soyad',
        profilePhone: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: {
        type: 'video',
        sources: [require('../assets/images/image1.jpg')],
      },
    },
    {
      id: 'p2',
      title: 'Başlık 2',
      description: 'Bu kısım genel açıklama',
      senderUser: {
        userId: 1,
        fullName: 'Gönderen Kullanıcı Ad Soyad',
        profilePhone: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: {
        type: 'video',
        sources: [require('../assets/images/image2.jpg')],
      },
    },
  ],
};
