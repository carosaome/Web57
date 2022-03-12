async function wait(ms) {
    return new Promise((resolve)=>{
        return setTimeout(resolve, ms)
}
    )}
async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('running');
  await wait(200);
  console.log('ending');
}
go()