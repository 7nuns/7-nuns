export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: "7nuns",                                     // 必须修改，github账户名



  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: "7nuns",                                        // 网站标题
  nickName: "7NUNS",                                           // 昵称
  domain: "https://7nuns,us",                        // rss域名
  SEO_title: " - 7NUNS",                              // 搜索引擎显示的标题
  SEO_keywords: "忏悔室", // keywords meta header
  CloudflareAnalyze: "",                                       // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "",                                           // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: "",                             // https://giscus.app/zh-CN

  Comment: {                                                   // 是否开启评论，请先设置上面的 CommentRepoId 和 CommentDiscussionCategoryId
    articles: true,                                            // “文章”是否开启评论
    records: false,                                            // “记录”是否开启评论
    knowledges: false                                          // “文化”是否开启评论
  },
  MongoDb: {                                                   // 浏览量统计，请先设置 https://vercel.com/integrations/mongodbatlas
    database: "nuxt3-blog",
    collection: "visitors",
    initialVisitors: 1,                                        // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: true                                      // 网站拥有者访问时，是否增加浏览量
  },
  themeColor: "#2aa0bb",                                       // 主题色
  defaultLang: "zh",                                           // default language, "zh" and "en" are supported currently
  timezone: "Asia/Shanghai",                                   // timezone, please refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List



  /** -------------------------------------------------以下不可修改----------------------------------------------------- */

  githubRepo: "7-nuns"                                    // 勿修改
};
