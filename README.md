# 个人博客系统

客户端：客户端暂时只能浏览展示及分类功能

管理端：除展示、分类外，还有新文章、新箴言以及管理功能

后端管理：后端采用express+es6，遵循restful api规则，返回的格式为jsonp, {success: true, result: data}

文件目录为：

![server端目录](https://github.com/susantong/blogSystem/raw/master/blogSystem_view/src/assets/images/server.png)

api|功能|所需参数|成功时的返回值|失败时的返回值
-|-|-|-|-
/login|管理员登录|\{username, password\}|\{success: true, result: 'susan'\}|\{success: false, 'username default'\}或者\{success: false, 'password default'\}
/manager/article/findAll|查询所有文章列表（分页）|\{last_id, pageSize\}|\{success: true, result: data\}|\{success: false, result: 'find failed'\}
/manager/article/findById|根据id查找文章|id|\{success: true, result: data\}|\{success: false, result: 'find by id failed'\}
/manager/article/findByType|根据type查找文章|type|\{success: true, result: data\}|\{success: false, result: 'find by type failed'\}
/manager/article/deleteArticles|根据id删除文章|\{id, path(图片路径)\}|\{success: true, result: 'delete success'\}|\{success: false, result: 'delete image failed'\}或者\{success: false, result: 'delete failed'\}
/manager/article/updateArticles|根据id修改文章|id|\{success: true, result: 'update success'\}|\{success: false, result: 'update failed'\}
/manager/article/postArticles|发表文章|\{headImg(图片路径), type, title, contents\}|\{success: true, result: 'post article success'\}|\{success: false, result: 'the image deal failed'\}或者\{success: false, result: 'post article failed'\}
/manager/article/findAllType|查找所有类型文章|不需要提供参数|\{success: true, result: data\}|\{success: false, result: 'articleType  find failed'\}
/manager/article/addWatchNum|修改文章浏览量|\{id, watchNum\}|\{success: true, result: 'update success'\}|\{success: false, result: 'update failed'\}
/manager/maxim/postMaxims|发表箴言|\{upload(图片地址), text\}|\{success: true, result: 'post maxim success'\}|\{success: false, result: 'post maxim failed'\}或者\{success: false, result: 'the image deal failed'\}
/manager/maxim/findAll|查询所有箴言（分页）|\{last_id, pageSize\}|\{success: true, result: data\}|\{success: false, result: 'find failed'\}
/manager/maxim/deleteMaxims|根据id删除箴言|\{id, path\}|\{success: true, result: 'delete success'\}|\{success: false, result: 'delete failed'\}或者\{success: false, result: 'delete image failed'\}
/manager/maxim/findById|根据id查找箴言|id|\{success: true, result: data\}|\{success: false, result: 'ind by type failed'\}或者\{success: false, result: 'find by id failed'\}
/manager/maxim/updataMaxims|根据id修改箴言|\{id, text\}|\{success: true, result: 'update success'\}|\{success: false, result: 'update failed'\}

前端采用vue+webpack+es6+axios，模块化开发

文件目录为：

![前端文件目录](https://github.com/susantong/blogSystem/raw/master/blogSystem_view/src/assets/images/front.png)

数据库采用mongodb,使用mongoose操作

目前，更多的功能在开发中。。。
