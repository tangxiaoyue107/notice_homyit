<template>
    <div id="index">
        <!--header部分-->
    <header id="header">
        <div id="logo">
            <img :src="Logo" alt="">
        </div>
        <nav>
            <!--中间导航栏-->
            <ul class="firstHeader">
                <li>
                    <a href="/index.html">首页</a>
                </li>
                <li v-for="list in firstHead" :key="list">
                    <div class="all">
                        <a href="">{{list}}</a>
                        <div class="triangle"></div>
                    </div>
                    <div class="borderBox">
                        <ul class="secondHeader">
                            <li>
                                <a href="/introduction.html" class="leval2">简介</a>
                            </li>
                            <li>
                                <a href="/notice.html" class="leval2">通知</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/contact.html">联系我们</a>
                </li>
            </ul>
        </nav>
        <!--头像部分二级导航栏-->
        <div id="avatar">
            <div class="face">
                <img :src="imgPath" alt="">
            </div>
            <div class="triangle"></div>
            <div v-if="flag" class="faceHeader">
                <ul>
                    <li>
                        <a href="/login.html" class="leval2">登录</a>
                        <a href="/login.html" class="leval2">注册</a>
                    </li>
                </ul>
            </div>
            <div v-else class="faceHeader">
                <ul>
                    <li>
                        <a href="/date.html" class="leval2">消息中心</a>
                        <a href="/index.html" class="leval2" @click="out">退出</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>


    <!--中间部分-->
    <!-- <script src="js/slide.js"></script> -->
    <main id="main">
        <!--活动领导人介绍-->
        <div id="leader">
            <div class="word">
                <h4>STYLE01</h4>
                    <p>活动组织人/领导人介绍</p>
            </div>
            <div id="top" class="callbacks_container">
                <ul class="rslides callbacks callbacks1" id="slider1">
                    <li class="rslides_li" v-for="(item,key) in leaderData" :key="key">
                        <div class="slider-top">
                            <img class="headlook" :src="item.image" alt="">
                            <p>{{item.text}}</p>
                            <img class="nots" src="../../assets/img/blacknotice.png" alt="">
                            <p class="below">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
                <a href="" class="callbacks_nav callbacks1_nav  prev">Previous</a><a href="" class="callbacks_nav callbacks1_nav next">Next</a>
                <ul class="callbacks_tabs callbacks1_tabs">
                    <li class="callbacks1_s1 callbacks_here"><a href="" class="callbacks1_s1">1</a></li>
                    <li class="callbacks1_s2"><a href="" class="callbacks1_s2">2</a></li>
                    <li class="callbacks1_s3"><a href="" class="callbacks1_s3">3</a></li>
                </ul>
            </div>
        </div>


        <!--组织宣传-->
        <div id="propagate">
            <div class="word">
                <h4>STYLE02</h4>
                    <p>组织宣传</p>
            </div>
            <div id="box">
                <carousel/>
            </div>
        </div>


        <!--学生会活动-->
        <div>
            <div class="word">
                <h4>STYLE03</h4>
                    <p>学生会活动</p>
            </div>
            <div id="xshActivity">
                <div class="xshBox" v-for="(item,key) in xshData" :key="key">
                    <img :src="item.image" alt="">
                    <div class="pAll">
                        <p class="xshText">{{item.text}}</p>
                        <h3>{{item.o_name}}</h3>
                            <p>{{item.p_name}}</p>
                    </div>
                </div>
            </div>
        </div>


        <!--社团活动-->
        <div>
            <div class="word">
                <h4>STYLE04</h4>
                    <p>社团活动</p>
            </div>
            <div id="stActivity" class="callbacks_container">
                <ul class="rslides callbacks callbacks1" id="slider2">
                    <li class="rslides_li" v-for="(item,key) in stData" :key="key">
                        <div class="slider-top stslide">
                            <img class="stimg" :src="item.image" alt="">
                            <div id="stBox">
                                <p>{{item.text}}</p>
                                <h3>{{item.o_name}}</h3>
                                <p class="below">{{item.p_name}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <a href="" class="callbacks_nav callbacks1_nav  prev">Previous</a><a href="" class="callbacks_nav callbacks1_nav next">Next</a>
                <ul class="callbacks_tabs callbacks1_tabs">
                    <li class="callbacks1_s1 callbacks_here"><a href="" class="callbacks1_s1">1</a></li>
                    <li class="callbacks1_s2"><a href="" class="callbacks1_s2">2</a></li>
                    <li class="callbacks1_s3"><a href="" class="callbacks1_s3">3</a></li>
                </ul>
            </div>
        </div>


        <!--党站活动-->
        <div>
            <div class="word">
                <h4>STYLE05</h4>
                    <p>党站活动</p>
            </div>
            <div id="dzActivity">
                <ul class="rslides callbacks callbacks1" id="slider3">
                    <li class="rslides_li" v-for="(item,key) in dzData" :key="key">
                        <div class="slider-top dzslide">
                            <div class="dzBox">
                                <img :src="item.image1" alt="">
                                <div class="dzpAll">
                                    <p>{{item.text1}}</p>
                                    <hr>
                                    <h3>{{item.o_name1}}</h3>
                                    <p>{{item.p_name1}}</p>
                                </div>
                            </div>
                            <img :src="item.picture1" alt="">
                            <img :src="item.picture2" alt="">
                        </div>
                        <div class="slider-top dzslide">
                            <div class="dzBox">
                                <img :src="item.image2" alt="">
                                <div class="dzpAll">
                                    <p>{{item.text2}}</p>
                                    <hr>
                                    <h3>{{item.o_name2}}</h3>
                                    <p>{{item.p_name2}}</p>
                                </div>
                            </div>
                            <img :src="item.picture3" alt="">
                            <img :src="item.picture4" alt="">
                        </div>
                    </li>
                </ul>
                <a href="" class="callbacks_nav callbacks1_nav  prev">Previous</a><a href="" class="callbacks_nav callbacks1_nav next">Next</a>
                <ul class="callbacks_tabs callbacks1_tabs">
                    <li class="callbacks1_s1 callbacks_here"><a href="" class="callbacks1_s1">1</a></li>
                    <li class="callbacks1_s2"><a href="" class="callbacks1_s2">2</a></li>
                    <li class="callbacks1_s3"><a href="" class="callbacks1_s3">3</a></li>
                </ul>
            </div>
        </div>


        <!--科创平台活动-->
        <div>
            <div class="word">
                <h4>STYLE06</h4>
                    <p>科创平台活动</p>
            </div>
            <div id="kcptActivity">
                <div class="kcptBox" v-for="(item,key) in kcptData" :key="key">
                    <img :src="item.image" alt="">
                    <div class="kcptpAll">
                        <p class="xshText">{{item.text}}</p>
                        <span>{{item.label}}</span>
                        <div class="kcptright">
                            <p class="pcolor">{{item.o_name}}</p>
                            <p>{{item.p_name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!--底部-->
    <footer>
        <div id="school">
            <h4>SCHOOL PROFILE</h4>
            <p>江西师范大学是教育部、江西省人民政府共建高校和中西部高校基础能力建设工程高校。学校融文学、历史学、哲学、经济学、管理学、 法学、理学、工学、教育学、艺术学等十大学科门类于一体，位于具有深厚历史文化底蕴，素有“物华天宝、人杰地灵"美誉的江西省省会南昌，对江西的政治、经济、文化和社会发展有较大影响，被江西省人民政府确定为优先发展的省属重点(师范)大学。</p>
            <img src="../../assets/img/jxsd.png" alt="">
        </div>
        <div id="subject">
            <h4>SUBJECT</h4>
            <hr>
            <div class="subs">
                <p>文学</p>
                <p>历史学</p>
                <p>哲学</p>
                <p>经济学</p>
                <p>管理学</p>
                <p>法学</p>
                <p>理学</p>
                <p>工学</p>
                <p>教育学</p>
                <p>艺术学</p>
            </div>
        </div>
        <div id="twitter">
            <h4>TWITTER WIDGET</h4>
            <hr>
            <div class="twall">
                <div>
                    <img src="../../assets/img/home.png" alt="">
                    <p>官方网址：HTTP://ZS.JXNU.EDU.CNHTTP://WWW.JXNU.EDU.CN/</p>
                </div>
                <div>
                    <img src="../../assets/img/phone.png" alt="">
                    <p>官方电话：0791-88120152，0791-88120151
                    </p>
                </div>
                <div>
                    <img src="../../assets/img/email.png" alt="">
                    <p>电子邮箱：JXSDZB@126.COM</p>
                </div>
            </div>
        </div>
        <div id="contact">
            <h4>CONTACT</h4>
            <hr>
            <div id="imgBox">
                <img src="../../assets/img/lookfor.png" alt="">
                <img src="../../assets/img/home3.png" alt="">
                <img src="../../assets/img/home4.png" alt="">
                <img src="../../assets/img/home1.png" alt="">
                <img src="../../assets/img/home2.png" alt="">
                <img src="../../assets/img/add.png" alt="">
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
import carousel from '../../components/carousel'
export default {
    name:'Index',
    data:function(){
        return {
            Logo: require('../../assets/img/notice.png'),
            firstHead: ['学生会', '党员服务站', '社团', '科创平台'],
            secondHead: ['简介', '通知'],
            goin: ['登录', '注册','消息中心'],
            wentout: ['昵称', '消息中心', '退出'],
            flag: false,
            imgPath: require('../../assets/img/1.jpg'),
            leaderData: [{
                "image": require('../../assets/img/banner1.jpg'),
                "text": "Si vous voulez mon avis concernant l'extremite observee, il est necessaire d'etudier la globalite des solutions de bon sens, parce que la nature a horreur du vide.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "name": "校职协会长/吴系挂"
            },
            {
                "image": require('../../assets/img/banner2.jpg'),
                "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                "name": "校职协会长/吴宵光"
            },
            {
                "image": require('../../assets/img/banner3.jpg'),
                "text": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.",
                "name": "校职协会长/陈老师"
            }
        ],
        xshData: [{
                "organization_id": "1",
                "image": require('../../assets/img/1.jpg'),
                "text": "为积极开展我院迎新工作，现决定建立20级计算机信息工程学院迎新群，该群针对于专业录取前对本学院专业感兴趣的20级学弟学妹，请大家积极拉对本院感兴趣的20级学弟学妹进群。",
                "o_name": "学生会办公室",
                "p_name": "小怪兽"
            },
            {
                "organization_id": "1",
                "image": require('../../assets/img/1.jpg'),
                "text": "请各团支书于8月16日21点前将班级团队名单、“红色走读”竞赛活动方案，“云上游”作品以及“云上游”知识问答页面完成截图于8月8日19点前，打包发至组织部",
                "o_name": "学生会组织部",
                "p_name": "小怪兽"
            },
            {
                "organization_id": "1",
                "image": require('../../assets/img/1.jpg'),
                "text": "请各班同学按照下面电子汇总表中的格式填写完整，最后只需将电子汇总表发送进邮箱即可。电子汇总表命名格式不变。注意纸质表需要提交所有的社会实践考核表，每人两份。",
                "o_name": "学生会文艺部",
                "p_name": "小怪兽"
            }, {
                "organization_id": "1",
                "image": require('../../assets/img/1.jpg'),
                "text": "为全面提高我院大学生的思想政治修养和综合素质，经院团委学生会决定开展2020年暑假社会实践工作。请有意愿参与暑假社会实践的同学上交一份社会实践考核表，此表将作为第二课堂学分的加分依据。",
                "o_name": "学生会组织部",
                "p_name": "小怪兽"
            }
        ],
        stData: [{
                "organization_id": "2",
                "image": require('../../assets/img/1.jpg'),
                "text": "环教部环教本周日(明天)上午8点30有环教培训，具体地点待定(可能是地院)，有意愿的小孩请于今晚19点前私戳鸢尾。只有一个名额，先到先得～",
                "o_name": "蓝天环保社",
                "p_name": "小怪兽"
            },
            {
                "organization_id": "2",
                "image": require('../../assets/img/banner1.jpg'),
                "text": "10月15日在正大广场将举办迎新晚会，我们社团要求出一个舞蹈节目，明天上午9:00在惟义楼5302一起商量节目内容，请大家准时到场",
                "o_name": "街舞社",
                "p_name": "佘林生"
            },
            {
                "organization_id": "2",
                "image": require('../../assets/img/banner2.jpg'),
                "text": "接到其他大学的邀请，将于本周六16:00在八一广场切磋交流轮滑技术，这是一个难得的切磋机会，希望大家都能准时到场，有事情的同学请提前一天向我请假",
                "o_name": "轮滑社",
                "p_name": "初唐四"
            }
        ],
        dzData: [{
                "organization_id": "3",
                "image1": require('../../assets/img/1.jpg'),
                "text1": "为了更好地学习党中央十八大精神，将于6月10日晚上7点整在图文信息中心6203会议室举办“优秀大学生党员服务标兵”暨先进、进步单位颁奖典礼活动。请大家准时到场",
                "o_name1": "党站组织部",
                "p_name1": "小怪兽",
                "image2": require('../../assets/img/banner1.jpg'),
                "text2": "小萌新们！为加强校职协全体凝聚力，方便以后工作，大家要把群里的每个人加为好友，前十名率先加完校职协全体好友的可领取奶茶一杯！",
                "o_name2": "党站组织部",
                "p_name2": "佘林生",
                "picture1": require('../../assets/img/banner2.jpg'),
                "picture2": require('../../assets/img/banner3.jpg'),
                "picture3": require('../../assets/img/banner2.jpg'),
                "picture4": require('../../assets/img/banner3.jpg')
            },
            {
                "organization_id": "3",
                "image1": require('../../assets/img/1.jpg'),
                "text1": "为了使新学干尽快融入这个大家庭,同时培养初步的团队合作能力，将于4月27号下午三点(遇雨顺延，有更改会提前通知)在正大广场举办户外联谊。",
                "o_name1": "党站组织部",
                "p_name1": "蒋雪儿",
                "image2": require('../../assets/img/banner2.jpg'),
                "text2": "新一代的青年应当传承红色精神，了解革命先烈光辉的历史，现定于10.12（本周星期六）15:00在惟义楼7102召开红色故事会，请大家准备一个相关的小故事进行分享",
                "o_name2": "党站组织部",
                "p_name2": "蒋依依",
                "picture1": require('../../assets/img/banner2.jpg'),
                "picture2": require('../../assets/img/banner3.jpg'),
                "picture3": require('../../assets/img/banner2.jpg'),
                "picture4": require('../../assets/img/banner3.jpg')
            }, {
                "organization_id": "3",
                "image1": require('../../assets/img/1.jpg'),
                "text1": "暑期悄然而至，相信大家在这个学期收获甚多，现定于7月1号9:00在惟义楼召开学期末心得交流分享会，和大家一起交流自己的经验感想。",
                "o_name1": "党站组织部",
                "p_name1": "杨习",
                "image2": require('../../assets/img/banner3.jpg'),
                "text2": "小萌新们！为加强校职协全体凝聚力，方便以后工作，大家要把群里的每个人加为好友，前十名率先加完校职协全体好友的可领取奶茶一杯！",
                "o_name2": "党站组织部",
                "p_name2": "佘林生",
                "picture1": require('../../assets/img/banner2.jpg'),
                "picture2": require('../../assets/img/banner3.jpg'),
                "picture3": require('../../assets/img/banner2.jpg'),
                "picture4": require('../../assets/img/banner3.jpg')
            }
        ],
        kcptData: [{
                "organization_id": "4",
                "image": require('../../assets/img/1.jpg'),
                "text": "学弟学妹们好，现定于10.13（本周星期日）上午9:00在惟义楼7102召开宏奕工作室第二次宣讲会。本次宣讲会将对后期培训安排和宏奕三个发展方向进行更加细致的介绍和答疑。欢迎学弟学妹们参加，请大家提前10分钟到场签到。",
                "label": "计算机信息工程学院",
                "o_name": "宏奕工作室",
                "p_name": "小怪兽"
            },
            {
                "organization_id": "4",
                "image": require('../../assets/img/1.jpg'),
                "text": "考虑到大部分人已经明确自己的学习方向，为使培训更具针对性同时提高培训效率，这学期培训中期我们将进行分组，UI组的同学参与前端的培训。分组之前，培训模式与上学期一样，大家都需要参与，这样有助于大家更好地理解前后端从而进行选择。分组按照各自意愿，分组之后，前后端分开并行培训。",
                "label": "计算机信息工程学院",
                "o_name": "宏奕工作室",
                "p_name": "小怪兽"
            },
            {
                "organization_id": "4",
                "image": require('../../assets/img/1.jpg'),
                "text": "学弟学妹们，第九期培训即将开始。由于受疫情影响，近期培训采用钉钉线上直播方式进行，时间：本周六（3.7）上午 9:00-11:30，Ps：本次分享Js相关内容，请大家做好准备，届时会有签到安排。",
                "label": "计算机信息工程学院",
                "o_name": "宏奕工作室",
                "p_name": "小怪兽"
            }, {
                "organization_id": "4",
                "image": require('../../assets/img/1.jpg'),
                "text": "本周定于12月7日（本周六）上午9点在惟义楼W7302举办沙龙分享活动，分享内容为表单的应用和CSS的高级应用。各班班长、团支书会统一安排签到，请大家准时到场。",
                "label": "计算机信息工程学院",
                "o_name": "宏奕工作室",
                "p_name": "小怪兽"
            }

        ]

        }
    },
    components: {
        carousel
    },
    methods:{
        out(){
            location.reload;
            this.flag=true;
            
        }
    }
}
</script>

<style>
    @import '../../assets/css/index.css';
    @import '../../assets/css/indexnav.css';
    @import '../../assets/css/slide.css';
/* header{
 background-image: url(../../assets/img/banner2.jpg);
 height: 800px;
} */
</style>


