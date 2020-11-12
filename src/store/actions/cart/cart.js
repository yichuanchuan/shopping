export default {
  demo1(ctx, num){

    console.log(ctx)
    ctx.commit('demo',num)
  }
}
