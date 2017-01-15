import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AgendaData implements InMemoryDbService {
  createDb() {
    let agendas = [
	  
    ]; 
	  let cities = 
    [
  	  { id: 0, name: 'Tokyo', description: "With about 37.8million habitants, Tokyo stands as the true definition of a metropolis. Be it age-old temples or tomorrow’s tech, it’s all here.", url: "https://www.youtube.com/embed/LXUSzXfdq_0", pic: "http://www.tokyo-skytree.jp/img/index_2015/bg/02_day.jpg", plans: [ {id: 0, name: ' Akihabara', url: "https://www.youtube.com/embed/ge3COL8Nq4c", pic: "http://static.wixstatic.com/media/8daf79_e5a597598df04adcb3b74c5123472ec8~mv2.jpg", description: "Famous for its many electronics shops; and in more recent years, it has gained recognition as the center of Japan's Otaku (diehard Anime and Manga fan) culture, with many shops devoted to just these – including of course the ever-unique maid shops and otherwise these establishments to escape from the real world."},
                                                                                                                                                                                                                                                                                                                          {id: 1, name: ' Tokyo Tower', url: "https://www.youtube.com/embed/dGXtmSKMjOw", pic: "http://content.paulreiffer.com/wp-content/uploads/2015/08/tokyo-tower-at-dusk-night-lights-blue-sky-city-below-from-above-long-exposure-lights-orange-background-cityscape-paul-reiffer-photographer-2015.jpg", description: "Wildly romantic, and modeled after the design of the Eiffel Tower in France, Tokyo Tower stands at an impressive 333 meters tall - 13 meters taller than its model. When visibility is good, visitors can see the Tokyo Skytree and Mount Fuji in the distance."},
                                                                                                                                                                                                                                                                                                                          {id: 2, name: ' SkyTree', url: "https://www.youtube.com/embed/7Y2NYvfYz6A", pic: "http://cdn.tokyotimes.com/wp-content/uploads/2013/05/Tokyo-skytree.jpg", description: "At 2080ft (634m), Tokyo’s television broadcasting ‘Skytree’ stands as the world’s tallest tower (not building. Its two decks standing respectively at 350 and 450 meters tall make it them undeniable best sites to appreciate just what the true definition of a ‘metropolis’ really is, with no end in sight."},
                                                                                                                                                                                                                                                                                                                          {id: 3, name: ' Shinjuku', url: "https://www.youtube.com/embed/yNYpO5k2sAw", pic: "https://c1.staticflickr.com/5/4153/5071940702_a7bffb26f7_b.jpg", description: "As the more grandiose version of Manhattan, Shinjuku station is the world's busiest railway station handling more than 3.6million passengers per day. Furthermore, it holds the unusual Golden-district, where its six alleys contain hundreds of bizarre and tiny bars (4 – 30 person capacity) buzzing with people."},
                                                                                                                                                                                                                                                                                                                          {id: 4, name: ' Shibuya', url: "https://www.youtube.com/embed/cHel0LwRFlA", pic: "https://gaijinpot.scdn5.secure.raxcdn.com/wp-content/uploads/sites/6/2016/08/Shibuya-lead.jpg", description: "The center for youth fashion and culture; its streets are the birthplace to many of Japan's fashion and entertainment trends. Heavily decorated by neon advertisements/giant video screens, it’s continuously flooded by pedestrians each time the crossing light turns green, making it a most popular photo and movie filming spot."} 
                                                                                                                                                                                                                                                                                                                        ]},
  	  { id: 1, name: 'Kyoto', description: "Japan's capital for over 1,000 years, Kyoto remains awash with remnants of its past glory that establish it as the ‘cultural capital’.", url: "https://www.youtube.com/embed/GgZ0duWI6bc", pic: "http://static5.businessinsider.com/image/5818c9bbdd08956c5a8b47b1/19-photos-that-show-why-kyoto-and-tokyo-were-voted-the-best-cities-in-the-world.jpg", plans: [ {id: 5, name: ' Fushimi Inari', url: "https://www.youtube.com/embed/NWWWWuYUWX0", pic: "https://upload.wikimedia.org/wikipedia/commons/1/16/KyotoFushimiInariLarge.jpg", description: "Fushimi Inari is the most important of shrines dedicated to Inari, the Shinto god of rice. The experience is incomparable whilst you make your way up through the thousands of torii gates - the renowned vermillion gates. Insider tip: try to make it to the midway point (45mins) for the sunset!"},
                                                                                                                                                                                                                                                                                                                                                                                                              {id: 6, name: ' Mount Kurama', url: "https://www.youtube.com/embed/KlFNilvifAw", pic: "http://static.panoramio.com/photos/large/55842224.jpg", description: "Kyoto’s most spiritually great ‘power spot’ - and the place of origin of the healing energy technique known as Reiki – Kurama is surely a must-go for the spiritually wanting. Insider tip: be sure to catch the free shuttle bus to Kyoto’s #1 onsen (hot spring) after hiking back down! "},
                                                                                                                                                                                                                                                                                                                                                                                                              {id: 7, name: ' Arashiyama', url: "https://www.youtube.com/embed/xN9QvKs7Zvo", pic: "http://www.genkin.org/gallery/japan/kyoto/jp-kyoto-0002.jpg", description: "Besides its well-known Togetsukyo Bridge across its gorgeous river, most go to see the beauty of the bamboo forest, which is known far and wide. It’s so calming, you feel transported to another place walking through the bamboo groves. Insider tip: views are famed during the cherry-blossom and fall leave seasons."},
                                                                                                                                                                                                                                                                                                                                                                                                              {id: 8, name: ' Kiyomizu', url: "https://www.youtube.com/embed/6v8OAnBGqF4", pic: "https://i.ytimg.com/vi/seVRTj3saTU/maxresdefault.jpg", description: "‘Pure Water Temple’ - founded in 780 on the site of the Otowa Waterfal, it stands as one of Japan’s most important temples. Its waterfall split into three where one may drink from to gain longevity, scholarly success, or fortune in love. Insider tip: don't drink from all three, as it deems you as greedy!"},
                                                                                                                                                                                                                                                                                                                                                                                                              {id: 9, name: ' Gion', url: "https://www.youtube.com/embed/YNoXsgRdsg0", pic: "https://tokyobling.files.wordpress.com/2012/11/kyoto_gion_at_night_0701.jpg", description: "As the indisputably most important remaining Geisha districts left in Japan, Gion’s ancient wooden structures offer you the best chance to see a real-life Geisha as she traverses these breath-taking alleys."} 
                                                                                                                                                                                                                                                                                                                                                                                                            ]},

      { id: 2, name: 'Osaka', description: "The second largest metropolis in Japan, Osaka has remained a critical mercantile city for centuries. Today it is known for its friendly, fun-loving atmosphere.", url: "https://www.youtube.com/embed/sjrUo2yIA78", pic: "http://airlines-airports.com/wp-content/uploads/2016/07/Japan-Osaka.jpg", plans: [ {id: 10, name: ' Dotonbori', url: "https://www.youtube.com/embed/Kve3kBuITfI", pic: "https://amkortravel.files.wordpress.com/2016/05/doronbori.jpg?w=775", description: "One of the most popular tourist destinations, the area spreads across both sides of its canal. Known as a shopping and entertainment district, as well as the foodie destination. At night it is lit by hundreds of neon lights and mechanized signs, including the famous Glico Running Man sign."},
                                                                                                                                                                                                                                                                                                                                                         {id: 11, name: ' Umeda', url: "https://www.youtube.com/embed/YIChS_eTTz8", pic: "http://japan-highlightstravel.com/img/spot/160001/sub3_en.JPG", description: "A bustling business district, it also offers abundance of shopping, entertainment, and the like. The Umeda Sky building, sitting at 173 meters high, offers a beautiful 360-degree panoramic view of this proudly eccentric city. Its innovative shape stems from being connected by two skyscrapers at the top floors."},
                                                                                                                                                                                                                                                                                                                                                         {id: 12, name: ' Shitennoji', url: "https://www.youtube.com/embed/7roBCLa94qg", pic: "https://i.ytimg.com/vi/vZnrnzYzTkc/maxresdefault.jpg", description: "Often claimed to be the oldest temple in Japan, it was founded in 593 by Prince Shotoku, who supported the introduction of Buddhism into Japan, and is the first ever to be built by the state. Its stone torii gate dates from 1294 and is Japan’s the oldest of its kind."},
                                                                                                                                                                                                                                                                                                                                                         {id: 13, name: ' Sumiyoshi', url: "https://www.youtube.com/embed/lX6r0-uZbfo", pic: "http://muza-chan.net/aj/poze-weblog5/taikobashi-sumiyoshi-taisha-shrine-osaka.jpg", description: "Founded in the 3rd century before the introduction of Buddhism, it displays a unique style of shrine architecture - Sumiyoshi-zukur -that is free of influence from the Asian mainland. Only two other shrine architecture styles are also considered purely Japanese; establishing it as one of Japan’s oldest shrines."},
                                                                                                                                                                                                                                                                                                                                                         {id: 14, name: ' Osaka Castle', url: "https://www.youtube.com/embed/0VOcSB6WBrY", pic: "http://travelneu.com/o/Osaka-Castle-o84.jpg", description: "Osaka Castle was built by the Toyotomi Hideyoshi, who ruled Japan in the latter half of the 16th century. Its gross area is over 3,300,000sq m, and its stonewall is made up of 40,000 rocks; which made it the largest castle of its time, and Osaka’s most popular attraction today."}
                                                                                                                                                                                                                                                                                                                                                       ]}  
    ];
      return { agendas, cities };
  }
}