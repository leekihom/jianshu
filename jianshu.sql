/*
Navicat MySQL Data Transfer

Source Server         : db
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : jianshu

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-04-15 14:08:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_article
-- ----------------------------
DROP TABLE IF EXISTS `t_article`;
CREATE TABLE `t_article` (
  `id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文章ID',
  `date` bigint NOT NULL COMMENT '文章发表时间',
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文章封面',
  `content` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文章内容',
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文章标题',
  `author_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '文章作者',
  `like` int unsigned NOT NULL DEFAULT '0' COMMENT '文章点赞数',
  `author_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '作者ID',
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_article
-- ----------------------------
INSERT INTO `t_article` VALUES ('2b6d9960-9db0-11eb-8d9b-e1f9e6434666', '1618466553335', 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg', '{\"blocks\":[{\"key\":\"446gd\",\"text\":\"1、《局外人》\",\"type\":\"header-three\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}},{\"key\":\"922dm\",\"text\":\"\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d540v\",\"text\":\"a\",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":1,\"key\":0}],\"data\":{\"nodeAttributes\":{\"data-original-src\":\"//upload-images.jianshu.io/upload_images/5078275-ff71f1e9dabfaa2b.jpg\",\"data-original-width\":\"720\",\"data-original-height\":\"309\",\"data-original-format\":\"image/jpeg\",\"data-original-filesize\":\"55295\",\"data-image-index\":\"0\",\"class\":\"\",\"src\":\"https://upload-images.jianshu.io/upload_images/5078275-ff71f1e9dabfaa2b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\"},\"float\":\"\",\"alignment\":\"\"}},{\"key\":\"ckesr\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2ha6o\",\"text\":\"在以我为主角的法庭上，我却成了局外人。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}},{\"key\":\"csgb6\",\"text\":\"2、《查令十字街84号》\",\"type\":\"header-three\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}},{\"key\":\"24j5v\",\"text\":\"\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"34o9c\",\"text\":\"a\",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":1,\"key\":1}],\"data\":{\"nodeAttributes\":{\"data-original-src\":\"//upload-images.jianshu.io/upload_images/5078275-8527a49748086390.jpg\",\"data-original-width\":\"720\",\"data-original-height\":\"313\",\"data-original-format\":\"image/jpeg\",\"data-original-filesize\":\"42656\",\"data-image-index\":\"1\",\"class\":\"\",\"src\":\"https://upload-images.jianshu.io/upload_images/5078275-8527a49748086390.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\"},\"float\":\"\",\"alignment\":\"\"}},{\"key\":\"fgrht\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9j7u0\",\"text\":\"“但是，书店还在那儿，你们若恰好经过查令十字街84号，代我献上一吻，我亏欠它良多......”\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}},{\"key\":\"ahrkd\",\"text\":\"3、《情书》\",\"type\":\"header-three\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}},{\"key\":\"dlnm4\",\"text\":\"\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"986bq\",\"text\":\"a\",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":1,\"key\":2}],\"data\":{\"nodeAttributes\":{\"data-original-src\":\"//upload-images.jianshu.io/upload_images/5078275-0ca81a887c6a2df3.jpg\",\"data-original-width\":\"720\",\"data-original-height\":\"330\",\"data-original-format\":\"image/jpeg\",\"data-original-filesize\":\"46354\",\"data-image-index\":\"2\",\"class\":\"\",\"src\":\"https://upload-images.jianshu.io/upload_images/5078275-0ca81a887c6a2df3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\"},\"float\":\"\",\"alignment\":\"\"}},{\"key\":\"6joei\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ercug\",\"text\":\"“暗恋”应该是每个人学生时代都逃不过的话题，关于暗恋的作品也有很多，而最让我触动的还是这本《情书》。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"start\",\"textIndent\":1}}],\"entityMap\":{\"0\":{\"type\":\"IMAGE\",\"mutability\":\"IMMUTABLE\",\"data\":{\"meta\":{},\"url\":\"https://upload-images.jianshu.io/upload_images/5078275-ff71f1e9dabfaa2b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\",\"width\":\"auto\",\"height\":\"auto\"}},\"1\":{\"type\":\"IMAGE\",\"mutability\":\"IMMUTABLE\",\"data\":{\"meta\":{},\"url\":\"https://upload-images.jianshu.io/upload_images/5078275-8527a49748086390.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\",\"width\":\"auto\",\"height\":\"auto\"}},\"2\":{\"type\":\"IMAGE\",\"mutability\":\"IMMUTABLE\",\"data\":{\"meta\":{},\"url\":\"https://upload-images.jianshu.io/upload_images/5078275-0ca81a887c6a2df3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp\",\"width\":\"auto\",\"height\":\"auto\"}}}}', '强烈分享5本熬夜也要看完的好书！', '张三', '0', '51210180-9dae-11eb-a9c0-51633a963af2', '极其强烈推荐5本爱不释手的好书，每本都是压箱底的神作。\n\n它们不仅懂我，还给了我很多启发，是我成长路上必不可少的闲时陪伴。\n\n现在分享给大家，希望也能对你们有所帮助，喜欢的同学别忘了点赞收藏哦~');
INSERT INTO `t_article` VALUES ('51f66800-9db0-11eb-b5a9-89f5c13c7ef9', '1618466617984', 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg', '{\"blocks\":[{\"key\":\"1hste\",\"text\":\"今天下午，我在公司前面拍照片，然后听到HR叫我们组新来的同事(工作一周了)去聊，然后他们聊了好一会儿，里面还传出了笑声，我以为就是简单地问询，没想到，小哥回到工位收拾了一下东西，和我们说了句再见，就离开了。\\n(我当时就很诧异，虽然我能感觉到他其实也有不想在这里工作下去的欲望，有的人，真的是看一眼就能知道，我感觉他似乎也洞察到我不想继续在这里工作下去的意思了。)\\n等我拍摄完回到工位，发现大家都很自然，没有什么额外的表情，我自然也得假装一下了，虽然心里抓心似的想知道，但还是没有问出口，感觉周边都是“老狐狸”。\\n其实，我很佩服他，找工作是个双向选择的过程，干不开心了，觉得工作没有达到预期，那就及早抽身，另谋他路，就觉得很理智，很有想法，我还挺佩服他的。\\n\\n\\n作者：沐梓茜\\n链接：https://www.jianshu.com/p/41a58cd77457\\n来源：简书\\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', '新来的同事离职了', '张三', '0', '51210180-9dae-11eb-a9c0-51633a963af2', '其实，我很佩服他，找工作是个双向选择的过程，干不开心了，觉得工作没有达到预期，那就及早抽身，另谋他路，就觉得很理智，很有想法，我还挺佩服他的。');

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '评论ID',
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '评论内容',
  `date` bigint NOT NULL COMMENT '评论时间',
  `article_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '关联文章ID',
  `author_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '评论人ID',
  `author_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '评论人username',
  `invalid` int NOT NULL DEFAULT '0' COMMENT '评论是否有效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
INSERT INTO `t_comment` VALUES ('3c6a3390-9db0-11eb-9df6-6b85a71b108c', '极其强烈推荐5本爱不释手的好书，每本都是压箱底的神作。\n\n它们不仅懂我，还给了我很多启发，是我成长路上必不可少的闲时陪伴。\n\n现在分享给大家，希望也能对你们有所帮助，喜欢的同学别忘了点赞收藏哦~', '1618466581833', '2b6d9960-9db0-11eb-8d9b-e1f9e6434666', '51210180-9dae-11eb-a9c0-51633a963af2', '张三', '0');
INSERT INTO `t_comment` VALUES ('429c1ae0-9daa-11eb-9909-2da9caeb7bae', '测试评论', '1618464015246', '76c5f1e0-9d84-11eb-8ce0-bf295cdf3809', '770f2390-9cfa-11eb-8074-6127fc623461', 'test', '0');
INSERT INTO `t_comment` VALUES ('78983ce0-9db0-11eb-9572-0d548829b67a', '第一本我很喜欢！', '1618466682798', '2b6d9960-9db0-11eb-8d9b-e1f9e6434666', '5bddb960-9dae-11eb-b53e-e38e9c0e02f9', '李四', '0');
INSERT INTO `t_comment` VALUES ('f8898cd0-9da9-11eb-8ff4-b520485303d7', 'userIduserIduserIduserIduserId', '1618463890973', '76c5f1e0-9d84-11eb-8ce0-bf295cdf3809', '7c7d0ea0-9da4-11eb-9330-d540e289d133', 'demo', '0');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户ID',
  `username` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号码',
  `date` bigint NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('51210180-9dae-11eb-a9c0-51633a963af2', '张三', '4d4994bde299f6168c65f24c852897b7', '1231231231', '1618465757592');
INSERT INTO `t_user` VALUES ('5bddb960-9dae-11eb-b53e-e38e9c0e02f9', '李四', '4d4994bde299f6168c65f24c852897b7', '1231564', '1618465775606');
