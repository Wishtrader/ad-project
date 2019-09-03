export default {
  state: {
    ads: [
      {
      title: 'First Ad',
      description: 'Description-01',
      promo: false,
      imageSrc: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      id: '001'
    },
    {
      title: 'Second Ad',
      description: 'Description-02',
      promo: true,
      imageSrc: 'https://images.unsplash.com/photo-1543654835-f02bf9de3e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: '002'
    },
    {
      title: 'Third Ad',
      description: 'Description-03',
      promo: true,
      imageSrc: 'https://images.unsplash.com/photo-1564190648918-d65d4ace70d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      id: '003'
    }
  ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}