const articles = [
    {
        id: 1,
        title: "Exam Time",
        img: "/img/ExamTime.jpg",
        content: "It was exam time at school, and Timmy was feeling nervous. His teacher, Mrs. Green, reminded everyone to stay calm and do their best. Timmy took a deep breath and started answering the questions. He remembered to read each question carefully and think about his answers. After the exam, Timmy felt relieved. His friends talked about how they did and shared their thoughts. They decided to celebrate with ice cream. Timmy was happy that the exam was over and enjoyed the fun ice cream party with his friends. They laughed and talked about their favorite flavors. Timmy felt proud of his hard work and looked forward to relaxing and spending time with his friends outside of school.",
        translation: "這是學校的考試時間，提米感到緊張。他的老師格林夫人提醒大家要保持冷靜，盡力而為。提米深吸一口氣，開始回答問題。他記得要仔細閱讀每個問題，並思考答案。考試結束後，提米感到鬆了一口氣。他的朋友們討論了他們的表現並分享了他們的想法。他們決定用冰淇淋慶祝一下。提米很高興考試結束了，並和朋友們一起享受了有趣的冰淇淋派對。他們笑著談論自己喜歡的口味。提米為自己的努力感到自豪，並期待著放鬆和在學校外與朋友們共度時光。"
    },
    {
        id: 2,
        title: "Shopping Trip",
        img: "/img/ShoppingTrip.jpg",
        content: "Today was a special day for Timmy and his mom. They planned a shopping trip to the big supermarket in town. Timmy was very excited because he loved helping his mom pick out fruits and vegetables. As they walked through the aisles, Timmy spotted a bright red apple. “Can we get this, Mom?” he asked. His mom smiled and nodded. They also picked up some bananas, oranges, and a big watermelon. Next, they went to the cereal aisle. Timmy’s eyes lit up when he saw his favorite cereal on the top shelf. With a little help from his mom, he grabbed the box and put it in the cart. “Good job!” his mom said, giving him a thumbs up. After they finished shopping, it was time to pay. Timmy helped his mom place the items on the counter. The cashier smiled and handed Timmy a small sticker as a reward for being such a good helper. Timmy was proud of himself. On the way home, he couldn’t wait to tell his dad about the shopping trip and all the things he helped buy.",
        translation: "今天對提米和他的媽媽來說是一個特別的日子。他們計劃去鎮上的大超市購物。提米非常興奮，因為他喜歡幫助媽媽挑選水果和蔬菜。當他們走過貨架時，提米發現了一個鮮紅的蘋果。“我們能買這個嗎，媽媽？”他問道。他的媽媽微笑著點頭。他們還買了一些香蕉、橙子和一個大西瓜。接著，他們來到了穀物區。當提米看到自己最喜歡的穀物在最上層的架子上時，眼睛都亮了起來。在媽媽的幫助下，他拿下了那個盒子並放進了購物車。“做得好！”他的媽媽豎起大拇指說道。購物結束後，是時候結帳了。提米幫助媽媽把物品放在櫃檯上。收銀員微笑著，給了提米一個小貼紙作為他是個好幫手的獎勵。提米為自己感到驕傲。回家的路上，他迫不及待地想告訴爸爸這次購物旅行和他幫忙買的所有東西。"
    },
    {
        id: 3,
        title: "Rainy Day",
        img: "/img/RainyDay.jpg",
        content: "It was a rainy day, and Timmy couldn’t go outside to play. Instead, he stayed inside and had fun with his toys. Timmy built a tall tower with his blocks and played with his toy cars on the floor. His mom made hot chocolate for him, and they read a story together. The rain tapped gently on the windows, creating a soothing sound. Timmy enjoyed the cozy atmosphere and loved spending time with his mom. They played board games and made paper crafts. By the afternoon, the rain had stopped, and Timmy looked outside at the fresh, wet world. He put on his rain boots and went outside to splash in the puddles. Even though the rain kept him indoors for a while, Timmy ended up having a fun and memorable day.",
        translation: "那天是個雨天，提米無法出去玩。相反，他待在家裡玩玩具。提米用積木搭建了一座高塔，並在地板上玩他的玩具車。他的媽媽為他做了熱巧克力，然後他們一起讀了一本故事書。雨水輕輕敲打著窗戶，發出舒緩的聲音。提米享受這種舒適的氛圍，並喜歡和媽媽共度時光。他們玩了桌遊，還做了紙藝。到了下午，雨停了，提米看著外面清新、濕潤的世界。他穿上雨靴，出去在水坑裡跳來跳去。儘管雨天讓他一度待在家裡，提米最終還是度過了一個有趣且難忘的一天。"
    },
    {
        id: 4,
        title: "School Trip",
        img: "/img/SchoolTrip.jpg",
        content: "Timmy’s class went on a school trip to the zoo. They saw many amazing animals like lions, elephants, and giraffes. Timmy was excited to see the monkeys swinging from tree to tree. His teacher gave them a map, and they followed it to different animal exhibits. At lunchtime, Timmy and his friends had a picnic near the penguin exhibit. They ate sandwiches and talked about their favorite animals. Timmy was fascinated by the way penguins waddled and played with each other. After lunch, they visited the reptile house and saw snakes and lizards. Timmy learned a lot about the animals and enjoyed the day out of the classroom. By the end of the trip, Timmy was tired but happy, and he couldn’t wait to share his zoo adventure with his family.",
        translation: "提米的班級參加了一次動物園的校外旅行。他們看到了許多令人驚奇的動物，如獅子、大象和長頸鹿。提米對於看到猴子在樹間搖擺感到非常興奮。他的老師給了他們一張地圖，他們按照地圖走訪了不同的動物展區。午餐時間，提米和他的朋友們在企鵝展區附近野餐。他們吃著三明治，討論他們最喜歡的動物。提米對企鵝的步態和它們之間的玩耍方式感到著迷。午餐後，他們參觀了爬蟲館，看到了一些蛇和蜥蜴。提米學到了很多有關動物的知識，並享受了這個教室外的一天。旅行結束時，提米既累又開心，他迫不及待地想要與家人分享他的動物園探險。"
    },
    {
        id: 5,
        title: "Camping",
        img: "/img/NOphoto.png",
        content: "Timmy and his family went camping in the woods. They set up their tent and made a campfire. Timmy roasted marshmallows and made s’mores, which were delicious. At night, they sat around the campfire, telling stories and singing songs. Timmy listened to the sounds of the forest, like the chirping of crickets and the rustling of leaves. He loved looking up at the starry sky. The next morning, Timmy and his family went on a hike. They saw beautiful trees, colorful wildflowers, and even spotted a deer. Timmy enjoyed the fresh air and the adventure. When they returned to the campsite, they cooked breakfast over the campfire. Timmy felt happy and refreshed from his camping trip and looked forward to more outdoor adventures in the future.",
        translation: "提米和他的家人去森林裡露營。他們搭起了帳篷，並生了一堆營火。提米烤了棉花糖，並製作了非常美味的夾心餅乾。晚上，他們圍坐在營火旁，講故事和唱歌。提米聽著森林的聲音，比如蟋蟀的鳴叫和樹葉的沙沙聲。他喜歡仰望滿天星空。第二天早晨，提米和他的家人去遠足。他們看到了美麗的樹木、色彩斑斕的野花，甚至還看到了鹿。提米享受著新鮮的空氣和冒險之旅。當他們返回露營地時，他們在營火上做了早餐。提米對這次露營感到高興和精神煥發，並期待著未來更多的戶外冒險。"
    },
    {
        id: 6,
        title: 'No Pets Here',
        img: '/img/NOphoto.png',
        content: 'Timmy visited his friend Lily’s house, but Lily’s mom said, “No pets here.” Timmy was a little disappointed because he loved animals. Instead, Lily and Timmy played games inside. They created their own imaginary pets using toy blocks and stuffed animals. Timmy and Lily made up fun stories about their pretend pets going on exciting adventures. They had a great time playing together and making up new games. Timmy realized that even though there were no real pets, he could still have a lot of fun with his friend. He enjoyed his visit to Lily’s house and was excited to play again next time.',
        translation: '提米去拜訪他的朋友莉莉的家，但莉莉的媽媽說：「這裡不能養寵物。」提米有些失望，因為他很喜歡動物。不過，莉莉和提米在家裡玩起了遊戲。他們用積木和毛絨玩具創造了屬於自己的想像寵物。提米和莉莉編出有趣的故事，讓他們的假想寵物去經歷刺激的冒險。他們一起玩得很開心，還創造了很多新遊戲。提米明白，即使沒有真正的寵物，他還是可以和朋友玩得很愉快。他很享受這次拜訪莉莉家的經歷，並期待下一次的遊玩。'
    },
    {
        id: 7,
        title: 'Sick Day',
        img: '/img/NOphoto.png',
        content: 'Timmy was feeling sick and had to stay home from school. His mom made him a cozy bed on the couch with soft blankets and pillows. She made him some warm soup to help him feel better. Timmy watched his favorite cartoons and read storybooks to pass the time. His mom checked on him regularly and made sure he had everything he needed. After a few days of rest and care, Timmy started to feel better. He was happy to be getting back to his normal activities and looked forward to returning to school to see his friends. Timmy learned that resting and taking care of himself were very important when he was feeling under the weather.',
        translation: '提米感覺生病了，必須待在家裡不能去學校。他的媽媽在沙發上為他鋪了一個舒適的床，還給他蓋上柔軟的毯子和枕頭。媽媽還煮了熱湯給他喝，幫助他恢復健康。提米看著他最喜歡的卡通，還閱讀故事書來打發時間。媽媽經常來看他，確保他有一切所需。經過幾天的休息和照顧，提米開始感覺好多了。他很高興能回到正常的生活，期待著回到學校見到朋友。提米學到，當身體不適時，休息和照顧自己非常重要。'
    },
    {
        id: 8,
        title: 'Football Match',
        img: '/img/NOphoto.png',
        content: 'Timmy’s soccer team had an important match against another team. Timmy was excited and a little nervous. He had practiced hard and was ready for the game. During the match, Timmy ran fast and played with all his energy. His teammates worked together, passing the ball and defending their goal. Timmy made some great plays and even helped score a goal. The game was intense, and Timmy’s team played their best. At the end of the match, they didn’t win, but Timmy was proud of how they played. They congratulated each other and celebrated their effort. Timmy felt happy and learned the value of teamwork and perseverance.',
        translation: '提米的足球隊有一場重要的比賽要對陣另一支球隊。提米既興奮又有點緊張。他努力練習，準備好了比賽。比賽中，提米全力奔跑，發揮了全部精力。他的隊友們齊心協力，傳球並防守球門。提米做出了一些精彩的表現，甚至幫助球隊得分。比賽非常激烈，提米的隊伍全力以赴。比賽結束時，他們雖然沒有贏，但提米為他們的表現感到驕傲。他們互相祝賀，並慶祝他們的努力。提米感到很快樂，也學到了團隊合作和堅持的重要性。'
    },
    {
        id: 9,
        title: 'Back to School',
        img: '/img/NOphoto.png',
        content: 'The first day of school arrived, and Timmy was excited to see his friends again. He wore his new backpack and had a special lunchbox. Timmy met his new teacher, Ms. Clark, and she introduced them to their classroom. They played icebreaker games and talked about their summer vacations. Timmy enjoyed hearing about his friends’ adventures and sharing his own. Ms. Clark explained the class rules and the fun activities they would do. Timmy was happy to be back at school and looked forward to learning new things. He felt excited about the new school year and the opportunities it would bring.',
        translation: '開學的第一天到了，提米很興奮能再次見到他的朋友們。他背上了新書包，帶了一個特別的午餐盒。提米見到了他的新老師克拉克女士，她帶著他們參觀了教室。他們玩了破冰遊戲，還聊了他們的暑假經歷。提米很享受聽朋友們講述他們的冒險經歷，並分享自己的故事。克拉克女士解釋了班級規則和即將進行的有趣活動。提米很高興能回到學校，期待著學習新知識。他對新學年的到來和可能的機會感到興奮。'
    },
    {
        id: 10,
        title: 'The Robot',
        img: '/img/NOphoto.png',
        content: 'Timmy received a robot-building kit for his birthday. He was thrilled and started working on it right away. Following the instructions carefully, he assembled all the pieces and built a cool robot. When he turned it on, the robot moved and lit up, which amazed Timmy. He programmed the robot to perform simple tasks like picking up small objects and following a path. Timmy showed his creation to his family, who were impressed by his work. He felt proud of his robot and excited about the possibilities of building more robots in the future. Timmy’s creativity and curiosity led to a fantastic new hobby.',
        translation: '提米生日那天收到了一個機器人組裝套件。他感到非常興奮，立即開始動手。按照說明仔細組裝，他將所有零件組合起來，製作出了一個很酷的機器人。當他打開開關，機器人開始移動並發光，這讓提米感到驚奇。他還給機器人編程，讓它執行一些簡單的任務，比如撿起小物品和沿路徑行走。提米將他的作品展示給家人，他們對他的工作感到印象深刻。他為自己的機器人感到自豪，並對未來製作更多機器人的可能性感到興奮。提米的創造力和好奇心帶來了一個奇妙的新愛好。'
    },
    {
        id: 11,
        title: 'Nell’s Books',
        img: '/img/NOphoto.png',
        content: 'Nell loved reading books and had a special shelf in her room filled with her favorites. One day, she discovered a new book about a magical adventure. As she read, she was transported to a fantastical world full of exciting characters and adventures. Nell enjoyed the story so much that she wanted to share it with her friends. She invited them over for a book club meeting where they discussed their favorite parts and talked about the characters. Nell was delighted to see her friends enjoying the book and sharing their own reading experiences. The book club became a regular activity, and Nell looked forward to discovering and discussing new stories with her friends.',
        translation: '奈爾喜歡閱讀書籍，她的房間裡有一個特別的書架，擺滿了她最喜歡的書。一天，她發現了一本關於一次神奇冒險的新書。當她閱讀時，她被帶到了一個充滿令人興奮的角色和冒險的奇幻世界。奈爾非常喜歡這個故事，她想和朋友分享。她邀請他們來參加一次讀書俱樂部會議，在會議上，他們討論了自己最喜歡的部分，並談論了故事中的角色。奈爾很高興看到朋友們喜歡這本書，並分享自己的閱讀經歷。讀書俱樂部成為了一個固定的活動，奈爾期待著和朋友一起發現和討論新故事。'
    },
    {
        id: 12,
        title: 'Little Monsters',
        img: '/img/NOphoto.png',
        content: 'Timmy and his sister had a fun game with their little toy monsters. They created a story where the monsters went on a magical adventure in a faraway land. Timmy and his sister imagined different challenges for the monsters, like crossing a river or finding hidden treasure. They used their creativity to come up with exciting scenarios and made up fun dialogues for their monsters. Timmy enjoyed using his imagination and playing with his sister. They spent hours creating and exploring new adventures with their little monsters. At the end of the day, Timmy felt happy about the creative play and looked forward to more imaginative games.',
        translation: '提米和他的妹妹和他們的小玩具怪獸玩了一個有趣的遊戲。他們編了一個故事，怪獸在遙遠的土地上進行了一次神奇的冒險。提米和他的妹妹為怪獸想象了不同的挑戰，比如穿過一條河或尋找隱藏的寶藏。他們用自己的創造力想出了令人興奮的情節，並為他們的怪獸編造了有趣的對話。提米喜歡運用自己的想像力和和妹妹一起玩。他們花了幾個小時創造和探索他們的小怪獸的新冒險。一天結束時，提米對這種創意遊戲感到高興，並期待著更多富有想像力的遊戲。'
    }
];


export function getArticleById(id) {
    return articles.find(article => article.id === parseInt(id));
}

export default articles;
