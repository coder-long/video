let express = require('express')
let bodyParser = require('body-parser')
let app = express()

var cors = require('cors')
app.use(cors())


app.use(bodyParser.json()) //前端post提交的代码为json格式的  "{name:'asd'}"
app.use(bodyParser.urlencoded({ //处理前端表单post "a=1;b=2"
    extended: true
}))


let move = { //视频数据
    "code": 200,
    "text": "视频列表获取成功",
    "value": {
        "limit": 15,
        "result": [{
            "_id": "5f3d0e9e1d7dbe646e204c6d",
            "videoTitle": "私家法医第二季",
            "director": "",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2019-07/15634222840.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "杨希,亚瑞斯,艾迪,斯比安",
            "video_rate": 9.9,
            "update_time": "2019-07-18 11:54:08",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "FOX宣布续订新剧《私家法医》第二季。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c3a",
            "videoTitle": "波尔达克第二季",
            "director": "查理,帕尔默",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-05/15045991650.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "艾丹,特纳,埃莉诺,汤姆林森,约翰,奈特斯,菲尔,戴维斯",
            "video_rate": 0,
            "update_time": "2019-07-07 09:59:10",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "&nbsp;　《波尔达克》第二季于2015年9月在英国康沃尔郡开机，新季共10集，预计拍摄周期在七个半月左右，有望于2016年下半年回归。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c70",
            "videoTitle": "善地第三季",
            "director": "",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-10/15386155900.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "克里斯汀,贝尔,特德,丹森,威廉,杰克森,哈珀,曼尼,贾希尼托",
            "video_rate": 0,
            "update_time": "2019-01-25 19:44:22",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2018",
            "introduce": "Ted Danson﹑Kristen Bell等人主演的NBC高评喜剧《#善地# The Good Place》被续订第三季，第三季仍然是13集。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c33",
            "videoTitle": "增速驱动",
            "director": "羽住英一郎",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-12/15459920740.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "东出昌大,新田真剑佑,森川葵,北村匠海",
            "video_rate": 0,
            "update_time": "2018-12-28 18:13:22",
            "language": "",
            "sub_region": "日本",
            "rel_time": "2018",
            "introduce": "羽住英一郎([海猿])执导的汽车拉力赛题材影片[增速驱动](OVER DRIVE，暂译)发布新剧照。该片由东出昌大、新田真剑佑主演，东出饰演机械师哥哥，真剑佑则出演好胜的天才赛车手弟弟，两人共同为取得WRC世界冠军而努力。该片将于6月1日日本上映。",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "剧情片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c64",
            "videoTitle": "暗影猎人第二季",
            "director": "马修,海斯廷斯",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-16/201709161505549321.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "多米尼克,谢尔伍德,凯瑟琳,麦克纳马拉,马修,达达里奥,岑勇康",
            "video_rate": 0,
            "update_time": "2018-12-28 00:02:33",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2017",
            "introduce": "《暗影猎人》改编自卡桑德拉·克莱尔（Cassandra Clare）的流行青少年系列小说《圣杯神器》。剧中，凯瑟琳·麦克纳马拉（Katherine McNamara）饰演克莱尔（Clary）。在18岁生日那天，她发现自己实际上是人类和天使的孩子，是一名暗影猎人。她的主要人物就是要保护人类，并时刻抵御恶魔和其他黑暗生物。母亲被绑架后，她和其他暗影猎人杰斯（Jace）、艾里克（Alec）、伊莎贝尔（Isabelle）和她的好朋友西蒙（Simon），以及魔法师玛格努斯·贝恩（Magnus Bane）一起进入了全新的世界。《暗影猎人》第一季首播观众为290万人。据Freeform称，这是该台受18-49岁观众（160万人）欢迎的第二大剧，首播也创了50岁以下男性最高收视率。该剧获得续订的消息通过脸书直播聊天宣布，此举很符合以年轻人为主导的网络口味。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c5e",
            "videoTitle": "幽冥",
            "director": "Nic.Mathieu",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-05/15045978290.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "艾米莉,莫迪默,马克斯,马蒂尼,詹姆斯,戴尔,布鲁斯,格林伍德",
            "video_rate": 0,
            "update_time": "2018-12-11 13:31:06",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "A sci-fi/thriller story centered on a special-ops team that is dispatched to fight supernatural beings that have taken over New York City.",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "动作片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c67",
            "videoTitle": "摔跤吧！爸爸",
            "director": "Nitesh.Tiwari",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-05/15045973090.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "阿米尔,汗,Sakshi.Tanwar,Vivan.Bhatena",
            "video_rate": 0,
            "update_time": "2018-12-07 15:14:02",
            "language": "其它",
            "sub_region": "印度",
            "rel_time": "2016",
            "introduce": "这是一部女性为自己争取命运自主权并赢得尊严的励志喜剧电影。马哈维亚·辛格·珀尕是印度国家摔跤冠军，却因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——为印度赢得世界级金牌。不料命运捉弄让他生了四个女儿，偶然的机会他开始培养女儿学习摔跤，过程中发生各种趣事，同时面对社会的歧视，亲友的嘲笑等困境会压垮这队父女军吗？他们能否顶住舆论的压力、化解隔阂、颠覆保守的价值观观赢得最后的胜利吗？",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "剧情片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c3d",
            "videoTitle": "处女情缘第三季",
            "director": "",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-05/15045990900.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "吉娜,罗德里格兹,安德里亚,纳维多,耶尔,格洛格拉斯",
            "video_rate": 0,
            "update_time": "2018-10-18 13:54:54",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "&nbsp;CW已续订《处女情缘》第三季。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c4e",
            "videoTitle": "童话镇第六季",
            "director": "马克,米罗",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-09/15375992140.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "詹妮弗,莫里森,拉娜,帕瑞娅,金妮弗,古德温,乔希,达拉斯",
            "video_rate": 0,
            "update_time": "2018-09-22 14:42:24",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "ABC正式宣布续订《童话镇》第五季。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c61",
            "videoTitle": "僵尸国度第三季",
            "director": "Abram,Cox,Dan,Merchant,约翰,海姆斯",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-09/15363242680.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "凯尼塔,史密斯,奈特,赞,拉塞尔,霍奇金森,基斯,阿兰",
            "video_rate": 0,
            "update_time": "2018-09-07 20:37:53",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "Syfy宣布续订旗下僵尸题材剧集《僵尸国度》第三季，并且依然给予了15集的高数量，2016年播出。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c49",
            "videoTitle": "杀戮都市：O",
            "director": "佐藤敬一,川村泰",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-07/15309574952.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "小野大辅,市道真央,郭智博,早见沙织",
            "video_rate": 0,
            "update_time": "2018-07-07 17:28:26",
            "language": "日语",
            "sub_region": "日本",
            "rel_time": "2016",
            "introduce": "高中生加藤胜（小野大辅 配音）和弟弟过着相依为命的生活，某日，加藤胜所在的地铁站遭到了无差别杀人犯的袭击，为了救人，加藤胜身中数刀不幸身亡，而当他再度睁开双眼之时，却发现自己完好无损的站在一个陌生的房间里，眼前是一个黑色的诡异圆球。和加藤胜在一起的，还有下平蕾佳（早见沙织 配音）、西丈一郎（郭智博 配音）和铃木良一（池田秀一 配音）三人，他们和加藤胜一样，都是已死之人。蕾佳告诉满头雾水的加藤胜，黑色的圆球名叫“GANTZ”，而他们所要做的，是等待圆球下达的命令。这一次，四人被传送到了大阪，他们所要面对的，是叫做“滑瓢”的怪物以及一场盛大的百鬼夜行，只有在GANTZ所规定的时间内杀掉所有的怪物，加藤胜才能够得到再次回到弟弟身边的机会。",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "日韩动漫"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c43",
            "videoTitle": "玩尽杀绝4：四人组",
            "director": "Andy,Hurst",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-07/15309574951.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "Jillian,Murray,Ashley,Parker,Angel,Jessie,Nickson,Kourtney,Brown",
            "video_rate": 0,
            "update_time": "2018-07-07 17:26:52",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2010",
            "introduce": "腰缠万贯的酒店大亨泰德（卡梅隆·达多 Cameron Daddo 饰）在一次赛车比赛之中死于意外，负责调查此事的探员弗兰克（David W. LeBlanc 饰）怀疑这一切并非偶然，而是一宗经过了精心策划的阴谋。而隐藏在背后的真凶，很可能就是一直对泰德怀恨在心的卡森（Ashley Parker Angel 饰），然而，心怀鬼胎的弗兰克，很快就拜倒在了卡森的贿赂之下。参与这起阴谋的还有卡森的女友瑞秋（Jessie Nickson 饰）和好友布兰迪（吉莲·默瑞 Jillian Murray 饰），而这两个身份复杂的女人又有着各自的秘密。原来，瑞秋一直觊觎着卡森的家产，而泰德是害死布兰迪父亲的罪魁祸首。在这场以生命为赌注的比赛之中，真正能够胜出活到最后的只有一人。",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "动作片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c40",
            "videoTitle": "玩尽杀绝3：钻石计划",
            "director": "Jay,Lowi",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-07/15309574950.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "林登,阿什比,迪娜,迈耶",
            "video_rate": 0,
            "update_time": "2018-07-07 17:25:34",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2005",
            "introduce": "你受得了坏女孩的诱惑吗……玛丽的母亲过世后留下两个完美的钻石，但继父却对她的继承权提出异议。此时继父因涉嫌疑犯强奸被捕入狱，玛丽藉口要向被害人受莲娜游说撤销诉讼，但事实上，玛丽并不想营救继父，而是与爱莲娜串打通一次电话想夺取钻石，只是这一切又牵扯出十多年前的一粧约会强奸案。",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "动作片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c46",
            "videoTitle": "变形金刚3",
            "director": "迈克尔,贝",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2018-07/15309509580.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "希亚,拉博夫,罗茜,汉丁顿-惠特莉,乔什,杜哈明,泰瑞斯,吉布森",
            "video_rate": 0,
            "update_time": "2018-07-07 16:09:11",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2011",
            "introduce": "距今50多年前，一艘来自赛博坦的飞船坠落月球，由此引发了美苏两国的太空竞赛。人类争相登上月球，只为一探飞船残骸中的秘密。时间回到21世纪初，经过几番征战，汽车人终于挫败霸天虎的入侵，继而与人类合作，共同保卫美丽的地球。然而发生在切尔诺贝利的事件却将尘封已久的月球计划重新摆到桌面。为了防止霸天虎找到能量柱为非作歹，擎天柱与战友飞赴月球，更从当年的飞船中救出了汽车人的先代领导者——御天敌。御天敌是能量柱的发明者，将上百根能量柱集合在一起便可制造太空桥，实现物质的瞬间传送。忙着找工作以及和女友卡莉（罗茜·汉丁顿-惠特莉Rosie Huntington-Whiteley 饰）经营爱情的山姆（希亚·拉博夫 Shia LaBeouf 饰）无可避免地卷入其中，他渐渐发现霸天虎的操纵一切的阴谋，却不知更大的阴谋和危机隐藏在那月影背后……",
            "remind_tip": "HD",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "科幻片"
        }, {
            "_id": "5f3d0e9e1d7dbe646e204c6a",
            "videoTitle": "生死狙击第一季",
            "director": "西蒙,赛伦,琼斯",
            "videoImage": "https://images.cnblogsc.com/pic/upload/vod/2017-09-05/15045971940.jpg",
            "poster": "",
            "video_tags": [],
            "performer": "瑞恩,菲利普,埃迪,麦克林托克,欧玛,艾普斯,辛希亚,阿戴-罗宾森",
            "video_rate": 8.8,
            "update_time": "2018-06-25 18:28:45",
            "language": "英语",
            "sub_region": "美国",
            "rel_time": "2016",
            "introduce": "USA的《生死狙击 Shooter》由Mark Wahlberg当执行制片﹑John Hlavin编剧，电视台早前正式预订。该剧确定在美国时间7月19日首播。Ryan Phillippe（《秘密与谎言 Secrets and Lies》）饰演前海军陆战队狙击手Bob Lee Swagger，他被召参与秘密任务，但途中却被误会是刺杀总统的凶手。Cynthia Addai-Robinson饰演女主演FBI探员Nadine Memphis，是个充满野心﹑有强大直觉的年轻FBI探员，在局中是个新星，不过她的性格也在过去惹上麻烦。原本调查主角的案件是她升职的高速通道，但 她发现背后实际有被隐藏的阴谋，而因为和主角试图拆破该阴谋，她因而被追杀并逼不得已下与主角组成同盟。该角色原本由Emily Rios饰演。Omar Epps饰演Isaac Johnson，是前海军陆战队，亦是Bob Lee Swagger的前指挥官。现在是个美国特勤局特工，他征召主角参与秘密任务，却引致主角被追杀。David Marciano将饰演高级联邦调查局特工John Renlow，Nadine Memphis（Rios饰）的搭档，经过了一生仕途，他特别希望退休。早前演出《闪电侠 The Flash》的Shantel VanSanten饰演主角的妻子Julie Swagger，是个坚强的女子，在丈夫出征时，为女儿提供稳定生活。当辛苦工作的她等到主角回家后，却发现美好的梦想被立即打破。在《阿呆与阿瓜2 Dumb and Dumber To》演出的Tembi Locke，饰演循环角色FBI探员Claire Hopkins。Tom Sizemore饰演循环角色高级CIA特工Hugh Meachum，愿意为自己国家保持国际地位而干任何事。该剧在2007年Wahlberg主演的派拉蒙同名电影的基础上，由《黑夜传说4：觉醒》的编剧 John Hlavin改编。原著Stephen Hunter的小说《Point Of Impact》是关于Bob Lee Swagger (Phillippe饰演), 一名海军退役狙击手，被骗去参加所谓阻止刺杀总统的行动。",
            "remind_tip": "完结",
            "news_id": [],
            "popular": false,
            "allow_reply": false,
            "openSwiper": false,
            "display": true,
            "scource_sort": false,
            "video_type": "欧美剧"
        }],
        "total": 29
    }
}
let navList = {
    "code": 200,
    "text": "导航列表获取成功",
    "value": [{
        "_id": "5f3d0e37af2c016304a2979c",
        "name": "电影",
        "parent_id": false,
        "display": true,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,电影",
            "keywords": "功夫片，动作片，爱情片，福利片，科幻片，恐怖片，纪录片，战争片，微电影，喜剧片",
            "description": "最新电影抢先看，vip电影"
        },
        "type": "nav_type",
        "index": 0,
        "children": [{
            "_id": "5f3d0e37af2c016304a2979d",
            "name": "动作片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "动作片",
                "description": "动作片"
            },
            "type": "nav_type",
            "index": 0
        }, {
            "_id": "5f3d0e37af2c016304a2979e",
            "name": "喜剧片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "喜剧片",
                "description": "喜剧片"
            },
            "type": "nav_type",
            "index": 1
        }, {
            "_id": "5f3d0e37af2c016304a2979f",
            "name": "爱情片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "爱情片",
                "description": "爱情片"
            },
            "type": "nav_type",
            "index": 2
        }, {
            "_id": "5f3d0e37af2c016304a297a0",
            "name": "科幻片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "科幻片",
                "description": "科幻片"
            },
            "type": "nav_type",
            "index": 3
        }, {
            "_id": "5f3d0e37af2c016304a297a1",
            "name": "恐怖片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "恐怖片",
                "description": "恐怖片"
            },
            "type": "nav_type",
            "index": 4
        }, {
            "_id": "5f3d0e37af2c016304a297a2",
            "name": "剧情片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "剧情片",
                "description": "剧情片"
            },
            "type": "nav_type",
            "index": 5
        }, {
            "_id": "5f3d0e37af2c016304a297a3",
            "name": "战争片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "战争片",
                "description": "战争片"
            },
            "type": "nav_type",
            "index": 6
        }, {
            "_id": "5f3d0e37af2c016304a297a4",
            "name": "记录片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "记录片",
                "description": "记录片"
            },
            "type": "nav_type",
            "index": 7
        }, {
            "_id": "5f3d0e37af2c016304a297a5",
            "name": "动画片",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "动画片",
                "description": "动画片"
            },
            "type": "nav_type",
            "index": 8
        }, {
            "_id": "5f3d0e37af2c016304a297a6",
            "name": "微电影",
            "parent_id": "5f3d0e37af2c016304a2979c",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电影",
                "keywords": "微电影",
                "description": "微电影"
            },
            "type": "nav_type",
            "index": 9
        }]
    }, {
        "_id": "5f3d0e37af2c016304a297a7",
        "name": "电视剧",
        "parent_id": false,
        "display": true,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,电视剧",
            "keywords": "最新美剧，热门韩剧，日剧，泰剧，国产剧，欧美剧",
            "description": "最新电视剧抢先看，vip热剧"
        },
        "type": "nav_type",
        "index": 1,
        "children": [{
            "_id": "5f3d0e37af2c016304a297a8",
            "name": "国产剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "国产剧",
                "description": "国产剧"
            },
            "type": "nav_type",
            "index": 0
        }, {
            "_id": "5f3d0e37af2c016304a297a9",
            "name": "香港剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "香港剧",
                "description": "香港剧"
            },
            "type": "nav_type",
            "index": 1
        }, {
            "_id": "5f3d0e37af2c016304a297aa",
            "name": "韩国剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "韩国剧",
                "description": "韩国剧"
            },
            "type": "nav_type",
            "index": 2
        }, {
            "_id": "5f3d0e37af2c016304a297ab",
            "name": "欧美剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "欧美剧",
                "description": "欧美剧"
            },
            "type": "nav_type",
            "index": 3
        }, {
            "_id": "5f3d0e37af2c016304a297ac",
            "name": "台湾剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "台湾剧",
                "description": "台湾剧"
            },
            "type": "nav_type",
            "index": 4
        }, {
            "_id": "5f3d0e37af2c016304a297ad",
            "name": "日本剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "日本剧",
                "description": "日本剧"
            },
            "type": "nav_type",
            "index": 5
        }, {
            "_id": "5f3d0e37af2c016304a297ae",
            "name": "海外剧",
            "parent_id": "5f3d0e37af2c016304a297a7",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,电视剧",
                "keywords": "海外剧",
                "description": "海外剧"
            },
            "type": "nav_type",
            "index": 6
        }]
    }, {
        "_id": "5f3d0e37af2c016304a297af",
        "name": "综艺",
        "parent_id": false,
        "display": true,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,综艺",
            "keywords": "热门综艺，日韩综艺，欧美综艺，港台综艺，内地综艺",
            "description": "最新综艺抢先看"
        },
        "type": "nav_type",
        "index": 2,
        "children": [{
            "_id": "5f3d0e37af2c016304a297b0",
            "name": "内地综艺",
            "parent_id": "5f3d0e37af2c016304a297af",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,综艺",
                "keywords": "内地综艺",
                "description": "内地综艺"
            },
            "type": "nav_type",
            "index": 0
        }, {
            "_id": "5f3d0e37af2c016304a297b1",
            "name": "港台综艺",
            "parent_id": "5f3d0e37af2c016304a297af",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,综艺",
                "keywords": "港台综艺",
                "description": "港台综艺"
            },
            "type": "nav_type",
            "index": 1
        }, {
            "_id": "5f3d0e37af2c016304a297b2",
            "name": "欧美综艺",
            "parent_id": "5f3d0e37af2c016304a297af",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,综艺",
                "keywords": "欧美综艺",
                "description": "欧美综艺"
            },
            "type": "nav_type",
            "index": 2
        }, {
            "_id": "5f3d0e37af2c016304a297b3",
            "name": "日韩综艺",
            "parent_id": "5f3d0e37af2c016304a297af",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,综艺",
                "keywords": "日韩综艺",
                "description": "日韩综艺"
            },
            "type": "nav_type",
            "index": 3
        }]
    }, {
        "_id": "5f3d0e37af2c016304a297b4",
        "name": "动漫",
        "parent_id": false,
        "display": true,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,动漫",
            "keywords": "国产动漫，日韩动漫，欧美动漫，港台动漫，海外动漫",
            "description": "最新，热门动漫抢先看"
        },
        "type": "nav_type",
        "index": 3,
        "children": [{
            "_id": "5f3d0e37af2c016304a297b5",
            "name": "国产动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "国产动漫",
                "description": "国产动漫"
            },
            "type": "nav_type",
            "index": 0
        }, {
            "_id": "5f3d0e37af2c016304a297b6",
            "name": "日韩动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "日韩动漫",
                "description": "日韩动漫"
            },
            "type": "nav_type",
            "index": 1
        }, {
            "_id": "5f3d0e37af2c016304a297b7",
            "name": "欧美动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "欧美动漫",
                "description": "欧美动漫"
            },
            "type": "nav_type",
            "index": 2
        }, {
            "_id": "5f3d0e37af2c016304a297b8",
            "name": "港台动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "港台动漫",
                "description": "港台动漫"
            },
            "type": "nav_type",
            "index": 3
        }, {
            "_id": "5f3d0e37af2c016304a297b9",
            "name": "海外动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "海外动漫",
                "description": "海外动漫"
            },
            "type": "nav_type",
            "index": 4
        }, {
            "_id": "5f3d0e37af2c016304a297ba",
            "name": "大陆动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "大陆动漫",
                "description": "大陆动漫"
            },
            "type": "nav_type",
            "index": 5
        }, {
            "_id": "5f3d0e37af2c016304a297bb",
            "name": "日本动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "日本动漫",
                "description": "日本动漫"
            },
            "type": "nav_type",
            "index": 6
        }, {
            "_id": "5f3d0e37af2c016304a297bc",
            "name": "美国动漫",
            "parent_id": "5f3d0e37af2c016304a297b4",
            "display": true,
            "nav_type": "video",
            "seo": {
                "title": "免费在线观看,动漫",
                "keywords": "美国动漫",
                "description": "美国动漫"
            },
            "type": "nav_type",
            "index": 7
        }]
    }, {
        "_id": "5f3d0e37af2c016304a297bd",
        "name": "福利",
        "parent_id": false,
        "display": true,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,福利",
            "keywords": "各种主播福利",
            "description": "直播福利，大秀福利"
        },
        "type": "nav_type",
        "index": 4
    }, {
        "_id": "5f3d0e37af2c016304a297be",
        "name": "伦理片",
        "parent_id": false,
        "display": false,
        "nav_type": "video",
        "seo": {
            "title": "免费在线观看,伦理片",
            "keywords": "日韩伦理，欧美伦理",
            "description": "最新最热伦理片"
        },
        "type": "nav_type",
        "index": 5
    }, {
        "_id": "5f3d0e37af2c016304a297bf",
        "name": "资讯",
        "parent_id": false,
        "display": true,
        "nav_type": "article",
        "seo": {
            "title": "新闻影视资讯大全",
            "keywords": "电影资讯,电视剧资讯,影视资讯",
            "description": "最新，热门动漫抢先看"
        },
        "type": "nav_type",
        "index": 6,
        "children": [{
            "_id": "5f3d0e37af2c016304a297c0",
            "name": "公告",
            "parent_id": "5f3d0e37af2c016304a297bf",
            "display": true,
            "nav_type": "article",
            "seo": {
                "title": "公告",
                "keywords": "公告",
                "description": "公告"
            },
            "type": "nav_type",
            "index": 0
        }, {
            "_id": "5f3d0e37af2c016304a297c1",
            "name": "新闻",
            "parent_id": "5f3d0e37af2c016304a297bf",
            "display": true,
            "nav_type": "article",
            "seo": {
                "title": "新闻影视资讯大全",
                "keywords": "新闻",
                "description": "新闻"
            },
            "type": "nav_type",
            "index": 1
        }]
    }]
}
let article = {
    "code": 200,
    "text": "文章列表获取成功",
    "value": {
        "limit": 15,
        "result": [{
            "_id": "5f433420a4612c37062754e9",
            "articleTitle": "800背后的真相到底是什么？",
            "articleImage": "/upload/cover/fa6367c1-77fd-49f5-8dda-8b62380f26d2.jpg",
            "poster": "/upload/poster/02b5f86e-3bd2-4131-a27d-7149bf5b2ee7.jpg",
            "article_type": "5f3d0e37af2c016304a297a3",
            "introduce": "看完800后的感言！！！原来背后都是政治！！！国破则家亡\n！！！！",
            "update_time": "2020-08-25 00:00",
            "video_id": [],
            "popular": false,
            "allow_reply": true,
            "openSwiper": true,
            "display": true
        }],
        "total": 1
    }
}

app.get('/api/movetype/list', (req, res) => {
    let position = req.query.position
    let list = move.value.result.find(item => {
        return position == item.sub_region
    })

    res.json({
        code: 0,
        msg: '成功',
        data: list
    })
})

app.get('/api/navList', (req, res) => {
    res.json({
        data: navList
    })
})

app.get('/api/one', (req, res) => { //获取一条数据
    // console.log(req.params);
    let id = req.query.video_id
    console.log(id);
    let one = move.value.result.find((item) => {
        return item._id == id
    })
    res.json({
        code: 0,
        msg: '成功',
        data: one
    })
})

app.post('/api/video/list', (req, res) => {
    let count = req.body.size
    // console.log(req.body);
    console.log(count);
    if (count == '') {
        res.json({
            code: 0,
            msg: '成功',
            data: move.value.result
        })
        return
    }

    let video = []
    move.value.result.forEach((item, index) => {
        if (index < count) {
            video.push(item)
        }
    })
    res.send({
        code: 0,
        msg: '成功',
        data: video
    })
})

app.get('/api/tv/lisst', (req, res) => {
    res.send({
        code: 0,
        msg: '成功',
        data: move.value.result
    })
})



app.listen(8848, () => console.log('服务开启在8848端口'))