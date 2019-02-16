require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');
const api = require('./api');

const session = require('koa-session');

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI,
  COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
  console.log('connected to mongodb')
).catch((e) => {
  console.error(e);
});

const app = new Koa();
const router = new Router();

app.use(bodyParser());

const sessionConfig = {
  maxAge: 86400000
};

app.use(session(sessionConfig, app));
app.keys = [signKey];

// api 라우터 설정
router.use('/api', api.routes());

// 미들웨어는 app.use로 등록하는 순서대로 처리한다.
// app.use(async (ctx, next) => {
//   console.log(1);
//   await next();
//   console.log('bye');
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// 이 함수가 하나의 미들웨어이다.
// Koa의 미들웨어에서는 두 가지의 파라미터를 받는데 그것이 ctx와 next이다
// ctx: 웹 요청, 응답정보
// next: 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수 -> next는 Promise이기 때문에 작업이 끝나고 난 후 특정 작업을 수행할 수 있다.
// app.use((ctx) => {
//   ctx.body = 'hello world';
// });

router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('listening to port', port);
});