export default {
  demo2(ctx, num){
    console.log(num)
    ctx.commit('demo2',num)
  }
}
